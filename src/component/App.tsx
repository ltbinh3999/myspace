import React from "react";
import Project from "./Project";
import Skill from "./Skill";
import { skillData } from "../data";
function App() {
  return (
    <div className="App">
      <Skill data={skillData} />
    </div>
  );
}

export default App;
