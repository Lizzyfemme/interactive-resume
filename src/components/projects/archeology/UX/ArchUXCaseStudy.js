import React from "react";
import styled from "styled-components";

import { dark } from "../../../../styles/colors";

import Intro from "./Intro";
import Goals from "./Goals"
import Process from "./Process"
import Persona from "./Persona";


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
<Persona />
</CaseStudy>
  )}