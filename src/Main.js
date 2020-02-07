import React, { Fragment } from "react";

import HomePage from "./components/home/HomePage";
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

  return (
    <Fragment>
      {mode === HOME && <HomePage></HomePage>}
      {/* {mode === CONTACT && <} */}
    </Fragment>
  );
}
