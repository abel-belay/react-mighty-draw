import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { DrawContextProvider } from "./DrawAppPage/store/draw-context";
import { ShowNavsContextProvider } from "./DrawAppPage/store/show-navs";
import DrawAppPage from "./DrawAppPage/components/DrawAppPage/DrawAppPage";
import LandingPage from "./LandingPage/components/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/draw"
          exact
          element={
            <React.Fragment>
              <ShowNavsContextProvider>
                <DrawContextProvider>
                  <DrawAppPage />
                </DrawContextProvider>
              </ShowNavsContextProvider>
            </React.Fragment>
          }
        ></Route>

        <Route
          path="/landing"
          exact
          element={
            <React.Fragment>
              <LandingPage />
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
