import React from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Work from "./sections/Work";

import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import Nav from "../components/Nav";
import ScrollToTop from "../router/ScrollToTop";

function Home({ darkTheme, setDarkTheme, pageWidth, atHome, setAtHome }) {
  return (
    <motion.div
      variants={pageAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollToTop />
      {/* <Nav
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        pageWidth={pageWidth}
        atHome={atHome}
        setAtHome={setAtHome}
      /> */}
      <Hero
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        pageWidth={pageWidth}
      />
      <Work pageWidth={pageWidth} setAtHome={setAtHome} />
      <About darkTheme={darkTheme} />
      <Contact darkTheme={darkTheme} />
    </motion.div>
  );
}

export default Home;
