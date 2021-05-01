import React from "react";

import styled from "styled-components";

const processDiv = styled.div `
#process {
  min-width: 300px;
  max-width: 500px;
  margin: 20px;
}

span {
  color: var(--accent);
  font-weight: bold;
}

h2 {
  color: var(--accent);
}
ul li {
  text-decoration-color: var(--hightlight);
}

 div {
  font-size: 1em;
  line-height: 1.75em;
  border-top: 3px dashed var(--highlight);
  border-image-slice: 1;
  border-width: 3px;
  margin: 0;
  padding: 40px;
  counter-increment: section;
  position: relative;
  color: var(--dark-text);
}
/* //numbers */
#process div::before {
  content: counter(section);
  position: absolute;
  border-radius: 50%;
  padding: 10px;
  height: 1.25em;
  width: 1.25em;
  background-color: var(--highlight);
  text-align: center;
  line-height: 1.25em;
  color: var(--bg);
  font-weight: bold;
  font-size: 1em;
}
/* //odd number borders */
#process div:nth-child(odd) {
  border-right: 3px dashed var(--highlight);
  padding-left: 0;
}
#process div:nth-child(odd)::before {
  left: 100%;
  margin-left: -20px;
}
/* //even number borders */
#process div:nth-child(even) {
  border-left: 3px dashed var(--highlight);
  padding-right: 0;
}
#process div:nth-child(even)::before {
  right: 100%;
  margin-right: -20px;
}

/* //handle first and last */
#process div:first-child {
  border-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
#process div:last-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
#process h2 {
  margin-top: 5px;
}

// `


export default function Process() {
  return (
<processDiv id= "process">
<h1>The <span>Process</span></h1>
   
      <div>
        <h2>Define Problems</h2>
        <ul>
          <li>Setting Goals</li>
          <li>Unvalidated User Personas</li>
          <li>Problem Statements</li>
        </ul>
      </div>

      <div>
        <h2>Research</h2>
      <ul>
        <li>User Research</li>
        <li>Clustering and Synthesis</li>
        <li>Validated User Personas</li>
        <li>Competitor Analysis</li>
        <li>Market Analysis</li>
        <li>UI Trends</li>
        <li>S.W.O.T Analysis</li>
      </ul>
    </div>

    <div>
      <h2>Create Solutions</h2>
      <ul>
        <li>Research Insights</li>
        <li>Low-Fidelity Wireframes</li>
        <li>User Testing</li>
        <li>Layout and Composition</li>
        <li>Interactive model</li>
        <li>Validations</li>
      </ul>
    </div>

    <div>
      <h2>Design & Develop</h2>
      <ul>
        <li>Design Theory</li>
        <li>Color Schemes</li>
        <li>High-Fidelity Prototype</li>
        <li>Icons</li>
        <li>Illustrations</li>
        <li>Typography</li>
        <li>Style Guides</li>
      </ul>
    </div>
    <div>
      <h2>Bulid MVP</h2>
    </div>

</processDiv>
  )}