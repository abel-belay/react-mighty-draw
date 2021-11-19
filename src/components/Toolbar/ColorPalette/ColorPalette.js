import styles from "./ColorPalette.module.css";
import ColorIcon from "./ColorIcon";

const ColorPalette = () => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "#0083CC",
    "indigo",
    "violet",
    "brown",
    "black",
  ];

  const colorIconComponents = colors.map((color) => (
    <ColorIcon key={color} color={color} />
  ));

  return <div className={styles["color-palette"]}>{colorIconComponents}</div>;
};

export default ColorPalette;
