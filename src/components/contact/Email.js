import React from "react";

import { ReactComponent as EmailSVG } from "./email.svg";
import styled from "styled-components";

const EmailDiv = styled.div`
  width: 125px;
  justify-self: center;
  align-self: center;
  background-color: transparent;
  background-size: cover;
  border: none;
  background-color: transparent;
`;
export default function Email() {
  return (
    <EmailDiv>
      <EmailSVG />
    </EmailDiv>
  );
}
