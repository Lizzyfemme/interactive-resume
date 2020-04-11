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
import DesktopDiv from "./DesktopDiv";

export default function ResumePage(props) {
  return (
    <ResumeBackground>
      <NavDiv>
        <a href="/">
          <Button>
            <img alt="Home icon" src={require("./cell_home.png")} />
          </Button>
        </a>
        <a href="/contact">
          <Button>
            <img alt="contact icon" src={require("./cell_contact.png")} />
          </Button>
        </a>
      </NavDiv>
      <Content>
        <Summary></Summary>
        <DesktopDiv>
          <Skills></Skills>
          <div>
            <Education></Education>
            <WorkHistory></WorkHistory>
          </div>
        </DesktopDiv>
      </Content>
    </ResumeBackground>
  );
}
