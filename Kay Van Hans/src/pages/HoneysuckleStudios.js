import React from "react";
import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import ScrollToTop from "../router/ScrollToTop";

// Sections
import CaseHero from "./sections/CaseHero";
import Contact from "./sections/Contact";
import Goal from "./sections/Goal";

// Media
import mobile from "../images/photos/mobile2.png";
import desktop from "../images/photos/desktop2.png";
import video from "../videos/video2.mov";
import v1 from "../images/photos/p2v1.png";
import v2 from "../images/photos/p2v2.png";
import v3 from "../images/photos/p2v3.png";
import Design from "./sections/Design";

function HoneysuckleStudios({ darkTheme, pageWidth }) {
  return (
    <motion.div
      variants={pageAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollToTop />
      <CaseHero
        id={2}
        title={"Honeysuckle Studios"}
        title1={"Honeysuckle"}
        title2={"Studios"}
        title3={""}
        role1={"Visual & Interaction Design"}
        role2={"+ Front-End Development"}
        date={"Aug. 2022"}
        url={"https://honeysuckle-studios.com/"}
        img1={mobile}
        img2={desktop}
        darkTheme={darkTheme}
        pageWidth={pageWidth}
      />
      <Goal
        id={2}
        video={video}
        subText={
          "The text that pans across the screen responds to the user scroll"
        }
        text1={
          "Honeysuckle Studios is a private/home eyelash studio located in West Jordan, UT. They offer a wide range of lash styles including classic, hybrid, and volume, at a competitive price."
        }
        text2={
          "Established in 2021, Bailey, the owner, has always been inspired to start her own business."
        }
        text3={
          "with this project was to update the original design, which I had previously made. Main painpoints from the original site were: lack of call to action, dated look, and not the best color usage. There was also a lack of visual hierarchy with the navigation links."
        }
      />
      <Design
        text1={
          "The design procress was motivating and encouraging. I would say that after many prior projects, this was the first website where I discovered my “style”, a more minimalistic look with a blend of modern and classic. This was where I began to feel confident in my work and proud to show it to the world."
        }
        text2={
          "The prior concept was definitely unique, however I wanted to provide a more natural user experience and reduce the amount of user clicks needed to navigate the page, which the previous site relied heavily on."
        }
        v1={v1}
        v2={v2}
        v3={v3}
        darkTheme={darkTheme}
      />
      <Contact />
    </motion.div>
  );
}

export default HoneysuckleStudios;
