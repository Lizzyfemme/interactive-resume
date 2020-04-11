import React from "react";
//homepage components
import HomeBackground from "./HomeBackground";
import GetInTouch from "./GetInTouch";
import Resume from "./Resume";

export default function HomePage(props) {
  return (
    <HomeBackground>
      <a href="/contact">
        <GetInTouch />
      </a>
      <a href="/resume">
        <Resume />
      </a>
    </HomeBackground>
  );
}
