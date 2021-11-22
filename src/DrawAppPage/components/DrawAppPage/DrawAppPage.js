import React from "react";

import styles from "./DrawAppPage.module.css";
import Navbar from "../Navbar/Navbar";
import Canvas from "../Canvas/Canvas";
import Toolbar from "../Toolbar/Toolbar/Toolbar";

const DrawAppPage = () => {
  const body = document.body;
  body.style.overscrollBehavior = "none";
  body.style.overlfow = "hidden";

  return (
    <div className={styles.container}>
      <Navbar />
      <Canvas />
      <Toolbar />
    </div>
  );
};

export default DrawAppPage;
