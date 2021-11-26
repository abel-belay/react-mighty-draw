import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import styles from "./Intro.module.css";
import Navbar from "../Navbar/Navbar";
import githubLogoPNG from "../../assets/github-logo.png";
import linkedinLogoPNG from "../../assets/linkedin-logo.png";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.content}>
      <Navbar />
      <div className={styles.title}>
        <h2>A Simple, Clean, and Intuitive Drawing Experience</h2>
        <h3>
          Mighty Draw is a minimal yet flexible drawing app for making art no
          matter the device you’re on.
          <br />
          Made with React and the Canvas API.
        </h3>
      </div>
      <div className={styles.links}>
        <a href="https://github.com/abel-belay/react-mighty-draw">
          <img src={githubLogoPNG} alt="GitHub logo." />
        </a>
        <a href="https://www.linkedin.com/in/abel-belay-ab5b50221">
          <img src={linkedinLogoPNG} alt="Linkedin logo." />
        </a>
      </div>
      <div className={styles.actions}>
        <HashLink smooth to="#features">
          <button>Take the Tour</button>
        </HashLink>
        <Link to="/draw">
          <button>Get Drawing</button>
        </Link>
      </div>
      </div>
    </section>
  );
};

export default Intro;
