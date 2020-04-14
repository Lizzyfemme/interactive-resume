import React from "react";
import { ReactComponent as InteractiveResumeSVG } from "./interactiveResume.svg";
import styled from "styled-components";

const InteractiveResumeButton = styled.button`
  object-fit: cover;

  background-size: cover;
  transform: rotate(-20deg);
  border: none;
  background-color: transparent;
  position: fixed;
  width: 150px;
  top: 50px;
  left: 200px;
  &:focus {
    outline: 0;
  }

  @media screen and (min-width: 700px) {
    width: 225px;
    top: 250px;
    left: 230px;
  }

  @media screen and (min-width: 1200px) {
    width: 250px;
    left: 400px;
    top: 200px;
  }
`;
export default function InteractiveResume() {
  return (
    <InteractiveResumeButton>
      <InteractiveResumeSVG />
    </InteractiveResumeButton>
  );
}
