import React, { useState, useEffect } from "react";
import styled from "styled-components";
import skillsData from "../../data/skilllsData";

import portrait from "../../images/photos/portrait.png";
import arrow from "../../images/graphics/arrow.svg";
import arrow2 from "../../images/graphics/arrow2.svg";
import SkillsCard from "../../components/SkillsCard";

function About({ darkTheme }) {
  const [cardNum, setCardNum] = useState(0);
  const [cardSpeed, setCardSpeed] = useState(6000);

  useEffect(() => {
    const cardCycle = setTimeout(() => {
      setCardNum((prev) => prev + 1);
      if (cardNum === 2) {
        setCardNum(0);
      }
    }, cardSpeed);

    return () => clearTimeout(cardCycle);
  }, [cardNum, cardSpeed]);

  // Parallax Effect
  const [offset, setOffset] = useState(0);
  const parallaxScroll = () => {
    setOffset(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", parallaxScroll);
    return () => window.removeEventListener("scroll", parallaxScroll);
  }, [offset]);
  const parallaxStyle = {
    transform: `translate(0, ${offset * 0.08}px)`,
  };
  // End Parallax

  return (
    <ScAbout id="about">
      <header className="aboutTitle">
        <h2>
          About <br /> Me
        </h2>
      </header>
      <div className="bio">
        <p className="bioText">
          Seeking to elevate client-side interactions with React js.{" "}
          <br className="break" /> I strive to offer a genuine user experience
          all while maintaining best practices for responsiveness and
          accessibility.
        </p>
        <img
          src={portrait}
          alt="Aaron Garcia grinning in a white sweater"
          className="portrait"
        />
        <a href="#" className="blueBtn resumeBtn">
          Resume
        </a>
      </div>
      <div className="skills">
        <div className="skillsHeader">
          <h4>Skills</h4>
          {!darkTheme && <img src={arrow} alt="" />}
          {darkTheme && <img src={arrow2} alt="" />}
        </div>
        <SkillsCard
          cardNum={cardNum}
          setCardNum={setCardNum}
          darkTheme={darkTheme}
          skill1={skillsData[cardNum].skill1}
          skill2={skillsData[cardNum].skill2}
          skill3={skillsData[cardNum].skill3}
          skill4={skillsData[cardNum].skill4}
          skill5={skillsData[cardNum].skill5}
          setCardSpeed={setCardSpeed}
        />
      </div>
      <div className="aboutBubbleDiv" style={parallaxStyle}>
        <div className="aboutBubble" />
      </div>
    </ScAbout>
  );
}

const ScAbout = styled("section")`
  height: 160vh;
  min-height: 96rem;
  > * {
    position: absolute;
  }
  .aboutTitle {
    top: 16%;
    left: 14%;
    font-size: calc(1.6rem + 1.6vw);
    text-transform: uppercase;
    &::before {
      content: "03";
      font-family: "Raleway", sans-serif;
      font-size: calc(0.7rem + 0.7vw);
      letter-spacing: 0.2rem;
      position: absolute;
      top: -1vw;
      left: -2vw;
      opacity: 0;
      animation: fade 2s ease 0.2s forwards;
    }
  }
  .bio {
    width: calc(24rem + 12vw);
    top: 32%;
    left: 14%;
    .bioText {
      width: 120%;
      font-size: calc(0.8rem + 0.8vw);
      font-weight: 300;
      line-height: 136%;
      margin-bottom: 2rem;
    }
    .portrait {
      transform: translate(12vw, 0);
      width: 86%;
    }
    .resumeBtn {
      bottom: -14%;
      left: 12vw;
      transform: scale(1.1);
    }
  }
  .skills {
    top: 52%;
    left: 52%;
    width: calc(16rem + 16vw);
    height: calc(18rem + 18vw);
    .skillsHeader {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-bottom: 1rem;
      h4 {
        font-family: "Raleway", sans-serif;
        font-size: calc(0.8rem + 0.8vw);
        text-transform: uppercase;
        font-weight: 300;
        letter-spacing: 0.1rem;
      }
      img {
        transform: rotate(90deg);
      }
    }
  }
  .aboutBubbleDiv {
    top: -10%;
    left: 0;
    overflow: hidden;
    width: calc(16rem + 16vw);
    height: calc(16rem + 16vw);
    pointer-events: none;
    transition: 0.8s cubic-bezier(0.18, 0.79, 0.49, 1);
    opacity: 0.4;
    z-index: -1;
    .aboutBubble {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: translate(-16%, 0);
      background: var(--bubble);
    }
  }

  @media (max-width: 1440px) {
    height: 148vh;
    min-height: 80rem;
    .bio {
      top: 32%;
      .portrait {
        transform: translate(8vw, 0);
      }
      .resumeBtn {
        bottom: -16%;
        left: 8vw;
        transform: scale(1);
      }
    }
    .skills {
      top: 46%;
    }
  }

  @media (max-width: 1224px) {
    .bio {
      .portrait {
        transform: translate(0, 0);
        width: 80%;
      }
      .resumeBtn {
        left: 0;
      }
    }
    .skills {
      left: 46%;
    }
  }

  @media (max-width: 1024px) {
    .aboutTitle {
      left: 10%;
    }
    .bio {
      left: 10%;
      .resumeBtn {
        left: -1rem;
        transform: scale(0.8);
      }
    }
  }

  @media (max-width: 768px) {
    height: 200vh;
    min-height: 72rem;
    .aboutTitle {
      top: 12%;
      &::before {
        top: -2vw;
        left: -3vw;
        transform: scale(0.8);
      }
    }
    .bio {
      top: 24%;
      .bioText {
        width: 104%;
      }
    }
    .skills {
      top: 56%;
      left: auto;
      right: 8%;
    }
  }

  @media (max-width: 520px) {
    min-height: 86rem;
    .aboutTitle {
      left: 12%;
    }
    .bio {
      left: 50%;
      transform: translate(-50%, 0);
      width: calc(18rem + 18vw);
      .bioText {
        width: 86%;
        margin-bottom: 3.2rem;
        .break {
          display: none;
        }
      }
      .portrait {
        width: 100%;
      }
    }
    .skills {
      width: calc(18rem + 18vw);
      top: 60%;
      right: 50%;
      transform: translate(50%, 0);
    }
  }

  @media (max-width: 480px) {
    height: 168vh;
    min-height: 68rem;
    .aboutTitle {
      top: 8%;
    }
    .bio {
      top: 18%;
      width: calc(16rem + 16vw);
      .bioText {
        width: 92%;
      }
    }
    .skills {
      width: calc(16rem + 16vw);
      top: 54%;
    }
  }
`;

export default About;
