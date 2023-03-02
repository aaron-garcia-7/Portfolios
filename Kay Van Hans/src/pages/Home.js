import React from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Work from "./sections/Work";

import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import ScrollToTop from "../router/ScrollToTop";
import PageSwiper from "../components/PageSwiper";

function Home({ darkTheme, setDarkTheme, pageWidth, menuOpen, setMenuOpen }) {
  return (
    <div>
      <motion.div
        variants={pageAnim}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ScrollToTop />
        <Hero
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
          pageWidth={pageWidth}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Work pageWidth={pageWidth} />
        <About darkTheme={darkTheme} />
        <Contact darkTheme={darkTheme} pageWidth={pageWidth} inHome={true} />
      </motion.div>
      <PageSwiper />
    </div>
  );
}

export default Home;
