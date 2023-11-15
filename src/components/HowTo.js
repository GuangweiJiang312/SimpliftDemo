import React, { Component } from 'react';
import FancyText from './FancyText';
import './Background.css';
import ReactECharts from 'echarts-for-react';

class HowTo extends Component {

    render() {

        return (
            <div className="container">
                <button className="back-button" onClick={this.props.previousPage}>Back</button>
      		<div className="content">
		<h1>This demo displays sample simplifications performed by our system.</h1>
        <div className="image-container">
          <img src={process.env.PUBLIC_URL + "/howto.png"} alt="How To" className="research-image" />
        </div>
		<p>Choose which domain (Math or Science) and question you would like to see from the drop-down menus at the top. </p>
		<p>Select question version (original, most simplified, and simplified to a specific Lexile score) using the buttons on the bottom left.</p>
		<p>Simplification measures for each version of the question are shown in the bar graph, with the y-axis showing estimated Lexile score. Highlighted bar corresponds to the currently selected question version.</p>
        	<button className="next-button" onClick={this.props.nextPage}>Explore</button>
		</div>
            </div>
        );
    }
}

export default HowTo;
