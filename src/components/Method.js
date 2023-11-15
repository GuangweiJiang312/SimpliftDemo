import React, { Component } from 'react';
import './Background.css';

class Method extends Component {

    render() {

        return (
            <div className="container">
                <button className="back-button" onClick={this.props.previousPage}>Back</button>
      		<div className="content">
		<h1>Simplification Method.</h1>
		<p>Text is simplified using the most powerful language model today (November 2023): GPT-4. We use a self-correcting instructed few-shot prompting method. Specifically, we provide detailed instructions in natural language along with a handful of exemplar simplifications. For the candidate simplification proposed by the language model, we evaluate whether it (a)  sufficiently simplified the text according to the desired specifications and (b) retained all necessary information. If both (a) and (b) have been satisfied, the proposed simplification is accepted. Otherwise, we detail to the language model which specifications the simplification failed at, and ask the model to propose an improved simplification. We run this self-correction a maximum of 3 times. </p>
		<p>(a) Satisfaction of simplification is measured using a linear regression model over the specified simplification features. (b) Correctness is measured by querying another language model to examine whether it can still obtain the same answer to the question after simplification.</p>
		</div>
                <a href="https://forms.gle/Ud8qdSxiUw5quTBQA" className="survey-link">Take our survey</a>
            </div>
        );
    }
}

export default Method;
