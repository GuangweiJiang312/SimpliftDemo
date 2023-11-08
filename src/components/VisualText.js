import React, { Component } from 'react';
import FancyText from './FancyText';
import './VisualText.css';

class VisualText extends Component {
    state = {
        simplificationLevel: 0,
        textVersions: [
            "Weng earns $12 an hour for babysitting. Yesterday, she just did 50 minutes of babysitting. How much did she earn?",
            "Weng earns $12 per hour for babysitting. Yesterday, she babysat for 50 minutes. How much did she earn?",
            "Weng earns $12 for babysitting for an hour. Yesterday, she babysat for 50 minutes. How much did she earn?",
            "Weng earns $12 per hour for babysitting. Yesterday, she babysat for 50 minutes. How much did she earn?"
        ],
        currentText: "",
        lines: [],
    };

    componentDidMount() {
        // Set the initial text when the component mounts
        this.setInitialText();
    }

    setInitialText = () => {
        const initialText = this.state.textVersions[0];
        this.setState({
            currentText: initialText,
            lines: this.splitTextIntoLines(initialText, 33)
        });
    }

    handleSliderChange = (event) => {
        const level = parseInt(event.target.value, 10);
        this.updateText(level);
    };

    updateText = (level) => {
        const newText = this.state.textVersions[level];
        this.setState({
            simplificationLevel: level,
            currentText: newText,
            lines: this.splitTextIntoLines(newText, 33)
        });
    };

    splitTextIntoLines(text, maxLineWidth) {
        const words = text.split(/\s+/); // Split by space
        const lines = [];
        let currentLine = words.shift();

        words.forEach(word => {
            const newLine = currentLine + ' ' + word;
            if (newLine.length > maxLineWidth) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = newLine;
            }
        });

        lines.push(currentLine); // Push the last line

        return lines;
    }

    goBack = () => {
        // Logic to go back to the previous page
        // For example, using react-router's history object:
        // this.props.history.goBack();
    };

    render() {
        const { lines, simplificationLevel } = this.state;

        // Define the SVG viewBox dimensions
        const viewBoxWidth = 1000; // This can be an arbitrary number
        const viewBoxHeight = 500; // Adjust this based on your aspect ratio

        // Calculate the center position for the text
        const xCenter = 0;
        const yStart = 100; // Start y position for the first line
        const lineHeight = 40; // Height of each line including space between lines

        // const lines = this.splitTextIntoLines(currentText, 33);

        return (
            <div className="container">
                <button className="back-button" onClick={this.props.previousPage}>Back</button>
                <h2>Text Simplification Animator</h2>
                <svg
                    className="text-container"
                    viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
                    preserveAspectRatio="xMidYMid meet"
                >
                    {lines.map((line, index) => (
                        console.log(line),
                        <FancyText
                            key={`line-${index}`}
                            x={xCenter}
                            y={yStart + index * lineHeight}
                            text={line}
                            textAnchor="middle"
                        />
                    ))}
                </svg>
                <div className="slider-container">
                    <input
                        type="range"
                        min="0"
                        max="3"
                        value={simplificationLevel}
                        onChange={this.handleSliderChange}
                        // step="1"
                        className="slider"
                    />
                    <div className="labels-container">
                        <label className="slider-label">Initial</label>
                        <label className="slider-label">Simplified 1 time</label>
                        <label className="slider-label">Simplified 2 times</label>
                        <label className="slider-label">Simplified 3 times</label>
                    </div>
                </div>
                <a href="https://forms.gle/ectP6M1qtLCGVyf56" className="survey-link">Take our survey</a>
            </div>
        );
    }
}

export default VisualText;