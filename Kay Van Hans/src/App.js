import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import GlobalStyles from "./GlobalStyles";
import Nav from "./components/Nav";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const checkWidth = () => {
    setPageWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, [pageWidth]);

  // Scroll to top on page refresh
  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <GlobalStyles darkTheme={darkTheme} />
      <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Home
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        pageWidth={pageWidth}
      />
    </div>
  );
}

export default App;
