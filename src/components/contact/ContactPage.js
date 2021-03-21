import React from "react";

import Email from "./Email";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
import Home from "./Home";
import LinkContainer from "./LinkContainer"

import SpeechBubble from "./SpeechBubble"
import ContactBackground from "./ContactBackground";


export default function ContactPage() {

  return (
    <>
    <SpeechBubble>
      <h1>Let's Talk!</h1>
    <LinkContainer>
    <Home />
    <Email />
    <Github />
    <LinkedIn />
    </LinkContainer>
    </SpeechBubble>
      <ContactBackground />
 
    
    </>
  );
}
