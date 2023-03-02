import React, { useState } from "react";
import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import ScrollToTop from "../router/ScrollToTop";
import styled from "styled-components";

// Sections
import CaseHero from "./sections/CaseHero";
import Goal from "./sections/Goal";
import Design from "./sections/Design";
import Development from "./sections/Development";
import Contact from "./sections/Contact";

// Components
import ComingSoon from "../components/ComingSoon";
import PageSwiper from "../components/PageSwiper";
import ImageModule from "../components/ImageModule";

// Media
import mobile from "../images/photos/mobile3.webp";
import desktop from "../images/photos/desktop3.webp";
import video from "../videos/video1.mov";
import wireframe from "../images/photos/wireframe1.png";
import mockup from "../images/photos/mockup1.png";

function JoinSunder({ darkTheme, pageWidth }) {
  const [showModule, setShowModule] = useState(false);
  const [moduleImg, setModuleImg] = useState("");
  const [moduleName, setModuleName] = useState("");
  return (
    <div>
      <ScJoinSunder
        variants={pageAnim}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ScrollToTop />
        <CaseHero
          id={2}
          title={"Join Sunder Energy"}
          title1={"Join"}
          title2={"Sunder Energy"}
          title3={""}
          role1={"Design + Development"}
          role2={""}
          date={"Feb. 2023"}
          url={"https://joinsunder.com/"}
          img1={mobile}
          img2={desktop}
          darkTheme={darkTheme}
          pageWidth={pageWidth}
        />
        <ComingSoon />
      </ScJoinSunder>
      <PageSwiper />
    </div>
  );
}

const ScJoinSunder = styled(motion.div)`
  #caseHeroText1 {
    top: 30%;
  }

  @media (max-width: 1024px) {
    #caseHeroText1 {
      top: 28%;
    }
  }

  @media (max-width: 768px) {
    #caseHeroText1 {
      top: 22%;
    }
    #imgContainer1 {
      top: 62%;
    }
  }

  @media (max-height: 640px) {
    #caseHeroText1 {
      top: 24%;
    }
  }
`;

export default JoinSunder;
