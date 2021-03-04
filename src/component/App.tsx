import React from "react";
import Landing from "./Landing";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Landing
        waitTime={3}
        roles={["Binh", "Software Engineer", "NLP Research"]}
      />
    </div>
  );
}

export default App;
