import { useContext } from "react";
import DrawContext from "../../../store/draw-context";
import styles from "./SizeInput.module.css";
import sliderMinMaxPNG from "../../../assets/slider-min-max.png";

const SizeInput = () => {
  const drawContext = useContext(DrawContext);

  const sizeChangeHandler = (e) => {
    drawContext.onSizeChange(+e.target.value);
  };

  return (
    <div className={styles["size-tool"]}>
      <img
        className={styles["min-size"]}
        src={sliderMinMaxPNG}
        alt="White circle representing minimun stroke size."
      />
      <input
        onChange={sizeChangeHandler}
        className={styles.input}
        type="range"
        min="1"
        max="50"
        step="1"
        value={drawContext.lineWidth}
      />
      <img
        className={styles["max-size"]}
        src={sliderMinMaxPNG}
        alt="White circle representing minimun stroke size."
      />
    </div>
  );
};

export default SizeInput;
