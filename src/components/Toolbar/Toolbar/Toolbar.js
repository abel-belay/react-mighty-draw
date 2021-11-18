import { useContext } from "react";

import styles from "./Toolbar.module.css";
import ColorPalette from "../ColorPalette/ColorPalette";
import DrawContext from "../../../store/draw-context";

const Toolbar = () => {
  const drawContext = useContext(DrawContext);
  return (
    <div
      className={styles.toolbar}
      style={{ backgroundColor: drawContext.color }}
    >
      <ColorPalette />
    </div>
  );
};

export default Toolbar;
