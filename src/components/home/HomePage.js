import React from "react";
//homepage components
import HomeBackground from "./HomeBackground";
import GetInTouch from "./GetInTouch";
import Resume from "./Resume";
import ButtonDiv from "./ButtonDiv";

export default function HomePage(props) {
  return (
    <HomeBackground>
      <ButtonDiv>
        <GetInTouch onClick={props.contact}></GetInTouch>
        <Resume onClick={props.resume}></Resume>
      </ButtonDiv>
    </HomeBackground>
  );
}
