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
        <button onClick={props.contact}>
          <GetInTouch></GetInTouch>
        </button>
        <button onClick={props.resume}>
          <Resume></Resume>
        </button>
      </ButtonDiv>
    </HomeBackground>
  );
}
