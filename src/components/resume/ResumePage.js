import React from "react";

//resume components

import Button from "./Button";
import NavDiv from "./NavDiv";
import ResumeBackground from "./ResumeBackground";
import Content from "./Content";
import Summary from "./Summary";
import Skills from "./Skills";
import WorkHistory from "./WorkHistory";
import Education from "./Education";

export default function ResumePage(props) {
  return (
    <ResumeBackground>
      <NavDiv>
        <Button onClick={props.home}>
          <img alt="Home icon" src={require("./cell_home.png")} />
        </Button>
        <Button onClick={props.contact}>
          <img alt="contact icon" src={require("./cell_contact.png")} />
        </Button>
      </NavDiv>
      <Content>
        <Summary></Summary>
        <Skills></Skills>
        <Education></Education>
        <WorkHistory></WorkHistory>
      </Content>
    </ResumeBackground>
  );
}
