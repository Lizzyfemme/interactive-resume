import React from "react";

import { ReactComponent as EmailSVG } from "./svg/email.svg";
import styled from "styled-components";

const EmailDiv = styled.div`
  width: 125px;
  justify-self: center;
  align-self: center;
  background-color: transparent;
  background-size: cover;
  border: none;
  background-color: transparent;
  &:focus {
    outline: 0;
  }
  @media screen and (min-width: 600px) {
    width: 250px;
  }
  @media screen and (min-width: 1000px) {
    height: 227px;
  }
  @media screen and (min-width: 1400px) {
    width: 400px;
  }
`;
export default function Email() {
  return (
    <EmailDiv>
      <EmailSVG />
    </EmailDiv>
  );
}
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }
