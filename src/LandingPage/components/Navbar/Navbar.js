import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <h1>Mighty Draw</h1>
        <HashLink smooth to="#features">FEATURES</HashLink>
        <HashLink smooth to="#dev">DEV</HashLink>
        <Link to="/draw">GET DRAWING</Link>
      </div>
    </nav>
  );
};

export default Navbar;
