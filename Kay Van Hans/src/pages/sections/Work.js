import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MouseDiv from "../../components/MouseDiv";
import ProjectCard from "../../components/ProjectCard";
import arrow from "../../images/graphics/arrow.svg";

import projectData from "../../data/projectData";

function Work({ pageWidth, setAtHome }) {
  const [cardHover, setCardHover] = useState(false);

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
    // transform: `translate(0, ${offset * 0.05}px)`,
    transform: `translate(0, ${offset * 0.08}px)`,
  };
  // End Parallax

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
          cardHover={cardHover}
          setCardHover={setCardHover}
          setAtHome={setAtHome}
        />
      ))}
      <MouseDiv
        cardHover={cardHover}
        setCardHover={setCardHover}
        pageWidth={pageWidth}
      />
      <div className="bubbleDiv1" style={parallaxStyle}>
        <div className="bubble1" />
      </div>
      <div className="bubbleDiv2">
        <img src={arrow} alt="" />
      </div>
    </ScWork>
  );
}

const ScWork = styled("section")`
  height: 320vh;
  min-height: 146rem;
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
      top: 0;
      left: -2vw;
      opacity: 0;
      animation: fade 2s ease 0.2s forwards;
    }
  }

  #card1 {
    top: 16%;
    right: 12%;
    .card {
      img {
        width: 80%;
        transform: translate(-54%, -50%);
      }
    }
    aside {
      /* top: 0; */
      top: 28%;
      left: -76%;
      /* left: 0; */
      /* transform: translate(-100%, 20%); */
    }
  }
  #card2 {
    top: 32%;
    left: 12%;
    .card {
      img {
        width: 84%;
        transform: translate(-50%, -50%);
      }
    }
    aside {
      /* bottom: 40%; */
      right: -76%;
      bottom: 0;
      /* right: 0; */
      /* transform: translate(100%, -20%); */
    }
  }
  #card3 {
    top: 56%;
    right: 34%;
    .card {
      img {
        width: 36%;
        transform: translate(-50%, -50%);
      }
    }
    aside {
      /* bottom: 50%; */
      bottom: 12%;
      right: -86%;
      /* right: 0; */
      /* transform: translate(100%, 50%); */
    }
  }
  #card4 {
    top: 80%;
    left: 18%;
    .card {
      img {
        width: 90%;
        transform: translate(-50%, -50%);
      }
    }
    aside {
      /* bottom: 50%; */
      right: -76%;
      bottom: 0;
      /* right: 0; */
      /* transform: translate(100%, -60%); */
    }
  }

  .bubbleDiv1 {
    /* border: 1px solid black; */
    overflow: hidden;
    width: calc(16rem + 16vw);
    height: calc(16rem + 16vw);
    pointer-events: none;
    transition: 0.8s cubic-bezier(0.18, 0.79, 0.49, 1);
    opacity: 0.4;
    z-index: -1;
    .bubble1 {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: translate(-16%, 0);
      background: var(--bubble);
    }
  }
  .bubbleDiv2 {
    top: 25%;
    left: 2%;
    /* overflow: hidden; */
    width: calc(6rem + 6vw);
    height: calc(6rem + 6vw);
    border-radius: 50%;
    background: #d9d9d9;
    pointer-events: none;
    /* transition: 0.8s cubic-bezier(0.18, 0.79, 0.49, 1); */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1224px) {
    .workTitle {
      right: 8%;
    }
    #card1 {
      right: 8%;
      text-align: right;
      aside {
        /* transform: translate(-100%, 60%); */
      }
    }

    #card2 {
      top: 34%;
      left: 8%;
      aside {
        /* transform: translate(100%, -60%); */
      }
    }

    #card3 {
      top: 52%;
      right: 8%;
      aside {
        /* border: 2px solid white; */
        text-align: right;
        /* bottom: 50%; */
        right: 100%;
        width: 100%;
        /* right: auto; */
        /* transform: translate(-100%, 60%); */
      }
    }

    #card4 {
      top: 70%;
      left: 8%;
      aside {
        transform: translate(100%, -100%);
      }
    }
  }

  @media (max-width: 768px) {
    /* height: 400vh; */
    /* min-height: 180rem; */
    height: 320vh;
    min-height: 168rem;
    .workTitle {
      top: 4%;
      &::before {
        top: -2vw;
        left: 8vw;
        transform: scale(0.8);
      }
    }

    #card1 {
      top: 14%;
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
      top: 36%;
      left: 50%;
      transform: translate(-50%, 0);
      .card {
        img {
          width: 68%;
        }
      }
    }

    #card3 {
      top: 58%;
      right: 50%;
      transform: translate(50%, 0);
      .card {
        img {
          width: 24%;
        }
      }
    }

    #card4 {
      top: 80%;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  @media (max-width: 480px) {
    height: 280vh;
    min-height: 140rem;
  }
`;

export default Work;
