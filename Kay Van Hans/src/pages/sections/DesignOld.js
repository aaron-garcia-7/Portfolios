import React from "react";
import styled from "styled-components";

// import palettes from "../../data/paletteData";
import { palette2 } from "../../data/paletteData";

import arrow from "../../images/graphics/arrow.svg";
import arrow2 from "../../images/graphics/arrow2.svg";

function Design({ text1, text2, v1, v2, v3, darkTheme }) {
  return (
    <ScDesign>
      <div className="designText">
        <article>
          <h2>Design</h2>
          <p>{text1}</p>
          <p>{text2}</p>
        </article>
        <div className="palette">
          {palette2.map((obj) => (
            <div className="color" style={{ background: obj.color }} />
          ))}
        </div>
      </div>
      <div className="versionContainer">
        <aside>
          <p>
            Hover over <br /> each image
          </p>
          <img src={!darkTheme ? arrow : arrow2} alt="" />
        </aside>
        <div className="gallery">
          <img src={v1} alt="version 1" />
          <img src={v2} alt="version 2" />
          <img src={v3} alt="version 3" />
        </div>
      </div>
    </ScDesign>
  );
}

const ScDesign = styled("section")`
  /* border: 3px dashed violet; */
  height: 120vh;
  min-height: 48rem;

  > * {
    position: absolute;
  }

  .designText {
    top: 14%;
    left: 8%;
    width: calc(16rem + 16vw);
    &::before {
      content: "03";
      font-family: "Raleway", sans-serif;
      font-size: calc(0.7rem + 0.7vw);
      letter-spacing: 0.2rem;
      position: absolute;
      bottom: 100%;
      right: 100%;
      opacity: 0;
      animation: fade 2s ease 0.2s forwards;
    }
    article {
      margin-bottom: 4vw;
      h2 {
        font-size: calc(2rem + 2vw);
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        margin-bottom: calc(1rem + 2vw);
      }
      p {
        font-size: calc(0.6rem + 0.6vw);
        font-weight: 300;
        text-align: left;
        margin-bottom: calc(1rem + 1vw);
      }
    }
    .palette {
      position: relative;
      /* border: 1px dashed grey; */
      /* width: 100%; */
      /* height: 12rem; */
      /* display: flex; */
      .color {
        position: absolute;
        /* border: 1px solid wheat; */
        width: calc(4rem + 4vw);
        height: calc(4rem + 4vw);
        /* width: 8vw; */
        /* height: 8vw; */
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s ease;
        &:nth-of-type(2) {
          left: 16%;
        }
        &:nth-of-type(3) {
          left: 32%;
        }
        &:nth-of-type(4) {
          left: 48%;
        }
        &:nth-of-type(5) {
          left: 64%;
        }
        &:hover {
          transform: translate(0, 12%);
        }
      }
    }
  }

  .versionContainer {
    /* border: 2px dashed white; */
    top: 28%;
    right: 12%;
    width: 40vw;
    aside {
      /* border: 2px solid black; */
      /* text-align: right; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      margin-bottom: calc(1rem + 1vw);
      p {
        font-size: calc(0.8rem + 0.8vw);
        text-transform: uppercase;
        text-align: right;
        letter-spacing: 0.08rem;
        margin-bottom: calc(0.6rem + 0.6vw);
      }
      img {
        transform: rotate(90deg);
      }
    }
    .gallery {
      /* border: 2px solid black; */
      position: relative;
      width: 100%;
      height: calc(16rem + 8vw);
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: calc(6rem + 24vw);
        transition: 0.4s ease;
        &:nth-of-type(1) {
          /* border: 2px solid red; */
          transform: translate(-70%, -70%);
        }
        &:nth-of-type(2) {
          /* border: 2px solid red; */
          transform: translate(-50%, -50%);
        }
        &:nth-of-type(3) {
          /* border: 2px solid red; */
          transform: translate(-30%, -30%);
        }

        &:hover {
          /* width: 100%; */
          & ~ img {
            opacity: 0;
          }
          &:nth-of-type(1) {
            /* border: 4px dashed red; */
            transform: translate(-70%, -70%) scale(1.2);
          }
          &:nth-of-type(2) {
            /* border: 4px dashed red; */
            transform: translate(-50%, -50%) scale(1.2);
          }
          &:nth-of-type(3) {
            /* border: 4px dashed red; */
            transform: translate(-30%, -30%) scale(1.2);
          }
        }
      }
    }
  }

  @media (max-width: 1440px) {
    .versionContainer {
      right: 8%;
      .gallery {
        img {
          /* width: calc(16rem + 16vw); */
          /* transition: 0.4s ease; */
          &:nth-of-type(1) {
            transform: translate(-70%, -70%);
          }
          &:nth-of-type(2) {
            transform: translate(-50%, -50%);
          }
          &:nth-of-type(3) {
            transform: translate(-30%, -30%);
          }
        }
      }
    }
  }
`;

export default Design;
