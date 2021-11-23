import React, { useState } from "react";

const DrawContext = React.createContext({
  color: "red",
  lineWidth: 10,
  isErasing: false,
});

export const DrawContextProvider = (props) => {
  const [drawData, setDrawData] = useState({
    color: "#0083CC",
    lineWidth: 10,
    isErasing: false,
  });

  const [canvasRef, setCanvasRef] = useState(null);

  const colorChangeHandler = (color) => {
    setDrawData((drawData) => ({
      ...drawData,
      color: color,
    }));
  };

  const sizeChangeHandler = (size) => {
    setDrawData((drawData) => ({
      ...drawData,
      lineWidth: size,
    }));
  };

  const pencilClickHandler = () => {
    setDrawData((drawData) => ({
      ...drawData,
      isErasing: false,
    }));
  };

  const eraserClickHandler = () => {
    setDrawData((drawData) => ({
      ...drawData,
      isErasing: true,
    }));
  };

  return (
    <DrawContext.Provider
      value={{
        canvasRef: canvasRef,
        setCanvasRef: setCanvasRef,
        color: drawData.color,
        lineWidth: drawData.lineWidth,
        isErasing: drawData.isErasing,
        onColorChange: colorChangeHandler,
        onSizeChange: sizeChangeHandler,
        onPencilClick: pencilClickHandler,
        onEraserClick: eraserClickHandler,
      }}
    >
      {props.children}
    </DrawContext.Provider>
  );
};

export default DrawContext;
