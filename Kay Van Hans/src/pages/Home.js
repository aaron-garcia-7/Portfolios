import React from "react";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Work from "./sections/Work";

function Home({ darkTheme, setDarkTheme, pageWidth, setAtHome }) {
  return (
    <div>
      <Hero
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        pageWidth={pageWidth}
      />
      <Work pageWidth={pageWidth} setAtHome={setAtHome} />
      <About darkTheme={darkTheme} />
    </div>
  );
}

export default Home;
