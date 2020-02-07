import React from "react";

import "./App.css";
import HomeBackground from "./components/home/HomeBackground";
import InteractiveResume from "./components/home/InteractiveResume";
import GetInTouch from "./components/home/GetInTouch";

function App() {
  return (
    <div className="App">
      <HomeBackground>
        <InteractiveResume></InteractiveResume>
        <GetInTouch></GetInTouch>
      </HomeBackground>
    </div>
  );
}

export default App;
