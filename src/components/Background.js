import React from 'react';
import './Background.css';

const Background = ({ nextPage }) => {
  return (
    <div className="background-container">
      <div className="content">
        <h1>Research Background</h1>
        <p>Here is the text describing the background and methodology of the research...</p>
        <button className="next-button" onClick={nextPage}>Explore</button>
      </div>
    </div>
  );
};

export default Background;