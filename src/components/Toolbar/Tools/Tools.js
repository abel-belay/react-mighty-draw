import styles from "./Tools.module.css";
import pencil from "../../../assets/pencil.png";
import eraser from "../../../assets/eraser.png";
import { useContext } from "react";
import DrawContext from "../../../store/draw-context";

const Tools = () => {
  const drawContext = useContext(DrawContext);
  const pencilClickHandler = () => {
    drawContext.onPencilClick();
  }
  const eraserClickHandler = () => {
    drawContext.onEraserClick();
  }

  return (
    <div className={styles.tools}>
      <button className={!drawContext.isErasing ? styles.selected : ""} onClick={pencilClickHandler}>
        <img src={pencil} alt="Pencil icon." />
      </button>
      <button className={drawContext.isErasing ? styles.selected : ""} onClick={eraserClickHandler}>
        <img src={eraser} alt="Eraser icon." />
      </button>
    </div>
  );
};

export default Tools;
