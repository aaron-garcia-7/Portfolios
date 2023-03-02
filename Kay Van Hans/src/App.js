import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GlobalStyles from "./GlobalStyles";

// Pages
import Home from "./pages/Home";
import BonniesDanceSchool from "./pages/BonniesDanceSchool";
import HoneysuckleStudios from "./pages/HoneysuckleStudios";
import JoinSunder from "./pages/JoinSunder";

// Components
import Nav from "./components/Nav";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  const checkWidth = () => {
    setPageWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    // const checkTheme = () => {
    //   if (window.matchMedia("(prefers-color-scheme: dark)")) {
    //     setDarkTheme(true);
    //   } else if (window.matchMedia("(prefers-color-scheme: light)")) {
    //     setDarkTheme(false);
    //   }
    // };
    // checkTheme();

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
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Home
                darkTheme={darkTheme}
                setDarkTheme={setDarkTheme}
                pageWidth={pageWidth}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
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
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
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
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
            }
          />
          <Route
            path="/join-sunder"
            element={
              <JoinSunder
                darkTheme={darkTheme}
                setDarkTheme={setDarkTheme}
                pageWidth={pageWidth}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
