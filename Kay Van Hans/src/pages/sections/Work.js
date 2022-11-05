import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MouseDiv from "../../components/MouseDiv";
import ProjectCard from "../../components/ProjectCard";
import arrow from "../../images/graphics/arrow.svg";

import projectData from "../../data/projectData";

function Work({ pageWidth }) {
  const [cardHover, setCardHover] = useState(false);
  const [cardHover2, setCardHover2] = useState(false);
  const [cardHover3, setCardHover3] = useState(false);

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
  const parallaxStyleBubble = {
    transform: `translate(0, ${offset * -0.08}px)`,
  };
  // End Parallax

  const bubbleStyle = {
    transform: cardHover2 ? "scale(1)" : "scale(0)",
    transition: cardHover2 ? "0.5s ease" : "0.5s ease 0.2s",
  };

  const bubbleTextStyle = {
    opacity: cardHover2 ? 1 : 0,
    transition: cardHover2 ? "0.8s ease 0.2s" : "0.4s",
  };

  const bubbleStyle2 = {
    transform: cardHover3 ? "scale(1)" : "scale(0)",
    transition: cardHover3 ? "0.5s ease" : "0.5s ease 0.2s",
  };

  const bubbleTextStyle2 = {
    opacity: cardHover3 ? 1 : 0,
    transition: cardHover3 ? "0.8s ease 0.2s" : "0.4s",
  };

  return (
    <ScWork id="work">
      <header className="workTitle">
        <h2>
          My <br /> Work
        </h2>
      </header>
      {projectData.map((obj) => (
        <ProjectCard
          key={obj.id}
          id={obj.id}
          title={obj.title}
          name1={obj.name1}
          name2={obj.name2}
          name3={obj.name3}
          img={obj.img}
          role={obj.role}
          role2={obj.role2}
          date={obj.date}
          url={obj.url}
          setCardHover={setCardHover}
          setCardHover2={setCardHover2}
          setCardHover3={setCardHover3}
          pageWidth={pageWidth}
        />
      ))}
      <MouseDiv cardHover={cardHover} cardHover3={cardHover3} />
      <div className="workBubbleDiv" style={parallaxStyle}>
        <div className="workBubble" />
      </div>
      <div className="textBubble textBubble1" style={parallaxStyleBubble}>
        <img src={arrow} alt="" />
        <div className="innerBubble" style={bubbleStyle}>
          <p className="bubbleText" style={bubbleTextStyle}>
            First "production" <br />
            ready project
          </p>
        </div>
      </div>
      <div className="textBubble textBubble2" style={parallaxStyleBubble}>
        <img src={arrow} alt="" />
        <div className="innerBubble" style={bubbleStyle2}>
          <p className="bubbleText" style={bubbleTextStyle2}>
            Your Project Here
          </p>
        </div>
      </div>
    </ScWork>
  );
}

const ScWork = styled("section")`
  height: 220vh;
  min-height: 120rem;
  > * {
    position: absolute;
  }
  .workTitle {
    top: 8%;
    right: 12%;
    text-align: right;
    font-size: calc(1.6rem + 1.6vw);
    text-transform: uppercase;
    &::before {
      content: "02";
      font-family: "Raleway", sans-serif;
      font-size: calc(0.7rem + 0.7vw);
      letter-spacing: 0.2rem;
      position: absolute;
      top: -2vw;
      right: -3.2vw;
      opacity: 0;
      animation: fade 2s ease 0.2s forwards;
    }
  }

  #card1 {
    top: 20%;
    right: 12%;
    .card {
      img {
        width: 80%;
        transform: translate(-54%, -50%);
      }
    }
    aside {
      top: 28%;
      left: -68%;
    }
  }
  #card2 {
    top: 40%;
    left: 12%;
    .card {
      img {
        width: 84%;
        transform: translate(-50%, -50%);
      }
    }
    aside {
      right: -68%;
      bottom: 0;
    }
  }
  #card3 {
    top: 72%;
    right: 34%;
    .card {
      img {
        width: 90%;
        transform: translate(-50%, -50%);
      }
    }
    aside {
      right: -68%;
      bottom: -18%;
    }
  }

  .workBubbleDiv {
    top: 4%;
    right: 0;
    overflow: hidden;
    width: calc(16rem + 16vw);
    height: calc(16rem + 16vw);
    pointer-events: none;
    transition: 0.8s cubic-bezier(0.18, 0.79, 0.49, 1);
    opacity: 0.4;
    z-index: -1;
    .workBubble {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: translate(16%, 0);
      background: var(--bubble);
    }
  }

  .textBubble {
    width: calc(6.4rem + 6.4vw);
    height: calc(6.4rem + 6.4vw);
    border-radius: 50%;
    background: #d9d9d9;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s cubic-bezier(0.18, 0.79, 0.49, 1);
    .innerBubble {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      .bubbleText {
        color: black;
        text-transform: uppercase;
        font-size: calc(0.7rem + 0.2vw);
        line-height: 140%;
      }
    }
  }

  .textBubble1 {
    top: 34%;
    left: 2%;
  }
  .textBubble2 {
    top: 84%;
    left: calc(2rem + 66vw);
    transition: left 0s;
    img {
      transform: rotate(-225deg);
    }
  }

  @media (max-width: 1440px) {
    height: 240vh;
  }
  @media (max-width: 1224px) {
    height: 220vh;
    min-height: 112rem;
    .workTitle {
      right: 8%;
    }
    #card1 {
      right: 8%;
      text-align: right;
    }

    #card2 {
      top: 48%;
      left: 8%;
    }

    #card3 {
      top: 76%;
      right: 8%;
      aside {
        text-align: right;
        right: 108%;
        width: 100%;
      }
    }
    .textBubble1 {
      top: 42%;
    }
    .textBubble2 {
      top: 86%;
      left: auto;
      right: calc(10rem + 32vw);
      img {
        transform: rotate(-45deg);
      }
    }
  }

  @media (max-width: 768px) {
    height: 240vh;
    min-height: 128rem;
    .workTitle {
      top: 4%;
      &::before {
        top: -2vw;
        left: 8vw;
        transform: scale(0.8);
      }
    }

    #card1 {
      top: 16%;
      right: 50%;
      transform: translate(50%, 0);
      .card {
        img {
          width: 60%;
        }
      }
      aside {
        top: 0;
        left: 0;
      }
    }

    #card2 {
      top: 46%;
      left: 50%;
      transform: translate(-50%, 0);
      .card {
        img {
          width: 68%;
        }
      }
    }

    #card3 {
      right: 50%;
      transform: translate(50%, 0);
    }

    .textBubble {
      display: none;
    }
  }

  @media (max-width: 520px) {
    .workBubbleDiv {
      transition: 0s;
    }
  }
  @media (max-width: 480px) {
    height: 208vh;
    min-height: 100rem;
  }
`;

export default Work;
