import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Goal({ id, video, subText, emoji, text1, text2, text3 }) {
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
    <ScGoal>
      <div className="videoContainer">
        <video src={video} autoPlay loop muted playsInline></video>
        <p>
          <span>{subText}&nbsp;</span>
          {emoji}
        </p>
      </div>
      <article className="goalText">
        <h2>Goal</h2>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>
          <strong>The goal</strong>
          &nbsp;
          {text3}
        </p>
      </article>
      <div className="goalBubbleDiv" style={parallaxStyle}>
        <div className="goalBubble" />
      </div>
    </ScGoal>
  );
}

const ScGoal = styled("section")`
  /* border: 1px dashed forestgreen; */
  height: calc(18rem + 36vw);

  > * {
    position: absolute;
  }
  .videoContainer {
    top: 20%;
    left: 8%;
    width: 40vw;
    video {
      width: 100%;
      margin-bottom: 0.6vw;
    }
    p {
      font-size: calc(0.6rem + 0.5vw);
      font-weight: 300;
      span {
        font-style: italic;
      }
    }
  }
  .goalText {
    top: 38%;
    right: 8%;
    text-align: right;
    width: calc(16rem + 16vw);
    &::before {
      content: "02";
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
  }

  .goalBubbleDiv {
    top: 4%;
    right: 0;
    overflow: hidden;
    width: calc(16rem + 16vw);
    height: calc(16rem + 16vw);
    pointer-events: none;
    transition: 0.8s cubic-bezier(0.18, 0.79, 0.49, 1);
    opacity: 0.4;
    z-index: -2;
    .goalBubble {
      width: 100%;
      height: 100%;
      transform: translate(20%, 0);
      border-radius: 50%;
      background: var(--bubble);
      transition: 0.4s ease;
    }
  }

  // MAX HEIGHT
  // Placed above width of 768px for specificity reasons

  @media (max-height: 640px) {
    /* border: 1px dashed forestgreen; */
    height: calc(12rem + 34vw);
    .videoContainer {
      transform: scale(0.9);
      top: 16%;
    }
    .goalText {
      transform: scale(0.9);
      top: 34%;
    }
  }

  // MAX HEIGHT
  // Placed above width of 768px for specificity reasons

  @media (max-width: 1224px) {
    .videoContainer {
      transform: scale(0.9);
    }
    .goalText {
      transform: scale(0.9);
    }
  }

  @media (max-width: 1024px) {
    height: calc(24rem + 56vw);
    .videoContainer {
      top: 48%;
      width: 64vw;
      left: 50%;
      transform: translate(-50%, 0);
    }
    .goalText {
      top: 4%;
      /* width: 56vw; */
      width: 36rem;
      &::before {
        transform: scale(0.8);
      }
      h2 {
        letter-spacing: 0rem;
        transform: translate(8%, 0) scale(0.8);
      }
    }
  }

  @media (max-width: 768px) {
    height: calc(28rem + 64vw);
    .goalText {
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
    .videoContainer {
      top: 56%;
      width: calc(4rem + 68vw);
      p {
        font-size: calc(0.6rem + 0.8vw);
      }
    }
    .goalBubbleDiv {
      top: 20%;
    }
  }

  @media (max-width: 520px) {
    /* border: 1px dashed forestgreen; */
    height: calc(32rem + 64vw);
    .goalText {
      top: 2%;
      h2 {
        transform: translate(0, 0) scale(1);
      }
      p {
        font-size: calc(0.8rem + 0.8vw);
      }
    }
    .videoContainer {
      top: 60%;
    }
  }

  @media (max-width: 480px) {
    .goalText {
      &::before {
        left: auto;
        right: 0;
      }
    }
  }
`;

export default Goal;
