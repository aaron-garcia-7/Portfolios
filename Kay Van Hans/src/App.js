import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

// Pages
import Home from "./pages/Home";
import BonniesDanceSchool from "./pages/BonniesDanceSchool";

// Components
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
      <Nav
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        pageWidth={pageWidth}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              darkTheme={darkTheme}
              setDarkTheme={setDarkTheme}
              pageWidth={pageWidth}
            />
          }
        />
        <Route
          path="/bonnies-dance-school"
          element={
            <BonniesDanceSchool
              darkTheme={darkTheme}
              setDarkTheme={setDarkTheme}
              pageWidth={pageWidth}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
