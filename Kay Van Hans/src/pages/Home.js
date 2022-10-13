import React from "react";
// import styled from "styled-components";
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
      <Work />
    </div>
  );
}

export default Home;
