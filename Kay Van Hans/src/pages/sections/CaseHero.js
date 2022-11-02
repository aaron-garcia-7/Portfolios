import React, { useState } from "react";
import styled from "styled-components";
import SocialMediaBtn from "../../components/SocialMediaBtn";

function CaseHero({
  id,
  title,
  title1,
  title2,
  title3,
  role1,
  role2,
  date,
  url,
  img1,
  img2,
  darkTheme,
  pageWidth,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ScCaseHero>
      <SocialMediaBtn
        darkTheme={darkTheme}
        pageWidth={pageWidth}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div
        className="caseHeroText"
        id={id === 1 ? "caseHeroText1" : id === 2 ? "caseHeroText2" : null}
      >
        <h1>
          <span>{title1}</span>
          <br />
          <span>{title2}</span>
          <br />
          <span>{title3}</span>
        </h1>
        <h3>
          <span>{role1}</span> <br /> <span>{role2}</span>
        </h3>
        <p>{date}</p>
        <a href={url} target="_blank" rel="noreferrer" className="blueBtn">
          <p>Visit Site</p>
        </a>
      </div>
      <div
        className="imgContainer"
        id={id === 1 ? "imgContainer1" : id === 2 ? "imgContainer2" : null}
      >
        <img src={img1} alt={`Desktop display of ${title}`} />
        <img src={img2} alt={`Mobile display of ${title}`} />
      </div>
    </ScCaseHero>
  );
}

const ScCaseHero = styled("section")`
  position: relative;
  height: 100vh;
  min-height: 42rem;
  > * {
    position: absolute;
  }
  .caseHeroText {
    top: 34%;
    left: 14%;
    width: 32vw;
    height: 48vh;
    min-height: 26rem;
    transform: scale(1.1);
    opacity: 0;
    pointer-events: none;
    animation: trueFade 2.8s ease 0.8s forwards;
    &::before {
      content: "01";
      font-family: "Raleway", sans-serif;
      position: absolute;
      /* top: calc(-0.8rem - 0.8vw); */
      /* left: calc(-1.2rem - 1.2vw); */
      bottom: 100%;
      right: 100%;
      font-size: calc(0.7rem + 0.7vw);
      letter-spacing: 0.2rem;
    }
    > * {
      text-transform: uppercase;
      letter-spacing: 0.08rem;
    }
    h1 {
      font-size: calc(2rem + 2vw);
      margin-bottom: calc(1rem + 1vw);
    }
    h3 {
      font-size: calc(0.6rem + 0.6vw);
      font-weight: 300;
      margin-bottom: calc(0.6rem + 0.6vw);
    }
    p {
      font-size: calc(0.5rem + 0.5vw);
      margin-bottom: calc(1.6rem + 1.6vw);
      font-weight: 600;
    }
    a {
      height: 3.2rem;
      p {
        position: relative;
        transition: 0.3s ease;
        color: var(--light);
        &::before {
          content: "Visit Site";
          position: absolute;
          top: 0;
          left: 0;
          color: var(--red);
          z-index: -1;
          transition: 0.3s ease, font 0s;
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
  .imgContainer {
    top: 26%;
    right: 6%;
    width: calc(12rem + 32vw);
    height: 60vh;
    min-height: 32rem;
    /* opacity: 1; */
    /* animation: trueFade 2.8s ease 1.2s forwards; */
    img {
      position: absolute;
      bottom: 0;
      width: calc(2rem + 8vw);
      transform: translate(0, 120%);
      /* animation: slideUp 1.4s cubic-bezier(0.17, 0.67, 0.41, 0.99) 1s forwards; */
      animation: slideUp 1.4s cubic-bezier(0.19, 0.83, 0.35, 1.23) 1s forwards;
      &:nth-of-type(2) {
        right: 0;
        width: calc(12rem + 26vw);
        z-index: -1;
        animation-delay: 0.6s;
      }
    }
  }

  @media (max-width: 1440px) {
    .caseHeroText {
      transform: scale(1);
      left: 12%;
    }
  }

  // MAX HEIGHT
  // Placed above width of 1224px for specificity reasons
  @media (max-height: 640px) {
    .caseHeroText {
      transform: scale(0.8);
      top: 24%;
    }
    .imgContainer {
      transform: scale(0.8);
      top: 16%;
    }
  }
  // MAX HEIGHT
  // Placed above width of 1224px for specificity reasons

  @media (max-width: 1224px) {
    .caseHeroText {
      transform: scale(0.9);
      left: 10%;
    }
    .imgContainer {
      transform: scale(0.9);
      right: 4%;
      top: 16%;
    }
  }
  @media (max-width: 1024px) {
    max-height: 52rem;
    .caseHeroText {
      transform: scale(0.8);
      top: 30%;
      left: 6%;
      width: 42vw;
      &::before {
        transform: scale(0.8);
      }
      a {
        transform: scale(1) translate(0, 0);
      }
    }
    .imgContainer {
      transform: scale(0.8);
      top: 10%;
      right: 0%;
    }
  }

  @media (max-width: 768px) {
    min-height: 60rem;
    height: 160vh;
    max-height: 80rem;
    .caseHeroText {
      transform: scale(1.1);
      top: 24%;
      left: 20%;
      width: 60vw;
      height: 42vh;
      min-height: 20rem;
    }
    .imgContainer {
      transform: scale(1.1);
      top: 58%;
      right: 18%;
      height: 20vh;
      min-height: 24rem;
    }
  }
  @media (max-width: 520px) {
    min-height: 88rem;
    height: 240vh;
    max-height: 120rem;
    .caseHeroText {
      transform: scale(1);
      top: 16% !important;
      left: 16%;
      a {
        height: 2.8rem;
      }
    }
    .imgContainer {
      transform: scale(1);
      top: 46% !important;
      height: 60vh;
      min-height: 46rem;
      img {
        position: absolute;
        width: 50%;
        left: 50%;
        transform: translate(-50%, 0);
        animation: slideUpAdjusted 1.4s cubic-bezier(0.19, 0.83, 0.35, 1.23) 1s
          forwards;

        &:nth-of-type(2) {
          top: 0 !important;
          width: 100%;
        }
      }
    }

    @keyframes slideUpAdjusted {
      to {
        transform: translate(-50%, 0);
      }
    }
  }

  @media (max-width: 480px) {
    height: 200vh;
    .caseHeroText {
      transform: scale(1);
      left: 12%;
      &::before {
        left: 0;
      }
    }
    .imgContainer {
      top: 46% !important;
      right: 8%;
      min-height: 42rem;
    }
  }
`;

export default CaseHero;
