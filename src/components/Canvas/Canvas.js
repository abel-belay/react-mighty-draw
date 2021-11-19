import { useRef, useEffect, useContext, useState } from "react";
import DrawContext from "../../store/draw-context";

import styles from "./Canvas.module.css";

const Canvas = () => {
  const drawContext = useContext(DrawContext);
  const [c, setC] = useState();

  const canvasRef = useRef();
  
  console.log(drawContext.isErasing);

  let isDrawing = false;

  useEffect(() => {
    let canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setC(canvas.getContext("2d"));
  }, []);

  const mouseDownHandler = (e) => {
    c.lineCap = "round";
    isDrawing = true;
    c.beginPath();
    if (drawContext.isErasing) {
      c.strokeStyle = "white";
    } else {
      c.strokeStyle = drawContext.color;
    }
    c.lineWidth = drawContext.lineWidth;
    c.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    c.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    c.stroke();
  };

  const mouseMoveHandler = (e) => {
    if (isDrawing) {
      c.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      c.stroke();
    }
  };

  const mouseUpHandler = (e) => {
    if (isDrawing) {
      c.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      c.stroke();
    }
    isDrawing = false;
  };

  const mouseLeaveHandler = (e) => {
    isDrawing = false;
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={mouseDownHandler}
      onMouseMove={mouseMoveHandler}
      onMouseUp={mouseUpHandler}
      onMouseLeave={mouseLeaveHandler}
      className={styles.canvas}
    />
  );
};

export default Canvas;
