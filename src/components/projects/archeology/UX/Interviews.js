import React from "react";
import styled from "styled-components";

const InterviewContainer =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
margin: 10px 1.25rem;

h1 span {
  text-transform:uppercase;
  font-family: main-bold;
}
h2 {
  font-family: main-bold;
  font-size:25rem;
  height:26rem;
  margin:1rem;
}
h3 {
  font-size: 35px;
  font-family: main-bold;
  margin: 0;
  text-align:center;
}

`;

export default function Process() {
  return (
<InterviewContainer>
      <h1>The <span>Interviews</span></h1>
        <h2>3</h2>
        <h3>Subject Matter Experts</h3>

        <div class="learning-goals">
        <h1><span>Learning</span> Goals</h1>
      <p>What resources do they use for researching primary sources? What problems they are having? What programs are they currently using? </p> 
      </div>
</InterviewContainer>

  )}