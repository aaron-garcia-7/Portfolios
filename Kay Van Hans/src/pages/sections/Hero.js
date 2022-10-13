import React from "react";
import styled from "styled-components";
import Arrow from "../../components/Arrow";
import Arrow2 from "../../components/Arrow2";
import Name from "../../components/Name";
import Name2 from "../../components/Name2";
import SocialMediaBtn from "../../components/SocialMediaBtn";
// import arrow from "../../images/graphics/arrow.svg";

function Hero({ darkTheme, setDarkTheme }) {
  const roleStyle = {
    color: !darkTheme ? "#22283100" : "#dddddd00",
    animation: !darkTheme
      ? "fadeRole 2s ease 3s forwards"
      : "fadeRole2 2s ease 3s forwards",
  };

  return (
    <ScHero>
      <SocialMediaBtn darkTheme={darkTheme} />
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
        <a href="" className="cta">
          Contact
        </a>
      </header>
      <div className="scrollBubble">
        <p>Scroll</p>
      </div>
    </ScHero>
  );
}

const ScHero = styled("section")`
  /* border: 2px dashed red; */
  width: 100vw;
  height: 100vh;
  min-height: 32rem;

  > * {
    position: absolute;
  }

  .title {
    /* border: 2px dashed gray; */
    top: 50%;
    left: 25%;
    transform: translate(0, -60%);
    h1 {
      color: var(--red);
      /* font-size: calc(3.2rem + 4vw); */
      font-size: 8.1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.12rem;
      opacity: 0;
      animation: fadeName 2s ease 3.6s forwards;
    }
    h3 {
      /* border: 2px dashed gray; */
      font-family: "Raleway", sans-serif;
      position: absolute;
      top: 100%;
      left: 100%;
      width: 40%;
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
      position: absolute;
      top: 0;
      left: -2vw;
      font-size: calc(0.6rem + 0.6vw);
      opacity: 0;
      animation: fade 2s ease 3.6s forwards;
    }
    .cta {
      position: absolute;
      /* bottom: -42%; */
      bottom: -38%;
      left: 0;
      padding: 1rem 2rem;
      background: var(--blue);
      color: var(--light);
      font-size: calc(0.6rem + 0.6vw);
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
    }
  }

  .scrollBubble {
    bottom: 0;
    left: 65%;
    transform: translate(0, 56%);
    background: var(--red);
    /* width: 12vw; */
    width: calc(6rem + 6vw);
    /* height: 12vw; */
    height: calc(6rem + 6vw);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 2rem;
    p {
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
    }
  }

  @media (max-width: 1024px) {
    .title {
      left: 8%;
      transform: scale(0.8) translate(0, -66%);
    }
  }

  @media (max-width: 768px) {
    .title {
      left: 2%;
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
      h3 {
        /* border: 2px dashed gray; */
        width: 46%;
        font-weight: 400;
        transform: translate(-80%, 10%);
      }
    }
  }
`;

export default Hero;
