import React from 'react';
import './Background.css';

const Background = ({ nextPage }) => {
  return (
    <div className="background-container">
      <div className="content">
        <h1>Research Introduction</h1>
        <p>Language is everywhere, and we know that when students struggle with language and reading, that doesn’t stop when they leave the therapy room.</p>
        <p>Students with language and literacy disorders have difficulty across the curriculum, including in math and science. Students with Developmental Language Disorder and Dyslexia score below their peers not only in language, but also math. Importantly, these students don’t catch up to their peers by fourth grade.</p>
        <div className="image-container">
          <img src="https://raw.githubusercontent.com/GuangweiJiang312/LinkForImage/main/SimplifyDemo/img.png" alt="Educational graphic" className="research-image" />
          <div className="image-caption">Figure from Duff, Hendricks, Fitton & Adlof 2022</div>
        </div>
        <p>But there’s a lot of language and reading in these other subjects. We teach math through language. Students are expected to read word problems when they are tested on math. One option to provide access to math and science curriculum and accurately assess their skills in these areas is to change the reading level of texts across the curriculum.</p>
        <p>We know, however, that each student is different. Some have difficulties in decoding words, others have difficulties in understanding grammar or vocabulary.</p>
        <p>We are trying to tailor texts across the curriculum to students’ individual needs. The ultimate goal is to provide individualized texts to provide students access to important content while also responsively increasing the complexity to keep the content within the child’s Zone of Proximal Development to improve language skills at the same time.</p>
        <button className="next-button" onClick={nextPage}>Explore</button>
      </div>
    </div>
  );
};

export default Background;