import React from "react";
//homepage components
import HomeBackground from "./HomeBackground";
import GetInTouch from "./GetInTouch";
import Resume from "./Resume";

export default function HomePage(props) {
  return (
    <HomeBackground>
      <button onClick={props.contact}>
        <GetInTouch />
      </button>
      <button onClick={props.resume}>
        <Resume />
      </button>
    </HomeBackground>
  );
}
