import React from "react";
// import styled from "styled-components";
import Hero from "./sections/Hero";

function Home({ darkTheme, setDarkTheme }) {
  return (
    <div>
      <Hero darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    </div>
  );
}

export default Home;
