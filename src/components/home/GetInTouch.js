import React from "react";
import { ReactComponent as GetInTouchSVG } from "./getInTouch.svg";
import styled from "styled-components";

const GetInTouchDiv = styled.button`
 
  position: fixed;
  top: 75px;
  left: 65px;
  width: 205px;
   
  transform: rotate(20deg);
  border: none;
  background-color: transparent;
  
  }
  @media screen and (min-width: 700px) {
    width: 275px;
    left: 100px;
  }
  @media screen and (min-width: 1200px) {
    width: 300px;
    top: 125px;
  }
`;
export default function GetInTouch(props) {
  return (
    <GetInTouchDiv onClick={props.contact}>
      <GetInTouchSVG />
    </GetInTouchDiv>
  );
}
