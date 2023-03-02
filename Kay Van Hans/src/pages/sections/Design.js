import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import palettes from "../../data/paletteData";

import arrow from "../../images/graphics/arrow.svg";
import arrow2 from "../../images/graphics/arrow2.svg";

function Design({
  id,
  title,
  text1,
  text2,
  wireframe,
  setShowModule,
  setModuleImg,
  setModuleName,
  darkTheme,
}) {
  const [ref, inView] = useInView({
    threshold: 0.7,
    triggerOnce: false,
  });
  // Parallax Effect
  const [offset, setOffset] = useState(0);
  const parallaxScroll = () => {
    setOffset(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", parallaxScroll);
    return () => window.removeEventListener("scroll", parallaxScroll);
  }, [offset]);

  const parallaxStyleTap = {
    transform: `translate(0, ${offset * -0.1}px)`,
  };
  // End Parallax
  const tapTextStyle = {
    transform: inView ? `scale(1)` : `scale(0)`,
    transition: inView
      ? "1.2s cubic-bezier(0.1, 0.75, 0.35, 1.22)"
      : "1.2s cubic-bezier(.39,-0.27,.56,.55)",
  };

  const [copy, setCopy] = useState(false);

  const handleCopy = (item) => {
    navigator.clipboard.writeText(item);
    setCopy(true);
  };

  useEffect(() => {
    const copyTimeOut = window.setTimeout(() => {
      setCopy(false);
    }, 1000);

    return () => clearTimeout(copyTimeOut);
  }, [copy]);

  return (
    <ScDesign>
      <div className="designText">
        <article>
          <h2>Design</h2>
          <p>{text1}</p>
          <p>{text2}</p>
        </article>
        <div className="palette">
          {palettes[id - 1].map((item, index) => (
            <div
              key={index}
              className="colorBlock"
              onClick={() => handleCopy(item)}
            >
              <div
                className="color"
                style={{ background: item }}
                // onClick={() => navigator.clipboard.writeText(item)}
              />
              <p className="textbox">
                {item} <br />
                <span className={copy ? "show" : ""}>copied!</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="wireframe">
        <aside>
          <p>Wireframe</p>
          <img src={!darkTheme ? arrow : arrow2} alt="" />
        </aside>
        <figure
          ref={ref}
          onClick={() => {
            setShowModule(true);
            setModuleImg(wireframe);
            setModuleName("concept");
          }}
        >
          <img src={wireframe} alt={`Wireframe for ${title}`} />
          <figcaption
            style={parallaxStyleTap}
            onClick={() => {
              setShowModule(true);
              setModuleImg(wireframe);
              setModuleName("concept");
            }}
          >
            <p style={tapTextStyle}>Expand</p>
          </figcaption>
        </figure>
      </div>
    </ScDesign>
  );
}

const ScDesign = styled("section")`
  height: calc(18rem + 36vw);

  > * {
    position: absolute;
  }

  .designText {
    top: 10%;
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
        font-size: calc(0.6rem + 0.8vw);
        font-weight: 300;
        text-align: left;
        margin-bottom: calc(1rem + 1vw);
      }
    }
    .palette {
      position: relative;
      .colorBlock {
        position: absolute;
        &:nth-of-type(2) {
          left: 10%;
        }
        &:nth-of-type(3) {
          left: 20%;
        }
        &:nth-of-type(4) {
          left: 30%;
        }
        &:nth-of-type(5) {
          left: 40%;
        }
        .color {
          margin-bottom: 1rem;
          width: calc(2.4rem + 2.4vw);
          height: calc(2.4rem + 2.4vw);
          border-radius: 50%;
          cursor: pointer;
          transition: 0.3s ease;
        }
        .textbox {
          opacity: 0;
          transition: 0.4s ease;
          span {
            /* font-size: calc(0.4rem + 0.4vw); */
            text-transform: uppercase;
            opacity: 0;
          }
          .show {
            opacity: 1;
          }
        }
        &:hover {
          .color {
            transform: translate(0, 12%);
          }
          .textbox {
            opacity: 1;
          }
        }
      }
    }
  }

  .wireframe {
    top: 28%;
    right: 8%;
    width: calc(2rem + 36vw);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 2rem;
    aside {
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
    figure {
      height: 24.4vw;
      width: 100%;
      overflow: hidden;
      cursor: pointer;
      img {
        width: 100%;
      }
      figcaption {
        position: absolute;
        bottom: 11vw;
        left: -3.2vw;
        width: calc(3.6rem + 3.6vw);
        height: calc(3.6rem + 3.6vw);
        transition: 0.8s cubic-bezier(0.18, 0.79, 0.49, 1);
        z-index: 5;
        p {
          background: var(--red);
          color: var(--light);
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: calc(0.4rem + 0.6vw);
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.08rem;
        }
      }
    }
  }

  @media (max-width: 1440px) {
    .wireframe {
      right: 6%;
    }
  }

  // MAX HEIGHT
  // Placed above width of 768px for specificity reasons

  @media (max-height: 640px) {
    height: calc(12rem + 34vw);
    .designText {
      transform: scale(0.9);
      top: 12%;
    }
    .wireframe {
      transform: scale(0.9);
      top: 26%;
    }
  }

  // MAX HEIGHT
  // Placed above width of 768px for specificity reasons

  @media (max-width: 1224px) {
    .wireframe {
      transform: scale(0.9);
    }
    .designText {
      transform: scale(0.9);
    }
  }

  @media (max-width: 1024px) {
    height: calc(36rem + 56vw);
    .designText {
      width: 56vw;
      &::before {
        transform: scale(0.8);
      }
      article {
        margin-bottom: 6vw;
        h2 {
          transform: translate(-11%, 0) scale(0.8);
          letter-spacing: 0;
          margin-bottom: calc(1rem + 1vw);
        }
        p {
          font-size: calc(0.7rem + 0.7vw);
        }
      }
      .palette {
        .colorBlock {
          &:nth-of-type(2) {
            left: 8%;
          }
          &:nth-of-type(3) {
            left: 16%;
          }
          &:nth-of-type(4) {
            left: 24%;
          }
          &:nth-of-type(5) {
            left: 32%;
          }
        }
      }
    }
    .wireframe {
      top: 46%;
      right: 50%;
      transform: translate(50%, 0);
      width: 64vw;
      figure {
        height: 41.4vw;
        figcaption {
          bottom: -4vw;
          left: -7vw;
          width: calc(4.6rem + 4.6vw);
          height: calc(4.6rem + 4.6vw);
        }
      }
    }
  }

  @media (max-width: 768px) {
    .designText {
      top: 12%;
      left: 50%;
      transform: translate(-50%, 0);
      width: calc(4rem + 68vw);
      &::before {
        transform: scale(1);
      }
      article {
        margin-bottom: 8vw;
        h2 {
          transform: translate(0, 0) scale(1);
        }
      }
    }
    .wireframe {
      top: 50%;
      width: calc(4rem + 68vw);
      figure {
        height: 48vw;
        figcaption {
          bottom: -16vw;
        }
      }
    }
  }

  @media (max-width: 520px) {
    height: calc(36rem + 64vw);
    .designText {
      top: 10%;
      width: 78vw;
      article {
        margin-bottom: 8vw;
        h2 {
          transform: translate(0, 0) scale(1);
        }
        p {
          font-size: calc(0.8rem + 0.8vw);
        }
      }
    }
    .wireframe {
      top: 56%;
      width: 76vw;
      figure {
        figcaption {
          bottom: -56vw;
          transition: 0s;
        }
      }
    }
  }

  @media (max-width: 480px) {
    height: calc(42rem + 64vw);
    .designText {
      &::before {
        left: 0;
      }
    }
    .wireframe {
      top: 60%;
      figure {
        figcaption {
          bottom: -72vw;
          left: -4vw;
          width: calc(4rem + 4vw);
          height: calc(4rem + 4vw);
          p {
            font-size: calc(0.6rem + 0.6vw);
          }
        }
      }
    }
  }
`;

export default Design;
