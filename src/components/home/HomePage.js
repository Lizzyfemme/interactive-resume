import React from "react";
//homepage components
import HomeBackground from "./HomeBackground";
import GetInTouch from "./GetInTouch";
import Resume from "./Resume";

export default function HomePage(props) {
  return (
    <HomeBackground>
      <GetInTouch contact={props.contact} />
      <Resume resume={props.resume} />
    </HomeBackground>
  );
}
