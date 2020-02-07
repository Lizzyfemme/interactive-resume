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
        <GetInTouch onClick={props.getInTouch}></GetInTouch>
        <InteractiveResume
          onClick={props.interactiveResume}
        ></InteractiveResume>
      </ButtonDiv>
    </HomeBackground>
  );
}
