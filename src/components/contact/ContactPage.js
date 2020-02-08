import React from "react";

//Contact page components

import ContactBackground from "./ContactBackground";
import GuyContainer from "./GuyContainer";
import Guy from "./Guy";

export default function Homepage() {
  return (
    <ContactBackground>
      <GuyContainer>
        <Guy />
      </GuyContainer>
    </ContactBackground>
  );
}
