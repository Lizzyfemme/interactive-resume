import React from "react";
import styled from "styled-components";


const IntroDiv= styled.div `
margin:1.25rem
`
const IntroH1 = styled.h1 `
text-transform:uppercase;
text-align:center;
font-family:'main-bold';
font-size:4rem;
@media screen and (max-width: 500px) {
  font-size:2.5rem;
}
`
const IntroP = styled.p `
font-size:1.75rem;
@media screen and (max-width: 500px) {
  font-size:1.25rem;
  margin-bottom:2rem;
}
`

export default function Intro() {
  return (
    <>
  {/* Image of the product */}
    <IntroDiv>
      <IntroH1>Archeological Data Visualization</IntroH1>
      <IntroP>
        This project is about visualization data from 8th century B.C.E to the 1st century C.E. The data is derived from ancient artifacts and literature. The purpose of the project is to allow archeologist a new way to map their data and make connection that would otherwise be difficult to see.
      </IntroP>
    </IntroDiv>
    </>
  )
}
