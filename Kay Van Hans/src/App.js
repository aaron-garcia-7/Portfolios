import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import Footer from "./components/Footer";
// import Nav from "./components/Nav";
import GlobalStyles from "./GlobalStyles";
import Nav from "./components/Nav";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div>
      <GlobalStyles darkTheme={darkTheme} />
      <Nav darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    </div>
  );
}

export default App;
