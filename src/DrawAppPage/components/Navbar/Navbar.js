import { Link } from "react-router-dom";
import { useContext } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./Navbar.module.css";
import DrawContext from "../../store/draw-context";
import ShowNavsContext from "../../store/show-navs";
import broomPNG from "../../assets/broom.png";
import savePNG from "../../assets/save.png";

const Navbar = () => {
  const drawContext = useContext(DrawContext);
  const showNavsContext = useContext(ShowNavsContext);

  const clearCanvasClickHandler = () => {
    const canvas = drawContext.canvasRef;
    const c = canvas.getContext("2d");
    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);
  };

  const saveCanvasClickHandler = () => {
    const canvas = drawContext.canvasRef;
    const link = document.createElement("a");
    link.download = "download.png";
    link.href = canvas.toDataURL();
    link.click();
    link.remove();
  };

  return (
    <CSSTransition
      in={showNavsContext.showNavs}
      timeout={300}
      classNames="navbar"
    >
      <div
        className={styles.navbar}
        style={{ backgroundColor: drawContext.color }}
      >
        <Link to="/landing">Mighty Draw</Link>
        <div className={styles.logos}>
          <button onClick={clearCanvasClickHandler}>
            <img src={broomPNG} alt="Broom icon." />
          </button>
          <button onClick={saveCanvasClickHandler}>
            <img src={savePNG} alt="Save icon." />
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Navbar;
