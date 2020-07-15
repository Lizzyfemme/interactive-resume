import React from "react";

import { ReactComponent as LinkedSVG } from "./linkedin.svg";
import styled from "styled-components";

const LinkedDiv = styled.div`
  width: 125px;
  justify-self: center;
  align-self: center;
  background-color: transparent;
  background-size: cover;
  border: none;
  background-color: transparent;
`;
export default function LinkedIn() {
  return (
    <LinkedDiv>
      <LinkedSVG />
    </LinkedDiv>
  );
}
