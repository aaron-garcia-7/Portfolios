import React from "react";
// import styled from "styled-components";
import Hero from "./sections/Hero";

function Home({ darkTheme, setDarkTheme, pageWidth }) {
  return (
    <div>
      <Hero
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        pageWidth={pageWidth}
      />
    </div>
  );
}

export default Home;
