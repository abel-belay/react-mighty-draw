import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import styles from "./Intro.module.css";
import Navbar from "../Navbar/Navbar";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <Navbar />
      <div className={styles.title}>
        <h2>A Simple, Clean, and Intuitive Drawing Experience</h2>
        <h3>Mighty Draw is a minimal yet flexible drawing app for making art no matter the device you’re on.<br />Made with React and the Canvas API.</h3>
      </div>
      <div className={styles.actions}>
        <HashLink smooth to="#features">
          <button>Take the Tour</button>
        </HashLink>
        <Link to="/draw">
          <button>Get Drawing</button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
