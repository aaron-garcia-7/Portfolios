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
        id={id === 1 ? "mainText1" : id === 2 ? "mainText2" : null}
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
          Visit Site
        </a>
      </div>
      <div className="imgContainer">
        <img src={img1} alt={`Desktop display of ${title}`} />
        <img src={img2} alt={`Mobile display of ${title}`} />
      </div>
      <div className="caseHeroBubble" />
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
    top: 32%;
    left: 14%;
    width: 32vw;
    height: 48vh;
    min-height: 26rem;
    transform: scale(1.1);
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
  }
  .imgContainer {
    top: 24%;
    right: 6%;
    width: calc(12rem + 32vw);
    height: 60vh;
    min-height: 32rem;

    img {
      position: absolute;
      bottom: 0;
      width: calc(2rem + 8vw);
      &:nth-of-type(2) {
        right: 0;
        width: calc(12rem + 26vw);
        z-index: -1;
      }
    }
  }

  @media (max-width: 1440px) {
    .caseHeroText {
      transform: scale(1);
    }
  }
  @media (max-width: 1224px) {
    .caseHeroText {
      transform: scale(0.9);
      left: 10%;
      /* top: 24%; */
    }
    .imgContainer {
      transform: scale(0.9);
      right: 4%;
      top: 16%;
    }
  }
  @media (max-width: 1024px) {
    .caseHeroText {
      transform: scale(0.8);
      top: 30%;
      left: 6%;
      width: 42vw;
      &::before {
        transform: scale(0.8);
      }
      a {
        transform: scale(0.8) translate(-14%, 0);
      }
    }
    .imgContainer {
      transform: scale(0.8);
      top: 10% !important;
      right: 0%;
    }
  }

  // MAX HEIGHT
  // Placed above width of 768px for specificity reasons

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
  // Placed above width of 768px for specificity reasons

  @media (max-width: 768px) {
    height: 160vh;
    .caseHeroText {
      /* border: 2px dashed coral; */
      transform: scale(1.1);
      top: 24% !important;
      left: 20%;
      width: 60vw;
      height: 42vh;
      min-height: 20rem;
    }
    .imgContainer {
      transform: scale(1.1);
      top: 58% !important;
      right: 18%;
      height: 20vh;
      min-height: 24rem;
    }
  }
  @media (max-width: 520px) {
    height: 220vh;
    .caseHeroText {
      transform: scale(1);
      top: 18% !important;
      left: 16%;
    }
    .imgContainer {
      transform: scale(1);
      top: 50% !important;
      height: 60vh;
      min-height: 46rem;
      img {
        position: absolute;
        width: 50%;
        left: 50%;
        transform: translate(-50%, 0);
        &:nth-of-type(2) {
          top: 0 !important;
          width: 100%;
        }
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
