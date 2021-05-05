import React from "react";
import styled from "styled-components";

import ResearchingRyan from "./ResearchingRyanImage"
import Age from "../../images/icons/Age"
import Education from "../../images/icons/Education"
import Location from "../../images/icons/Location"
import Programs from "../../images/icons/Programs"

import { highlight } from "../../../../styles/colors";

const PersonaHeader = styled.h2 `
padding-top: 1rem;
`
const DemograhicInfo = styled.div `
display:flex;
align-items:center;
`
const PersonaDiv = styled.div `
background-color: ${highlight};
`

export default function Persona() {
  return (
    <PersonaDiv>
<PersonaHeader>Persona</PersonaHeader>
    <article>
    <h2><span>Researching </span>Ryan</h2>
    <ResearchingRyan>
   
      </ResearchingRyan>

      <h3>Demographics</h3>
      <DemograhicInfo>
       <Age />
        <p>30-45</p>
        </DemograhicInfo>
        <DemograhicInfo>
        <Education />
        <p>Working towards a Masters or Doctorate</p>
        </DemograhicInfo>
        <DemograhicInfo>
        <Location />
        <p>Urban area, close to their university</p>
        </DemograhicInfo>
        <DemograhicInfo>
        <Programs />
        <p>Excel, Google earth</p>
      </DemograhicInfo>
      <h3>Behaviours</h3>
      <ul>
        <li>Using online resources to research</li>
        <li>Traveling to museums</li>
        <li>Writing a thesis or other papers</li>
        <li>Uses laptop primary for studying</li>
      </ul>
      <h3>Goals</h3>
      <ul>
        <li>Needs to complete their paper and their degree.</li>
        <li>Wants to see their data.</li>
        <li>Curious to see what they can find out.</li>
      </ul>
    </article>
    </PersonaDiv>
  )}