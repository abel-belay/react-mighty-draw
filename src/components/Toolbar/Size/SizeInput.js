import { useContext } from "react/cjs/react.development";
import DrawContext from "../../../store/draw-context";
import styles from "./SizeInput.module.css";

const SizeInput = () => {
  const drawContext = useContext(DrawContext);

  const sizeChangeHandler = (e) => {
    drawContext.onSizeChange(+e.target.value);
  };

  return (
    <div className={styles["size-tool"]}>
      <svg className={styles["min-size"]} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="white" />
      </svg>
      <input
        onChange={sizeChangeHandler}
        className={styles.input}
        type="range"
        min="1"
        max="50"
        step="1"
        value={drawContext.lineWidth}
      />
      <svg className={styles["max-size"]} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="white" />
      </svg>
    </div>
  );
};

export default SizeInput;
