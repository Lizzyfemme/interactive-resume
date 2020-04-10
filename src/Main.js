import React, { Fragment } from "react";
import "./main.css";

//Main Components
import HomePage from "./components/home/HomePage";
import ContactPage from "./components/contact/ContactPage";
import ResumePage from "./components/resume/ResumePage";

//Hooks
import useVisualMode from "./hooks/useVisualMode";

const CONTACT = "CONTACT";
const HOME = "HOME";
const RESUME = "RESUME";

export default function Main() {
  const { mode, transition } = useVisualMode(HOME);

  function contact() {
    transition(CONTACT);
  }
  function home() {
    transition(HOME);
  }
  function resume() {
    transition(RESUME);
  }

  return (
    <Fragment>
      {mode === HOME && <HomePage contact={contact} resume={resume} />}
      {mode === CONTACT && <ContactPage home={home} />}
      {mode === RESUME && <ResumePage contact={contact} home={home} />}
    </Fragment>
  );
}
