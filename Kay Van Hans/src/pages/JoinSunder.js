import React, { useState, useEffect } from "react";
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
import video from "../videos/video3.mov";
import wireframe from "../images/photos/wireframe3.png";
import mockup from "../images/photos/mockup3.webp";

function JoinSunder({ darkTheme, pageWidth }) {
  const [showModule, setShowModule] = useState(false);
  const [moduleImg, setModuleImg] = useState("");
  const [moduleName, setModuleName] = useState("");

  useEffect(() => {
    if (showModule) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModule]);

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
          id={3}
          title={"Join Sunder"}
          title1={"Join Sunder"}
          title2={""}
          title3={""}
          role1={"Motion Design +"}
          role2={"Front-end Development"}
          date={"Feb. 2023"}
          url={"https://joinsunder.com/"}
          img1={mobile}
          img2={desktop}
          darkTheme={darkTheme}
          pageWidth={pageWidth}
        />
        <Goal
          id={3}
          video={video}
          subText={
            "The navigation menu & call to actions offer unique animations & transitions"
            // "There are some pretty unique animations across the site. Go experience them!"
          }
          emoji={" 😎"}
          text1={`Sunder Energy is a solar sales company on a mission "to give people that power to change the future." Sunder’s focus is to disrupt the way America produces its energy.`}
          text2={
            "Established in 2019, long-time friends Max Britton and Eric Nielsen took their solar industry experience and turned it into a business."
          }
          text3={
            "with this project was to provide a unique website where opportunity driven people could sign up and work with Sunder, all while showcasing the benefits and growth that Sunder offers."
          }
        />
        <Design
          id={3}
          title={"Join Sunder"}
          text1={
            "The design process was mainly handled by the Creative Director at Sunder Energy. Using Figma, we were able to collaborate with ease (even in real time!) and share assets quickly."
          }
          text2={
            "On many occasions throughout the project, I was given the opportunity to provide design insights and suggestions along with crafting a variety of ideas for animations, transitions, and motion design."
          }
          wireframe={wireframe}
          setShowModule={setShowModule}
          setModuleImg={setModuleImg}
          setModuleName={setModuleName}
          darkTheme={darkTheme}
        />
        <Development
          title={"Join Sunder"}
          mockup={mockup}
          text1={
            "The development process was a journey filled with ups and downs. I started the project using NextJS 13, but since it was in beta at the time and this was my first enterprise client I decided to build the site with something I was more familiar with: html, scss, and vanilla javascript."
          }
          text2={
            "Green Sock Animation Platform provided many seemless solutions for animations that would have been tricky and costly. Their ScrollTrigger Plugin was very handy and is used throughout the site. To view the source code, visit my "
          }
          setShowModule={setShowModule}
          setModuleImg={setModuleImg}
          setModuleName={setModuleName}
          darkTheme={darkTheme}
        />
        <Contact darkTheme={darkTheme} />
        <ImageModule
          showModule={showModule}
          setShowModule={setShowModule}
          moduleImg={moduleImg}
          setModuleImg={setModuleImg}
          moduleName={moduleName}
          title={"Join Sunder"}
        />
      </ScJoinSunder>
      <PageSwiper />
    </div>
  );
}

const ScJoinSunder = styled(motion.div)`
  #caseHeroText3 {
    top: 40%;
    h1 {
      height: 4.8rem;
      width: calc(8rem + 46vw);
    }
  }

  @media (max-width: 1440px) {
    #caseHeroText3 {
      top: 38%;
    }
  }

  @media (max-width: 1024px) {
    #caseHeroText3 {
      top: 34%; // default
    }
  }

  @media (max-width: 768px) {
    #caseHeroText3 {
      top: 22%;
    }
    #imgContainer3 {
      top: 62%;
    }
  }

  @media (max-width: 520px) {
    #caseHeroText3 {
      h1 {
        transform: translate(0, 20%);
      }
    }
  }

  @media (max-height: 640px) {
    #caseHeroText3 {
      top: 28%;
    }
  }
`;

export default JoinSunder;
