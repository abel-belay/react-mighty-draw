import { useContext, useEffect } from "react";
import {CSSTransition} from "react-transition-group";

import styles from "./Toolbar.module.css";
import DrawContext from "../../../store/draw-context";
import ColorPalette from "../ColorPalette/ColorPalette";
import SizeInput from "../Size/SizeInput";
import Tools from "../Tools/Tools";
import Tab from "../Tab/Tab";
import ShowNavsContext from "../../../store/show-navs";

const Toolbar = () => {
  const drawContext = useContext(DrawContext);
  const showNavsContext = useContext(ShowNavsContext);

  useEffect(() => {
    const toolbar = document.getElementById("toolbar");
    toolbar.addEventListener(
      "touchmove",
      (e) => {
        e.preventDefault();
      },
      { passive: false }
    );
  }, [])

  return (
    <CSSTransition
      in={showNavsContext.showNavs}
      timeout={300}
      classNames="toolbar"
      id="toolbar"
    >
      <div
        className={styles.toolbar}
        style={{ backgroundColor: drawContext.color }}
      >
        <Tab />
        <Tools />
        <ColorPalette />
        <SizeInput />
      </div>
    </CSSTransition>
  );
};

export default Toolbar;
