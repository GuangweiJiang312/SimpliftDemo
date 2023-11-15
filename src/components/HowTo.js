import React, { Component } from 'react';
import './Background.css';

class HowTo extends Component {

    render() {

        return (
            <div className="container">
                <button className="back-button" onClick={this.props.previousPage}>Back</button>
                <div className="logo">
			<img src={process.env.PUBLIC_URL + "/banner_edai_logo.png"} alt="banner"/>
		</div>
      		<div className="content">
        <div className="image-container">
          <img src={process.env.PUBLIC_URL + "/howto.png"} alt="How To" className="demo-image"/>
        </div>
		<h2>This demo displays sample simplifications performed by our system.</h2>
		<p>Simplification measures for each version of the question are shown in the bar graph, with the y-axis showing estimated Lexile score. Highlighted bar corresponds to the currently selected question version.</p>
        	<button className="next-button" onClick={this.props.nextPage}>Explore</button>
		</div>
            </div>
        );
    }
}

export default HowTo;
