import React from "react";
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
    </div>
  );
}

export default Home;
