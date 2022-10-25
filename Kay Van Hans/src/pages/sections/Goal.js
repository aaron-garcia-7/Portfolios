import React from "react";
import styled from "styled-components";

function Goal({ id, video, subText, text1, text2, text3 }) {
  return (
    <ScGoal>
      <div className="videoContainer">
        <video src={video} autoPlay loop muted playsInline></video>
        <p>{subText}</p>
      </div>
      <article className="goalText">
        <h2>About + Goal</h2>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>
          <strong>The goal</strong>
          &nbsp;
          {text3}
        </p>
      </article>
    </ScGoal>
  );
}

const ScGoal = styled("section")`
  height: 100vh;
  min-height: 48rem;
  > * {
    position: absolute;
  }
  .videoContainer {
    top: 16%;
    left: 8%;
    /* border: 2px dashed grey; */
    width: 40vw;
    video {
      /* border: 2px solid green; */
      width: 100%;
      margin-bottom: 0.6vw;
    }
    p {
      font-size: calc(0.6rem + 0.6vw);
      font-weight: 300;
      font-style: italic;
    }
  }
  .goalText {
    /* border: 2px solid grey; */
    top: 42%;
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
      font-size: calc(0.6rem + 0.6vw);
      font-weight: 300;
      text-align: left;
      margin-bottom: calc(1rem + 1vw);
    }
  }

  @media (max-width: 1024px) {
    /* border: 4px dashed coral; */
    height: 140vh;
    min-height: 64rem;
    .videoContainer {
      /* border: 2px dashed grey; */
      top: 52%;
      width: 60vw;
      /* left: 8%; */
    }
    .goalText {
      /* border: 2px dashed grey; */
      top: 4%;
      /* right: 12%; */
      right: 8%;
      /* width: calc(28rem + 28vw); */
      width: 56vw;
      &::before {
        transform: scale(0.8);
      }
      h2 {
        letter-spacing: 0rem;
        transform: translate(8%, 0) scale(0.8);
      }
      p {
        font-size: calc(0.7rem + 0.7vw);
      }
    }
  }

  @media (max-width: 768px) {
    .videoContainer {
      top: 56%;
      left: 50%;
      transform: translate(-50%, 0);
      width: 68vw;
    }
    .goalText {
      top: 14%;
      right: 50%;
      transform: translate(50%, 0);
      width: 68vw;
      &::before {
        transform: scale(1);
      }
      h2 {
        transform: translate(0, 0) scale(1);
      }
    }
  }

  @media (max-width: 520px) {
    .videoContainer {
      top: 56%;
      width: 76vw;
    }
    .goalText {
      transform: translate(50%, 0) scale(0.9);
      top: 14%;
      width: 80vw;
      &::before {
        /* transform: scale(0.8); */
      }
      h2 {
        transform: translate(0, 0) scale(1);
      }
    }
  }
`;

export default Goal;
