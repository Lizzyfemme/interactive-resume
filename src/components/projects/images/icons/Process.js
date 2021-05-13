import React from "react";
import styled from "styled-components";

import { ReactComponent as ProcessSVG } from "./process.svg";

const ProcessContainer = styled.div `
width:38vw;
height:30vw;

max-width:350px;
max-height:350px;

@media screen and (max-width: 600px){
width:100px;
height:100px;
}
`;
export default function Process() {
  return (
    <ProcessContainer>
      <ProcessSVG />
    </ProcessContainer>
  );
}