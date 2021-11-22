import { Link } from "react-router-dom";

import styles from "./Intro.module.css";
import Navbar from "../Navbar/Navbar";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <Navbar />
      <div className={styles.title}>
        <h2>A Simple, Clean, and Intuitive Drawing Experience</h2>
        <h3>Mighty Draw is a cool new tool to draw whatever you please.</h3>
      </div>
      <div className={styles.actions}>
        <Link to="/draw">
          <button>Take the Tour</button>
        </Link>
        <Link to="/draw">
          <button>Get Drawing</button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
