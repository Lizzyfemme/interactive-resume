import React from "react";

import { ReactComponent as AgeSVG } from "./age.svg";
import styled from "styled-components";

const AgeDiv = styled.div`
  width: 125px;
  justify-self: center;
  align-self: center;
  background-color: transparent;
  background-size: cover;
  border: none;
  background-color: transparent;
`;
export default function Age() {
  return (
    <AgeDiv>
      <AgeSVG />
    </AgeDiv>
  );
}