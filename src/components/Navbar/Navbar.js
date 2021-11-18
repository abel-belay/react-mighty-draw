import { useContext } from "react";

import styles from "./Navbar.module.css";
import DrawContext from "../../store/draw-context";
import githubLogo from "../../assets/github-logo.png";
import linkedinLogo from "../../assets/linkedin-logo.png";

const Navbar = () => {
  const drawContext = useContext(DrawContext);

  return (
    <div className={styles.navbar} style={{backgroundColor: drawContext.color}}>
      <h1>Mighty Draw</h1>
      <div className={styles.logos}>
        <a
          href="https://github.com/abel-belay/react-mighty-draw"
          target="_blank"
        >
          <img src={githubLogo} alt="Github logo." />
        </a>
        <a
          href="https://www.linkedin.com/in/abel-belay-ab5b50221"
          target="_blank"
        >
          <img src={linkedinLogo} alt="Linkedin logo." />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
