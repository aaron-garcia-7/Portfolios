import React from "react";
import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import ScrollToTop from "../router/ScrollToTop";
import styled from "styled-components";

// Sections
import CaseHero from "./sections/CaseHero";
import Contact from "./sections/Contact";
import Goal from "./sections/Goal";

// Media
import mobile from "../images/photos/mobile1.png";
import desktop from "../images/photos/desktop1.png";
import video from "../videos/video1.mov";

function BonniesDanceSchool({ darkTheme, pageWidth }) {
  return (
    <ScBonniesDanceSchool
      variants={pageAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollToTop />
      <CaseHero
        id={1}
        title={"Bonnie’s Dance School"}
        title1={"Bonnie’s"}
        title2={"Dance"}
        title3={"School"}
        role1={"UX Design + Front-End Development"}
        role2={""}
        date={"Sept. 2022"}
        url={"https://bonniesdanceschool.com/"}
        img1={mobile}
        img2={desktop}
        darkTheme={darkTheme}
        pageWidth={pageWidth}
      />
      <Goal
        id={1}
        video={video}
        subText={"The intro and transition animations were fun to make"}
        text1={
          "Bonnie’s Dance School is a private/home dance studio located in West Jordan, UT. They offer lessons for a wide range of dance styles including ballet, contemporary, and jazz, all for a excellent deal."
        }
        text2={
          "Established in 2013*, Bonnie along with her other dance instructors have worked with thousands of aspiring dancers and enthusiasts."
        }
        text3={
          "with this project was to change the style, update the page info, and enhance the user experience. Main painpoints from the original site were: lack of responsiveness across devices/screen sizes, lack of order and heirarchy, and poor color usage, creating friction with contrast in some areas and potential eye strain on users."
        }
      />
      <Contact />
    </ScBonniesDanceSchool>
  );
}

const ScBonniesDanceSchool = styled(motion.div)`
  #mainText1 {
    /* border: 2px dashed grey; */
    top: 28%;
  }

  @media (max-width: 1024px) {
    #mainText1 {
      top: 28%;
    }
  }

  @media (max-width: 768px) {
    #mainText1 {
      top: 22%;
    }
  }

  @media (max-height: 640px) {
    #mainText1 {
      top: 24%;
    }
  }
`;

export default BonniesDanceSchool;
