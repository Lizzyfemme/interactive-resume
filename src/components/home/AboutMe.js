import React from "react";
import { ReactComponent as AboutMeSVG } from "./aboutMe.svg";
import styled from "styled-components";

const AboutMeDiv = styled.button`
 
  position: fixed;
  top: 215px;
  left: 175px;
  width: 175px;
  transform: rotate(5deg);
  border: none;
  background-color: transparent;
  &:focus {
    outline: 0;
  }
  }
  @media screen and (min-width: 700px) {
    width: 230px;
    left: 325px;
    top:275px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
    left: 400px;
    top: 490px;
  }
`;
export default function AboutMe() {
  return (
    <AboutMeDiv>
      <AboutMeSVG />
    </AboutMeDiv>
  );
}
