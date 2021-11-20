import { useRef, useEffect, useContext } from "react";
import DrawContext from "../../store/draw-context";

const Canvas = () => {
  const drawContext = useContext(DrawContext);
  let isDrawing = false;
  const canvasRef = useRef();

  useEffect(() => {
    let canvas = canvasRef.current;
    let context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const mouseDownHandler = (e) => {
    let c = canvasRef.current.getContext("2d");
    if (e.button === 0) {
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
    }
  };

  const mouseMoveHandler = (e) => {
    if (isDrawing) {
      let c = canvasRef.current.getContext("2d");
      c.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      c.stroke();
    }
  };

  const mouseUpHandler = (e) => {
    if (isDrawing) {
      let c = canvasRef.current.getContext("2d");
      c.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      c.stroke();
    }
    isDrawing = false;
  };

  const windowResizeHandler = () => {
    const canvas = document.getElementById("canvas");
    if (
      window.innerWidth > canvas.width ||
      window.innerHeight > canvas.height
    ) {
      const canvasCtx = canvas.getContext("2d");
      const transferCanvas = document.createElement("canvas");
      const transferCanvasCtx = transferCanvas.getContext("2d");
      transferCanvas.width = canvas.width;
      transferCanvas.height = canvas.height;
      transferCanvasCtx.drawImage(canvas, 0, 0);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvasCtx.drawImage(transferCanvas, 0, 0);
    }
  };

  const mouseLeaveHandler = (e) => {
    if (isDrawing) {
      let c = canvasRef.current.getContext("2d");
      c.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      c.stroke();
    }
    isDrawing = false;
  } 

  const mouseOverHandler = (e) => {
    let c = canvasRef.current.getContext("2d");
    if (e.nativeEvent.buttons === 1) {
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
    }
  }

  window.addEventListener("resize", () => {
    windowResizeHandler();
  });

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      onMouseDown={mouseDownHandler}
      onMouseMove={mouseMoveHandler}
      onMouseUp={mouseUpHandler}
      onMouseOver={mouseOverHandler}
      onMouseLeave={mouseLeaveHandler}
      // onMouseLeave={mouseLeaveHandler}
      // className={styles.canvas}
    />
  );
};

export default Canvas;
