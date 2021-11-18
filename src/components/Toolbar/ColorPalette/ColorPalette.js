import { useContext } from "react";

import styles from "./ColorPalette.module.css";
import DrawContext from "../../../store/draw-context";
import ColorIcon from "./ColorIcon";

const ColorPalette = () => {
  const drawContext = useContext(DrawContext);

  const colors = ["#0083CC", "red", "orange", "purple", "blue", "pink", "green", "brown", "white"];

  const colorIconComponents = colors.map((color) => (<ColorIcon color={color} />));

  const colorClickHandler = () => {
    drawContext.onColorChange("green");
  };

  return (
    <div className={styles["color-palette"]}>
      {colorIconComponents}
    </div>
  );
};

export default ColorPalette;
