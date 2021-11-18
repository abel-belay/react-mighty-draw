import React from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Canvas from "./components/Canvas/Canvas";
import Toolbar from "./components/Toolbar/Toolbar/Toolbar";

function App() {
  console.log("development build");
  return (
    <React.Fragment>
      <Navbar />
      <Canvas />
      <Toolbar />
    </React.Fragment>
  );
}

export default App;
