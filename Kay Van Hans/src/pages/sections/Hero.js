import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import Arrow from "../../components/Arrow";
import Arrow2 from "../../components/Arrow2";
import Name from "../../components/Name";
import Name2 from "../../components/Name2";
import SocialMediaBtn from "../../components/SocialMediaBtn";

function Hero({ darkTheme, pageWidth, menuOpen, setMenuOpen }) {
  const [fromTop, setFromTop] = useState(false);

  const checkFromTop = () => {
    window.scrollY > 200 ? setFromTop(true) : setFromTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkFromTop);

    return () => window.removeEventListener("scroll", checkFromTop);
  }, []);

  const roleStyle = {
    color: !darkTheme ? "#22283100" : "#dddddd00",
    animation: !darkTheme
      ? "fadeRole 2s ease 2.4s forwards"
      : "fadeRole2 2s ease 2.4s forwards",
  };

  const bubbleStyle = {
    transform: fromTop
      ? "translate(0, 56%) scale(0)"
      : "translate(0, 56%) scale(1)",
    transition: fromTop
      ? "1s cubic-bezier(.16,-0.4,.74,1)"
      : "1s cubic-bezier(.3,-0.05,.6,1.36)",
  };

  const scrollTextStyle = {
    transform: fromTop ? "translate(-50%, -50%)" : "translate(-50%, -200%)",
    transition: fromTop ? "0.4s ease" : "0.4s ease 0.6s",
  };

  return (
    <ScHero>
      <SocialMediaBtn
        darkTheme={darkTheme}
        pageWidth={pageWidth}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <header className="title">
        {!darkTheme && <Name />}
        {darkTheme && <Name2 />}
        <h1>
          Aaron <br />
          Garcia
        </h1>
        <h3 style={roleStyle}>
          {/* <h3> */}
          SLC Based
          <br />
          UX Designer
          <br />
          React Developer
          <br />
          <Arrow darkTheme={darkTheme} />
          <Arrow2 darkTheme={darkTheme} />
        </h3>
        <Link
          href="#contact"
          to="contact"
          smooth={"easeInOutQuint"}
          offset={pageWidth > 768 ? 80 : 40}
          className="blueBtn cta"
          tabIndex={1}
          onFocus={() => {
            setMenuOpen(false);
          }}
        >
          <p>Contact</p>
        </Link>
      </header>
      <div className="scrollBubble" style={bubbleStyle}>
        <p style={scrollTextStyle}>Scroll</p>
      </div>
    </ScHero>
  );
}

const ScHero = styled("section")`
  width: 100vw;
  height: 100vh;
  min-height: 32rem;

  > * {
    position: absolute;
  }

  .title {
    top: 50%;
    left: 20%;
    transform: scale(1.1) translate(0, -50%);
    h1 {
      color: var(--red);
      font-size: 8.1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.12rem;
      opacity: 0;
      animation: fadeName 2s ease 3.6s forwards;
    }
    h3 {
      font-family: "Raleway", sans-serif;
      position: absolute;
      top: 100%;
      left: 100%;
      width: 50%;
      color: #22283155;
      font-size: calc(0.8rem + 0.6vw);
      font-weight: 300;
      text-transform: uppercase;
      img {
        padding-top: 0.2rem;
      }
    }
    &::before {
      content: "01";
      font-family: "Raleway", sans-serif;
      font-size: calc(0.7rem + 0.7vw);
      letter-spacing: 0.2rem;
      position: absolute;
      top: -1vw;
      left: -2vw;
      opacity: 0;
      animation: fade 2s ease 3.6s forwards;
    }
    .cta {
      bottom: -38%;
      left: 0;
      opacity: 0;
      pointer-events: none;
      animation: trueFade 1s ease forwards 3.4s;
      p {
        position: relative;
        transition: 0.3s ease;
        color: var(--light);
        &::before {
          content: "Contact";
          position: absolute;
          top: 0;
          left: 0;
          color: var(--red);
          z-index: -1;
          transition: 0.3s ease;
        }
      }
      &:hover {
        p {
          transform: translate(0.1rem, -0.1rem);
          transition-delay: 0.1s;
          &::before {
            transform: translate(-0.1rem, 0.1rem);
            transition-delay: 0.1s;
          }
        }
      }
    }
  }

  .scrollBubble {
    bottom: 0;
    left: 65%;
    background: var(--red);
    width: calc(6rem + 6vw);
    height: calc(6rem + 6vw);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    animation: trueFade 1s ease forwards 3.7s;
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      color: var(--light);
      text-transform: uppercase;
      font-size: calc(0.6rem + 0.6vw);
      letter-spacing: 0.1rem;
    }
  }

  @keyframes fadeName {
    to {
      opacity: 0.5;
    }
  }

  @keyframes fadeRole {
    to {
      color: #222831;
    }
  }
  @keyframes fadeRole2 {
    to {
      color: #ddd;
    }
  }

  @media (max-width: 1440px) {
    .title {
      left: 17%;
      transform: scale(1) translate(0, -60%);
    }
  }

  // Max Height
  @media (max-height: 640px) {
    .title {
      left: calc(8% + 8vw);
      h1 {
        font-size: 6rem;
      }
      h3 {
        width: 80%;
      }
    }
    .scrollBubble {
      left: 56%;
    }
  }
  // Max Height

  @media (max-width: 1024px) {
    .title {
      left: 8%;
      transform: scale(0.8) translate(0, -66%);
    }
  }

  @media (max-width: 768px) {
    .title {
      left: 6%;
      h1 {
        font-size: 6rem;
      }
      h3 {
        width: 60%;
      }
    }
  }

  @media (max-width: 520px) {
    .title {
      left: 2%;
      h3 {
        width: 46%;
        font-weight: 400;
        transform: translate(-80%, 10%);
      }
    }
  }

  /* @media (max-width: 480px) {
    .scrollBubble {
      bottom: 12%;
    }
  } */
`;

export default Hero;
