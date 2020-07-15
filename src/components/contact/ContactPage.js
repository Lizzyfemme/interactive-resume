import React from "react";

import Email from "./Email";
import Github from "./Github";
import LinkedIn from "./LinkedIn";
import ContactBackground from "./ContactBackground";
import Palette from "./Palette";

export default function ContactPage() {
  return (
    <>
      <ContactBackground>
        <Palette>
          <Email />
          <Github />
          <LinkedIn />
        </Palette>
      </ContactBackground>
    </>
  );
}
