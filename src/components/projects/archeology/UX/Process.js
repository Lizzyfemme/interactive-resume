import React from "react";

import styled from "styled-components";
import { dark, mid } from "../../../../styles/colors";


const ProcessLi = styled.li `
text-decoration-color: ${mid};
`;
const ProcessUL = styled.ul `
text-decoration-color: ${mid};
& li {
  text-decoration-color: ${mid}; 
}
`;
const ProcessStep = styled.h3 `
&:before {
  content: counter(section);
  display:inline-block;
  border-radius: 50%;
  padding: 10px;
  height: 1.25em;
  width: 1.25em;
  background-color: ${mid};
  text-align: center;
  line-height: 1.25em;
  color: var(--bg);
  font-weight: bold;
  font-size: 1em;
  margin-right: .5rem;
}
`

const ProcessDiv = styled.div `

  width: 40%;
  margin: 20px;


 div {
  font-size: 1em;
  line-height: 1.75em;
  border-top-width: 3px;
  border-top-style:dashed;
  border-color: ${mid};
  border-image-slice: 1;
  margin: 0;
  padding: 40px;
  counter-increment: section;
  position: relative;
  color: ${dark};
}
div:nth-child(odd) {
  border-right: 3px dashed ${mid};
  padding-left: 0;
}
div:nth-child(odd)::before {
  left: 100%;
  margin-left: -20px;
}

div:nth-child(even) {
  border-left: 3px dashed ${mid};
  padding-right: 0;
}
div:nth-child(even)::before {
  right: 100%;
  margin-right: -20px;
}

div:last-child {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
h2 {
  margin-top: 5px;
}

// `
const ProcessContainer = styled.div `
display:flex;
width:100%;
justify-content:space-evenly;
margin-top:2rem;
& h1 {
  font-size: 3rem;
}
& h1 span {
  text-transform:uppercase;
  font-family:'main-bold';
}

`
const ProcessColorBlock = styled.div `
background-color:${mid};
width:40%;
display:flex;
justify-content:center;
align-items: center;
`


export default function Process() {
  return (
<ProcessContainer>
  <ProcessColorBlock>
    <h1>The <span>Process</span></h1>
  </ProcessColorBlock>
   <ProcessDiv>
      <div>
        <ProcessStep>Define Problems</ProcessStep>
        <ProcessUL>
          <ProcessLi>Setting Goals</ProcessLi>
          <ProcessLi>Unvalidated User Personas</ProcessLi>
          <ProcessLi>Problem Statements</ProcessLi>
        </ProcessUL>
      </div>

      <div>
        <ProcessStep>Research</ProcessStep>
      <ProcessUL>
        <ProcessLi>User Research</ProcessLi>
        <ProcessLi>Clustering and Synthesis</ProcessLi>
        <ProcessLi>Validated User Personas</ProcessLi>
        {/* <li>Competitor Analysis</li> */}
        {/* <li>Market Analysis</li> */}
        <ProcessLi>UI Trends</ProcessLi>
        {/* <li>S.W.O.T Analysis</li> */}
      </ProcessUL>
    </div>

    <div>
      <ProcessStep>Create Solutions</ProcessStep>
      <ProcessUL>
        <ProcessLi>Research Insights</ProcessLi>
        <ProcessLi>Low-Fidelity Wireframes</ProcessLi>
        <ProcessLi>User Testing</ProcessLi>
        <ProcessLi>Layout and Composition</ProcessLi>
        <ProcessLi>Interactive Model</ProcessLi>
        <ProcessLi>Validating Solutions</ProcessLi>
      </ProcessUL>
    </div>

    <div>
      <ProcessStep>Design & Develop</ProcessStep>
      <ProcessUL>
        <ProcessLi>Design Theory</ProcessLi>
        <ProcessLi>Color Schemes</ProcessLi>
        <ProcessLi>High-Fidelity Prototype</ProcessLi>
        <ProcessLi>Icons</ProcessLi>
        <ProcessLi>Illustrations</ProcessLi>
        <li>Typography</li>
        {/* <li>Style Guides</li> */}
      </ProcessUL>
    </div>
    <div>
      <ProcessStep>Bulid MVP</ProcessStep>
    </div>

</ProcessDiv>
</ProcessContainer>
  )}