import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <h1>Mighty Draw</h1>
        <a href="/">FEATURES</a>
        <a href="/">TEAM</a>
        <Link to="/draw">
          <a href="/draw">GET DRAWING</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
