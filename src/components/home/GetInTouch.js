import React from "react";
import { ReactComponent as GetInTouchSVG } from "./getInTouch.svg";
import styled from "styled-components";

const GetInTouchDiv = styled.button`
 
  position: fixed;
  top: 25px;
  left: 25px;
  width: 175px;
  transform: rotate(20deg);
  border: none;
  background-color: transparent;
  &:focus {
    outline: 0;
  }
  }
  @media screen and (min-width: 700px) {
    top: 30px;
    width: 230px;
    left: 125px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
    top: 125px;
  }
`;
export default function GetInTouch() {
  return (
    <GetInTouchDiv>
      <GetInTouchSVG />
    </GetInTouchDiv>
  );
}
