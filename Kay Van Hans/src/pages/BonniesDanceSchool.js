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
import PageSwiper from "../components/PageSwiper";
import ImageModule from "../components/ImageModule";

// Media
import mobile from "../images/photos/mobile1.webp";
import desktop from "../images/photos/desktop1.webp";
import video from "../videos/video1.mov";
import wireframe from "../images/photos/wireframe1.png";
import mockup from "../images/photos/mockup1.png";

function BonniesDanceSchool({ darkTheme, pageWidth }) {
  const [showModule, setShowModule] = useState(false);
  const [moduleImg, setModuleImg] = useState("");
  const [moduleName, setModuleName] = useState("");
  return (
    <div>
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
          // subText={"The intro and menu animations were really fun to make"}
          subText={"The intro and menu animations get me every time"}
          // emoji={" 😊"}
          emoji={" 😮‍💨"}
          text1={
            "Bonnie’s Dance School is a private/home dance studio located in West Jordan, UT. They offer lessons for a wide range of dance styles including ballet, contemporary, and jazz, all for a excellent deal."
          }
          text2={
            "Established in 2013, Bonnie along with her other dance instructors have worked with thousands of aspiring dancers and enthusiasts."
          }
          text3={
            "with this project was to change the style, update the page info, and enhance the user experience. Main pain points from the original site were: lack of responsiveness across devices/screen sizes, lack of order and heirarchy, and poor color usage, creating friction with contrast in some areas and potential eye strain on users."
          }
        />
        <Design
          id={1}
          title={"Bonnie's Dance School"}
          text1={
            "The design procress was extremely insightful and taught me a lot about color usage, images on a webpage, and the power of persistence. It took me a few tries/design concepts until I reached one that I was happy with and proud to present. "
          }
          text2={
            "The initial concept was more of a traditional website... the exact opposite of what I’m trying to achieve with my design career. I shifted away from using a photograph of a person and instead chose to go with a line style art. I also went with a different color palette which is easier on the eyes. "
          }
          wireframe={wireframe}
          setShowModule={setShowModule}
          setModuleImg={setModuleImg}
          setModuleName={setModuleName}
          darkTheme={darkTheme}
        />
        <Development
          mockup={mockup}
          text1={
            "The development process was inspiring and taught me that unique animations and a tailored experience come at the price of hard work and lots of trial and error. I also learned a bit about transferring domain names between providers."
          }
          text2={
            "I built this project using React and while there’s still so much to learn, I feel comfortable with it now. Dependencies include: framer motion, react-intersection-observer, react-scroll, and styled components. You can access this code by visiting my "
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
          title={"Bonne’s Dance School"}
        />
      </ScBonniesDanceSchool>
      <PageSwiper />
    </div>
  );
}

const ScBonniesDanceSchool = styled(motion.div)`
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

export default BonniesDanceSchool;
