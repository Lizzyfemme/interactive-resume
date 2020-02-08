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

export default function ContactPage(props) {
  return (
    <ContactBackground>
      <PaintingContainer>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Lizzyfemme"
        >
          <GitHub />
        </a>
        <a href="mailto:elizabeth.swann.developer@gmail.com">
          <Email />
        </a>
        <Home onClick={props.home}></Home>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/elizabeth-swann-1b2a2650/"
        >
          <LinkedIn />
        </a>
      </PaintingContainer>
      <GuyContainer>
        <Guy />
      </GuyContainer>
    </ContactBackground>
  );
}
