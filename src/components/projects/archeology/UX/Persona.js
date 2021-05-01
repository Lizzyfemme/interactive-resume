import React from "react";
import Age from "../../images/icons/Age"


export default function Process() {
  return (
    <>
<h1>Meet Our<span> Customers</span></h1>
    <article class="persona">
      <div id="freedom-frank" class="persona-image"></div>
      <div class="name-and-quote">
        <h2><span>Researching</span>Ryan</h2>
        <p class="persona-quote"><q>
          I need to add some infographs to my paper.
          </q>
        </p>
      </div>

      <h3>Demographics</h3>
      <div class="about-persona">
        <div class="icon age">
       <Age />
        </div>
        <p>55+</p>
        <div class="icon education">
        </div>
        <p>Bacholar, Master or Doctorate</p>
        <div class="icon location">

        </div>
        <p>Urban or Rural</p>
        <div class="icon employment">
          
        </div>
        <p>Retired now, but worked in business or tech</p>

        <div class="icon social-media">
      
        </div>
        <p>Facebook, LinkedIn</p>
      </div>
      <h3>Behaviours/Activities</h3>
      <ul>
        <li>Loves being retire.</li>
        <li>Looking for fun things to do.</li>
        <li>Loves sci-fi, and spaces.</li>
      </ul>
      <h3>Needs/Goals</h3>
      <ul>
        <li>Wants to live life to the fullest.</li>
        <li>Wants unique experiences.</li>
      </ul>
    </article>
    </>
  )}