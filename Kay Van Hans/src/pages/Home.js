import React from "react";
import Hero from "./sections/Hero";
import Work from "./sections/Work";

function Home({ darkTheme, setDarkTheme, pageWidth }) {
  return (
    <div>
      <Hero
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        pageWidth={pageWidth}
      />
      <Work pageWidth={pageWidth} />
    </div>
  );
}

export default Home;
