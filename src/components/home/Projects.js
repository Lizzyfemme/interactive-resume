import React from "react";
import { ReactComponent as ProjectsSVG } from "./projects.svg";
import styled from "styled-components";

const ProjectsDiv = styled.button`
 
  position: fixed;
  top: 150px;
  left: 65px;
  width: 205px;
  transform: rotate(-5deg);
  border: none;
  background-color: transparent;
  &:focus {
    outline: 0;
  }
  }
  @media screen and (min-width: 700px) {
    width: 275px;
    left: 100px;
  }
  @media screen and (min-width: 1200px) {
    width: 275px;
    top: 400px;
  }
`;
export default function Projects() {
  return (
    <ProjectsDiv>
      <ProjectsSVG />
    </ProjectsDiv>
  );
}
