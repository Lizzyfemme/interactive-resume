import React from "react";

import { ReactComponent as GithubSVG } from "./svg/github.svg";

import styled from "styled-components";

const GitHubButton = styled.button`


  margin-left: auto;
  margin-top: 10px;
  border: none;
  justify-self: end;
  align-self: end;
  width: 115px;
  background-color: transparent;

  &:focus {
    outline: 0;
  }
  @media screen and (min-width: 600px) {
    height: 230px;
    width: 200px;
  }
  @media screen and (min-width: 1000px) {
    height: 338px;
    width: 300px;

    @media screen and (min-width: 1400px) {
      height: 400px;
      width: 355px;
    }
`;
export default function GitHub() {
  return (
    <GitHubButton>
      <GithubSVG />
    </GitHubButton>
  );
}
