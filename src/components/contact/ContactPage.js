import React from "react";

import Email from "./Email";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
import Home from "./Home";

import LinkContainer from "./LinkContainer";
import ContactBackground from "./ContactBackground";
import Palette from "./Palette";

export default function ContactPage() {

  return (
    <>
      <ContactBackground />
      <Palette id="palette" />
      <LinkContainer id="link-container" >
        <Home />
        <Email />
        <Github />
        <LinkedIn />
      </LinkContainer>
    
    </>
  );
}
