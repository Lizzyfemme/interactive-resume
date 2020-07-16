import React from "react";

import { ReactComponent as HomeSVG } from "./home.svg";
import styled from "styled-components";

const HomeDiv = styled.div`
  width: 125px;
  justify-self: center;
  align-self: center;
  background-color: transparent;
  background-size: cover;
  border: none;
  background-color: transparent;
`;
export default function Home() {
  return (
    <HomeDiv>
      <HomeSVG />
    </HomeDiv>
  );
}
