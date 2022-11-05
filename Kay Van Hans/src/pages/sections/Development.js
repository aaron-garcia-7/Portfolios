import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import arrow from "../../images/graphics/arrow.svg";
import arrow2 from "../../images/graphics/arrow2.svg";

function Development({
  title,
  mockup,
  text1,
  text2,
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
  const parallaxStyle = {
    transform: `translate(0, ${offset * 0.08}px)`,
  };
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
  return (
    <ScDevelopment>
      <div className="mockup">
        <aside>
          <p>Mockup</p>
          <img src={!darkTheme ? arrow : arrow2} alt="" />
        </aside>
        <figure
          ref={ref}
          onClick={() => {
            setShowModule(true);
            setModuleImg(mockup);
            setModuleName("mockup");
          }}
        >
          <img src={mockup} alt={`Mockup for ${title}`} />
          <figcaption
            style={parallaxStyleTap}
            onClick={() => {
              setShowModule(true);
              setModuleImg(mockup);
              setModuleName("mockup");
            }}
          >
            <p style={tapTextStyle}>Expand</p>
          </figcaption>
        </figure>
      </div>
      <article className="developmentText">
        <h2>Development</h2>
        <p>{text1}</p>
        <p>
          {text2}
          <a
            href="https://github.com/aaron-garcia-7"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          . Thanks for stopping by!
        </p>
      </article>
      <div className="developmentBubbleDiv" style={parallaxStyle}>
        <div className="developmentBubble" />
      </div>
    </ScDevelopment>
  );
}

const ScDevelopment = styled("section")`
  height: calc(18rem + 36vw);

  > * {
    position: absolute;
  }
  .mockup {
    top: 8%;
    left: 8%;
    width: calc(2rem + 36vw);
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    aside {
      margin-bottom: calc(1rem + 1vw);
      p {
        font-size: calc(0.8rem + 0.8vw);
        text-transform: uppercase;
        letter-spacing: 0.08rem;
        margin-bottom: calc(0.6rem + 0.6vw);
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
        bottom: -17vw;
        right: -3.2vw;
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
  .developmentText {
    top: 46%;
    right: 8%;
    text-align: right;
    width: calc(16rem + 16vw);
    &::before {
      content: "04";
      font-family: "Raleway", sans-serif;
      font-size: calc(0.7rem + 0.7vw);
      letter-spacing: 0.2rem;
      position: absolute;
      bottom: 100%;
      left: 100%;
      opacity: 0;
      animation: fade 2s ease 0.2s forwards;
    }
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
    a {
      text-decoration: underline;
      font-weight: 500;
    }
  }

  .developmentBubbleDiv {
    top: -46%;
    left: 0%;
    overflow: hidden;
    width: calc(16rem + 16vw);
    height: calc(16rem + 16vw);
    pointer-events: none;
    transition: 0.8s cubic-bezier(0.18, 0.79, 0.49, 1);
    opacity: 0.4;
    z-index: -2;
    .developmentBubble {
      width: 100%;
      height: 100%;
      transform: translate(-36%, 0);
      border-radius: 50%;
      background: var(--bubble);
      transition: 0.4s ease;
    }
  }

  // MAX HEIGHT
  // Placed above width of 768px for specificity reasons

  @media (max-height: 640px) {
    height: calc(12rem + 34vw);
    .developmentText {
      transform: scale(0.9);
      top: 46%;
    }
    .mockup {
      transform: scale(0.9);
      top: 10%;
    }
  }

  // MAX HEIGHT
  // Placed above width of 768px for specificity reasons

  @media (max-width: 1224px) {
    .mockup {
      transform: scale(0.9);
      top: 2%;
    }
    .developmentText {
      transform: scale(0.9);
    }
  }

  @media (max-width: 1024px) {
    height: calc(36rem + 56vw);
    .developmentText {
      top: 6%;
      right: 8%;
      width: 56vw;
      &::before {
        transform: scale(0.8);
      }
      h2 {
        letter-spacing: 0rem;
        transform: translate(8%, 0) scale(0.8);
      }
    }
    .mockup {
      top: 40%;
      left: 50%;
      transform: translate(-50%, 0);
      width: 64vw;
      figure {
        height: 41.4vw;
        figcaption {
          bottom: -14vw;
          right: -7vw;
          width: calc(4.6rem + 4.6vw);
          height: calc(4.6rem + 4.6vw);
          p {
            font-size: calc(0.6rem + 0.6vw);
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .developmentText {
      top: 14%;
      right: 50%;
      transform: translate(50%, 0);
      width: calc(4rem + 68vw);
      &::before {
        transform: scale(1);
      }
      h2 {
        transform: translate(0, 0) scale(1);
      }
    }
    .mockup {
      top: 48%;
      width: calc(4rem + 68vw);
      figure {
        height: 48vw;
        figcaption {
          bottom: -30vw;
        }
      }
    }
  }

  @media (max-width: 520px) {
    height: calc(36rem + 64vw);
    .developmentText {
      top: 10%;
      p {
        font-size: calc(0.8rem + 0.8vw);
      }
    }
    .mockup {
      top: 52%;
      width: calc(4rem + 68vw);
      figure {
        height: 52vw;
        figcaption {
          bottom: -76vw;
          transition: 0s;
        }
      }
    }
    .developmentBubbleDiv {
      transition: 0s;
    }
  }

  @media (max-width: 480px) {
    .developmentText {
      &::before {
        left: auto;
        right: 0;
      }
    }
    .mockup {
      figure {
        figcaption {
          right: -4vw;
          bottom: -90vw;
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

export default Development;
