import {useContext} from "react";
import DrawContext from "../../../store/draw-context";

import styles from "./ColorIcon.module.css";

const ColorIcon = (props) => {
  const drawContext = useContext(DrawContext);

  const colorClickHandler = () => {
    drawContext.onColorChange(props.color);
  }

  return (
      <svg onClick={colorClickHandler}
        xmlns="http://www.w3.org/2000/svg"
        className={styles.blob}
        viewBox="42.79 96.84 347.97 361.32"
      >
        <path
          id="blob"
          d="M370.5,299.5Q329,349,262,421Q195,493,110,425.5Q25,358,47.5,260.5Q70,163,140,119.5Q210,76,267.5,116Q325,156,368.5,203Q412,250,370.5,299.5Z"
          fill={props.color}
        />
      </svg>
  );
};

export default ColorIcon;
