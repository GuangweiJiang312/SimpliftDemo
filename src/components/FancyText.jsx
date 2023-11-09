import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";
import * as d3 from "d3";
import Letter from "./Letter";

class FancyText extends Component {
    state = {
        textWithIds: [],
        lastId: 0
    };

    componentDidMount() {
        // Initialize textWithIds when the component mounts
        this.setupTextWithIds(this.props.text || "");
    }

    setupTextWithIds = (text) => {
        const newText = text ? text.split("") : [];
        const textWithIds = newText.map((char, index) => [char, index]); // Use index as a key

        this.setState({ textWithIds, lastId: newText.length });
    };

    componentDidUpdate(prevProps) {
        if (prevProps.text === this.props.text) return;

        const oldText = this.state.textWithIds;
        const newText = this.props.text.split("");
        let indexOfChange = 0,
            sizeOfChange = 0,
            newLastId = this.state.lastId;

        // find change
        for (
            ;
            newText[indexOfChange] ===
            (oldText[indexOfChange] && oldText[indexOfChange][0]);
            indexOfChange++
        );

        // calculate size of change
        if (newText.length > oldText.length) {
            while (
                newText[indexOfChange + sizeOfChange] !==
                (oldText[indexOfChange] && oldText[indexOfChange][0]) &&
                indexOfChange + sizeOfChange < newText.length
            ) {
                sizeOfChange = sizeOfChange + 1;
            }
        } else {
            while (
                newText[indexOfChange] !==
                (oldText[indexOfChange + sizeOfChange] &&
                    oldText[indexOfChange + sizeOfChange][0]) &&
                indexOfChange + sizeOfChange < oldText.length
            ) {
                sizeOfChange = sizeOfChange + 1;
            }
        }

        // use existing ids up to point of change
        d3.range(0, indexOfChange).forEach(i => (newText[i] = oldText[i]));

        // use new ids for additions
        if (newText.length > oldText.length) {
            d3.range(indexOfChange, indexOfChange + sizeOfChange).forEach(i => {
                let letter = newText[i];
                newText[i] = [letter, newLastId++];
            });

            // use existing ids from change to end
            d3.range(indexOfChange + sizeOfChange, newText.length).forEach(
                i => (newText[i] = oldText[i - sizeOfChange])
            );
        } else {
            // use existing ids from change to end, but skip what's gone
            d3.range(indexOfChange, newText.length).forEach(i => {
                const oldIndex = i + sizeOfChange;
                if (oldIndex < oldText.length) {
                    newText[i] = oldText[oldIndex];
                } else {
                    newText[i] = [newText[i], newLastId++];
                }
            });
        }

        this.setState({
            textWithIds: newText,
            lastId: newLastId
        });
    }



    render() {
        let { x, y } = this.props;
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhh")
        console.log(this.state.textWithIds)
        // let textWithIds = Array.isArray(this.state.textWithIds) ? this.state.textWithIds : [];
        let textWithIds = this.state.textWithIds.filter(entry => entry !== undefined);

        return (
            <g transform={`translate(${x}, ${y})`}>
                <TransitionGroup component="g" enter={true} exit={true}>
                    {textWithIds.map(([l, id], i) => (
                        <Letter letter={l} index={i} key={id} />
                    ))}
                </TransitionGroup>
            </g>
            
        );
    }
}

export default FancyText;
