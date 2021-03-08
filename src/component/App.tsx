import React from "react";
import Project from "./Project";
import Skill from "./Skill";
import Landing from "./Landing";
import { skillData, landingData, contactData } from "../data";
import Contact from "./Contact";
import Navbar from "./Navbar";
function App() {
  const pages = [
    <Landing roles={landingData.roles} waitTime={landingData.waitTime} />,
    <Project />,
    <Skill data={skillData} />,
    <Contact data={contactData} />,
  ];
  const wrappedPages = pages.map((x, i) => (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      id={`page${i}`}
      key={i}
      className="page"
    >
      {x}
    </div>
  ));
  return (
    <div className="App">
      <Navbar linkTo={wrappedPages} />
      {wrappedPages}
    </div>
  );
}

export default App;
