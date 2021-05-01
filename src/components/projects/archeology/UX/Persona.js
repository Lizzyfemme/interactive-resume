import React from "react";

import ResearchingRyan from "./ResearchingRyanImage"
import Age from "../../images/icons/Age"
import Education from "../../images/icons/Education"
import Location from "../../images/icons/Location"
import Programs from "../../images/icons/Programs"


export default function Process() {
  return (
    <>
<h2>Persona</h2>
    <article class="persona">
    <ResearchingRyan />
      <div class="name-and-quote">
        <h2><span>Researching </span>Ryan</h2>
        <p class="persona-quote"><q>
          I need to add some displaying data for my paper.
          </q>
        </p>
      </div>

      <h3>Demographics</h3>
      <div class="about-persona">
       <Age />
        <p>30-45</p>
        <Education />
        <p>Working towards a Masters or Doctorate</p>
        <Location />
        <p>Urban area, close to their university</p>
        <Programs />
        <p>Excel, Google earth</p>
      </div>
      <h3>Behaviours</h3>
      <ul>
        <li>Using online resources to research</li>
        <li>Traveling to museums</li>
        <li>Writing a thesis or other papers</li>
        <li>Uses laptop primary for studying</li>
      </ul>
      <h3>Goals</h3>
      <ul>
        <li>Needs to complete their paper and their degree.</li>
        <li>Wants to see their data.</li>
        <li>Curious to see what they can find out.</li>
      </ul>
    </article>
    </>
  )}