import React from "react";
import { ReactComponent as ProjectsSVG } from "./projects.svg";
import styled from "styled-components";

const ProjectsDiv = styled.button`
 
  position: fixed;
  top: 160px;
  left: 50px;
  width: 150px;
  transform: rotate(-5deg);
  border: none;
  background-color: transparent;
  &:focus {
    outline: 0;
  }
  }
  @media screen and (min-width: 700px) {
    width: 190px;
    top: 200px;
    left: 150px;
  }

  @media screen and (min-width: 1200px) {
    width: 275px;
    top: 380px;
  }
`;
export default function Projects() {
  return (
    <ProjectsDiv>
      <ProjectsSVG />
    </ProjectsDiv>
  );
}
