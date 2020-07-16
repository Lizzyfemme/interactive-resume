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
      <ContactBackground>
        <Palette>
          <LinkContainer>
            <Home />
            <Email />
            <Github />
            <LinkedIn />
          </LinkContainer>
        </Palette>
      </ContactBackground>
    </>
  );
}
