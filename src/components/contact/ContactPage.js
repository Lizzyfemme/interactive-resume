import React from "react";

//Contact page components

import ContactBackground from "./ContactBackground";
import GuyContainer from "./GuyContainer";
import Guy from "./Guy";
import PaintingContainer from "./PaintingContainer";
import GitHub from "./GitHub";
import Email from "./Email";
import Home from "./Home";
import LinkedIn from "./LinkedIn";

export default function Homepage() {
  return (
    <ContactBackground>
      <PaintingContainer>
        <GitHub />
        <Email />
        <Home />
        <LinkedIn />
      </PaintingContainer>
      <GuyContainer>
        <Guy />
      </GuyContainer>
    </ContactBackground>
  );
}
