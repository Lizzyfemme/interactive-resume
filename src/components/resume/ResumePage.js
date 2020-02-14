import React from "react";

//resume components

import Button from "./Button";
import ButtonDiv from "./ButtonDiv";
import ResumeBackground from "./ResumeBackground";
import Summary from "./Summary";
import ButtonAndSummaryDiv from "./ButtonAndSummaryDiv";

export default function ResumePage(props) {
  return (
    <ResumeBackground>
      <ButtonAndSummaryDiv>
        <Summary>
          <h1>Summary</h1>
          <p>
            I'm a result-oriented web developer, who focuses on solutions. My
            eye for design and attention to detail, allow me to create dynamic
            and responsive web apps. I love working collaboratively and crushing
            challenges.
          </p>
        </Summary>
        <ButtonDiv>
          <Button onClick={props.contact}>Contact</Button>
          <Button onClick={props.home}>Home</Button>
        </ButtonDiv>
      </ButtonAndSummaryDiv>
    </ResumeBackground>
  );
}
//onClick={props.resume}
