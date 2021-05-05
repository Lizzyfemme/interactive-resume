import React from "react";
import styled from "styled-components";

import desktopPic from "../../images/researching_ryan.png";
import tabletPic from "../../images/researching_ryan.png";
import phonePic from "../../images/researching_ryan.png";
import { dark, bgAlt } from "../../../../styles/colors";



const ResearchingRyan = styled.div`
  height: 100vw;
  width: 100vw;
  background-image:url(${phonePic});
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  display:flex;
  flex-direction:column;
  justify-content: flex-end;
  align-items: center;
  @media screen and (min-width: 525px) {
    background-image:url(${tabletPic});
    height: 500px;
    width: 500px;
  }
  @media screen and (min-width: 1100px) {
    background-image:url(${desktopPic});
    height: 500px;
    width: 500px;
  }
  `
  const QuoteP = styled.p `
    background-color:${dark};
    color:${bgAlt};
    padding:1rem
  `
  const QuoteQ=styled.q`
    quotes: "\201C", "\201D";
    &::after {
      content: close-quote;
      font-weight: bold;
      font-size: 36px;
      color:${bgAlt};
    }
    &::before {
      content: open-quote;
      font-weight: bold;
      font-size: 36px;
      color:${bgAlt};
    }
    &::after {
      content: close-quote;
      font-weight: bold;
      font-size: 36px;
      color:${bgAlt};
    }`;
export default function ResearchingRyanImage() {
  return (
<ResearchingRyan>
<QuoteP>
  <QuoteQ>
I need to add some displaying data for my paper.
</QuoteQ>
</QuoteP>
</ResearchingRyan>
  )}