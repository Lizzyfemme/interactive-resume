import React from "react";
import styled from "styled-components";

import { dark } from "../../../../styles/colors";

import Intro from "./Intro";
import Goals from "./Goals"
import Process from "./Process"
import Interview from "./Interviews";
import Persona from "./Persona";
import ResearchSynthesis from "./ResearchSynthesis"


const CaseStudy = styled.div `
color:${dark};
font-size:1.25rem;
width: fit-content;
`


export default function ArchUXCaseStudy() {
  return (
<CaseStudy>
<Intro />
<Goals />
<Process />
<Interview />
<ResearchSynthesis />
<Persona />
</CaseStudy>
  )}