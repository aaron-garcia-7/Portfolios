import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GlobalStyles from "./GlobalStyles";

// Pages
import Home from "./pages/Home";
import BonniesDanceSchool from "./pages/BonniesDanceSchool";
import HoneysuckleStudios from "./pages/HoneysuckleStudios";

// Components
import Nav from "./components/Nav";

function App() {
  const [atHome, setAtHome] = useState(true);
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

  const location = useLocation();

  return (
    <div>
      <GlobalStyles darkTheme={darkTheme} />
      <AnimatePresence mode="wait">
        <Nav
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
          pageWidth={pageWidth}
        />
        <Routes location={location} key={location.pathname}>
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
          <Route
            path="/honeysuckle-studios"
            element={
              <HoneysuckleStudios
                darkTheme={darkTheme}
                setDarkTheme={setDarkTheme}
                pageWidth={pageWidth}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
