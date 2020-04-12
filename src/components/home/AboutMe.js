import React from "react";
import { ReactComponent as AboutMeSVG } from "./aboutMe.svg";
import styled from "styled-components";

const AboutMeDiv = styled.button`
 
  position: fixed;
  top: 75px;
  left: 150px;
  width: 205px;
  transform: rotate(20deg);
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
    width: 300px;
    top: 300px;
  }
`;
export default function AboutMe() {
  return (
    <AboutMeDiv>
      <AboutMeSVG />
    </AboutMeDiv>
  );
}
