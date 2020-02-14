import React from "react";

//resume components

import Button from "./Button";
import ButtonDiv from "./ButtonDiv";
import ResumeBackground from "./ResumeBackground";
import Summary from "./Summary";
import ButtonAndSummaryDiv from "./ButtonAndSummaryDiv";
import Skills from "./Skills";
import SkillsDiv from "./SkillsDiv";
import SkillsAndH1Div from "./SkillsAndH1Div";

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
      <SkillsAndH1Div>
        <h1>Skills</h1>
        <SkillsDiv>
          <Skills>
            <h2>Languages</h2>
            <ul>
              <li>JavaScirpt</li>
              <li>HTML</li>
              <li>Ruby</li>
              <li>CSS</li>
              <li>Java</li>
            </ul>
          </Skills>
          <Skills>
            <h2>Frameworks</h2>
            <ul>
              <li>Express</li>
              <li>EJS</li>
              <li>SASS</li>
              <li>Rails</li>
            </ul>
          </Skills>
          <Skills>
            <h2>Libraries</h2>
            <ul>
              <li>ReactJS</li>
              <li>Axios</li>
              <li>JQuery</li>
              <li>Styled Components</li>
              <li>react-chartjs-2</li>
            </ul>
          </Skills>
          <Skills>
            <h2>Environments</h2>
            <ul>
              <li>NodeJS</li>
              <li>Ajax</li>
            </ul>
          </Skills>
          <Skills>
            <h2>Databases</h2>
            <ul>
              <li>SQL</li>
              <li>Access</li>
              <li>Postgres</li>
            </ul>
          </Skills>
          <Skills>
            <h2>Testing</h2>
            <ul>
              <li>Jest</li>
              <li>Mocha</li>
              <li>Chai</li>
              <li>Cypress</li>
            </ul>
          </Skills>
          <Skills>
            <h2>Software</h2>
            <ul>
              <li>Tableau</li>
              <li>SharePoint</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Premiere</li>
              <li>InDesign</li>
            </ul>
          </Skills>
        </SkillsDiv>
      </SkillsAndH1Div>
    </ResumeBackground>
  );
}
//onClick={props.resume}
