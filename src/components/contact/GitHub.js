import React from "react";

import { ReactComponent as GithubSVG } from "./github.svg";
import styled from "styled-components";

const GithubDiv = styled.div`
  width: 125px;
  justify-self: center;
  align-self: center;
  background-color: transparent;
  background-size: cover;
  border: none;
  background-color: transparent;
`;
export default function Github() {
  return (
    <GithubDiv>
      <GithubSVG />
    </GithubDiv>
  );
}
