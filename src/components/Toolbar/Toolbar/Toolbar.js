import { useContext } from "react";

import styles from "./Toolbar.module.css";
import DrawContext from "../../../store/draw-context";
import ColorPalette from "../ColorPalette/ColorPalette";
import SizeInput from "../Size/SizeInput";
import Tools from "../Tools/Tools";

const Toolbar = () => {
  const drawContext = useContext(DrawContext);
  return (
    <div
      className={styles.toolbar}
      style={{ backgroundColor: drawContext.color }}
    >
      <Tools />
      <ColorPalette />
      <SizeInput />
    </div>
  );
};

export default Toolbar;
