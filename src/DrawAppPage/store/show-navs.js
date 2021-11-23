import React, { useState } from "react";

const ShowNavsContext = React.createContext({
  showNavs: true
});

export const ShowNavsContextProvider = (props) => {
  const [showNavs, setShowNavs] = useState(true);

  const navChangeClickHandler = () => {
    setShowNavs((state) => !state);
  };

  return (
    <ShowNavsContext.Provider
      value={{ showNavs: showNavs, onNavChangeClick: navChangeClickHandler }}
    >
      {props.children}
    </ShowNavsContext.Provider>
  );
};

export default ShowNavsContext;
