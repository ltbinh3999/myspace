import React from "react";
import Project from "./Project";
import Skill from "./Skill";
import Landing from "./Landing";
import { skillData, landingData, contactData } from "../data";
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
      <Landing roles={landingData.roles} waitTime={landingData.waitTime} />
      <Project />
      <Skill data={skillData} />
      <Contact data={contactData} />
    </div>
  );
}

export default App;
