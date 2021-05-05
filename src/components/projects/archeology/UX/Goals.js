import React from "react";
import styled from "styled-components";

import { dark, bgAlt } from "../../../../styles/colors";

const IntroDiv = styled.div `
display:flex;
justify-content:space-evenly;
@media screen and (max-width: 500px) {
  flex-direction:column-reverse;
}
`
const Goals = styled.div `
width: 40%;
@media screen and (max-width: 500px) {
width:calc(100% - 2.5rem);
margin: auto;
}
`
const Role = styled.div `
width: 40%;
background-color:${dark};
color:${bgAlt};
padding:0 1rem;
@media screen and (max-width: 500px) {
  width:calc(95% - 2.5rem);
  margin: auto;
  }
`

export default function Intro() {
  return (
<IntroDiv>
<Goals >
<h2>Goals</h2>
<p>
Visual any infromation that can be ascertained from artifacts. Find a dynamic means of displaying information. Provide users with properly formated citations for the every data point. Allow users to filter the data. Provide additional infromation for each data point like photographs.
</p>
</Goals >
<Role >
<h2>Role</h2>
<p>
 During this project I conducted UX research to find out a little more about the users. I tried to understand their technical abilities and the kind or visualizations they were not able to accomplish. Designed a prototype and built the MVP.
</p>
</Role >
</IntroDiv>
)}