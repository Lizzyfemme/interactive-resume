import React from "react";
//homepage components
import HomeBackground from "./HomeBackground";
import GetInTouch from "./GetInTouch";
import Resume from "./Resume";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

export default function HomePage(props) {
  return (
    <HomeBackground>
      <a href="/contact">
        <GetInTouch />
      </a>
      <a href="/about">
        <AboutMe />
      </a>
      <a href="/resume">
        <Resume />
      </a>
      <a href="/project">
        <Projects />
      </a>
    </HomeBackground>
  );
}
