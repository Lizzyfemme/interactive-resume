import React from "react";
import PersonaIcon from "./PersonaIcons"

import { ReactComponent as LocationSVG } from "./location.svg";

export default function Location() {
  return (
    <PersonaIcon>
      <LocationSVG />
    </PersonaIcon>
  );
}