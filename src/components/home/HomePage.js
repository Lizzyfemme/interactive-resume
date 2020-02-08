import React from "react";
//homepage components
import HomeBackground from "./HomeBackground";
import GetInTouch from "./GetInTouch";
import InteractiveResume from "./InteractiveResume";
import ButtonDiv from "./ButtonDiv";

export default function HomePage(props) {
  return (
    <HomeBackground>
      <ButtonDiv>
        <GetInTouch onClick={props.contact}></GetInTouch>
        <InteractiveResume onClick={props.resume}></InteractiveResume>
      </ButtonDiv>
    </HomeBackground>
  );
}
