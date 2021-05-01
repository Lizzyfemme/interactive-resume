import React from "react";
import Intro from "./Intro";
import Goals from "./Goals"
import Persona from "./Persona";
import styled from "styled-components";

const CaseStudy = styled.div `
margin:2rem;
`


export default function ArchUXCaseStudy() {
  return (
<CaseStudy>
<Intro />
<Goals />
<Persona />
</CaseStudy>
  )}