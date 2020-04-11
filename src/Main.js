import React from "react";
import { Route } from "react-router-dom";
import "./main.css";

// Components
import HomePage from "./components/home/HomePage";
import ContactPage from "./components/contact/ContactPage";
import ResumePage from "./components/resume/ResumePage";

export default function Main() {
  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/resume" exact component={ResumePage} />
    </>
  );
}
