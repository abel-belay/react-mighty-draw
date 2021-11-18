import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Canvas from "./components/Canvas/Canvas";

function App() {
  console.log("development build");
  return (
    <React.Fragment>
      <Navbar />
      <Canvas />
    </React.Fragment>
  );
}

export default App;
