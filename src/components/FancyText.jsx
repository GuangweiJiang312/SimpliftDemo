import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";
// import * as d3 from "d3";
import Letter from "./Letter";

class FancyText extends Component {
    state = {
        textWithIds: [],
        lastId: 0
    };

    componentDidMount() {
        
        this.setupTextWithIds(this.props.text || "");
    }

    setupTextWithIds = (text) => {
        const newText = text ? text.split("") : [];
        const textWithIds = newText.map((char, index) => [char, index]);

        this.setState({ textWithIds, lastId: newText.length });
    };

    componentDidUpdate(prevProps) {
        if (prevProps.text === this.props.text) return;
    
        const oldText = this.state.textWithIds;
        const newText = this.props.text.split("");
    
        let newLastId = this.state.lastId;
        let newTextWithIds = [];
        let oldIndex = 0;
    
        // Assign IDs to new text, reusing old IDs where possible.
        newText.forEach((char, index) => {
            while (oldIndex < oldText.length && oldText[oldIndex][0] !== char) {
                oldIndex++; // Skip over any characters that no longer exist.
            }
            if (oldIndex < oldText.length && oldText[oldIndex][0] === char) {
                newTextWithIds.push(oldText[oldIndex]); // Reuse old ID for the same character.
                oldIndex++;
            } else {
                newTextWithIds.push([char, newLastId++]); // Assign new ID for new character.
            }
        });
    
        // Update the state with the new text with IDs
        this.setState({
            textWithIds: newTextWithIds,
            lastId: newLastId
        });
    }

    render() {
        let { x, y } = this.props;
        let textWithIds = this.state.textWithIds.filter(entry => entry !== undefined);

        return (
            <g transform={`translate(${x - 330}, ${y})`}>
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
