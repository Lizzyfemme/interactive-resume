import React from "react";
import styled from "styled-components";
import { dark, light } from "../../styles/colors.js";

const SummaryDiv = styled.div`
  background-color: ${light};
  color: ${dark};
  @media screen and (min-width: 570px) {
    & p {
      font-size: 20px;
    }
  }
  @media screen and (min-width: 710px) {
    & p {
      font-size: 22px;
    }
  }
`;

export default function Summary() {
  return (
    <SummaryDiv>
      <h1>Summary</h1>
      <p>
        I'm a result-oriented web developer, who focuses on solutions. My eye
        for design and attention to detail, allow me to create dynamic and
        responsive web apps. I love working collaboratively and crushing
        challenges.
      </p>
    </SummaryDiv>
  );
}
