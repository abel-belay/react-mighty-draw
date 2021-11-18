import React, { useState } from "react";

const DrawContext = React.createContext({
  color: "red",
  lineWidth: 10,
});

export const DrawContextProvider = (props) => {
  const [drawData, setDrawData] = useState({ color: "#0083CC", lineWidth: 10 });

  const colorChangeHandler = (color) => {
    setDrawData((drawData) => ({
      ...drawData,
      color: color,
    }));
  };

  return (
    <DrawContext.Provider
      value={{ color: drawData.color, lineWidth: drawData.lineWidth, onColorChange: colorChangeHandler }}
    >
      {props.children}
    </DrawContext.Provider>
  );
};

export default DrawContext;
