import React from "react";
import { Link } from "react-router-dom";

import styles from "./FixedButton.module.css";

const FixedButton = () => {
  return (
    <Link to="/draw">
      <button className={styles.button}>Jump to App</button>
    </Link>
  );
};

export default FixedButton;
