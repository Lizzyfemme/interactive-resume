import React from "react";
import styled from "styled-components";

import desktopPic from "./ux-synthesis-desktop.png";
import phonePic from "./ux-synthesis-mobile.png";

const ResearchSynthesisImage = styled.div `
background-image:url(${phonePic});
background-repeat: no-repeat;
background-size:cover;
width: 350px;
height:417px;

@media screen and (min-width: 1100px) {
  background-image:url(${desktopPic});
  width: 1400px;
  height:1673px;
}
`
export default function ResearchSynthesis() {
  return (
    <>
    <ResearchSynthesisImage />
    </>
  )
}