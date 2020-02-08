import React, { Fragment } from "react";
//Main Components
import HomePage from "./components/home/HomePage";
import ContactPage from "./components/contact/ContactPage";

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

  function homePage() {
    transition(HOME);
  }
  function resume() {
    transition(resume);
  }

  return (
    <Fragment>
      {mode === HOME && <HomePage contact={contact} resume={resume}></HomePage>}
      {mode === CONTACT && <ContactPage></ContactPage>}
    </Fragment>
  );
}
