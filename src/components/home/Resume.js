import React from "react";
import { ReactComponent as InteractiveResumeSVG } from "./interactiveResume.svg";
import styled from "styled-components";

const InteractiveResumeDiv = styled.div`
  object-fit: cover;

  background-size: cover;
  transform: rotate(-20deg);
  border: none;
  background-color: transparent;
  position: fixed;
  width: 175px;
  top: 225px;
  left: 175px;

  @media screen and (min-width: 700px) {
    width: 225px;
    top: 250px;
    left: 230px;
  }

  @media screen and (min-width: 1200px) {
    width: 250px;
    left: 430px;
    top: 200px;
  }
  svg {
    width: inherit;
  }
`;
export default function InteractiveResume() {
  return (
    <InteractiveResumeDiv>
      <InteractiveResumeSVG />
    </InteractiveResumeDiv>
  );
}
