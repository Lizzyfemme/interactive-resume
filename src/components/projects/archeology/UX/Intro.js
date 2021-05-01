import React from "react";
// import styled from "styled-components";


// const introDiv = styled.div

export default function Intro() {
  return (
    <>
  {/* Image of the product */}
    <div id="about">
      <h1>Archeological Data Visualization</h1>
      <p>
        This project is about visualization data from 8th century B.C.E to the 1st century C.E. The data is derived from ancient artifacts and contemporary literature. The purpose of the project is to allow archeologist a new way to see their data and make connection that would otherwise be difficult to see.
      </p>
    </div>
    {/* <!-- <h1>Role</h1> --> */}
    {/* <!-- <h1>Mission Statement</h1> --> */}
    <div id="goals">
      <h1>goals</h1>
      <p>
      Visual any infromation that can be ascertained from artifacts. Find a dynamic means of displaying information.
      </p>

      <h1><span>product</span> goals</h1>
      <p>
       Provide users with properly formated citations for the every data point. Allow users to filter the data. Have options for users to display their data dynamically.
      </p>

      <h1><span>user</span> goals</h1>
      <p>
        Knowledge for knowledge's sake. Our users want a tool for academic research.
      </p>

    </div>
    </>
  )
}
