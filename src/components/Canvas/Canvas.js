import { useRef, useEffect } from "react";

import styles from "./Canvas.module.css";

const Canvas = () => {
  const props= {
    color: "rgb(255,0,0)"
  }

  const canvasRef = useRef();
  let canvas;
  let c;
  let isDrawing = false;

  useEffect(() => {
    canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    c = canvas.getContext("2d");
  }, []);

  const mouseDownHandler = (e) => {
    isDrawing = true;
    c.beginPath();
    c.strokeStyle = props.color;
    c.lineWidth = 10;
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
