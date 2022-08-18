import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import portrait from "../images/photos/portrait.jpg";

const About = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const checkWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, [width]);

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [ref2, newView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <StyledAbout ref={ref}>
      <Element name="aboutSection" />
      {inView && <SectionTitle title={"About Me"} mid={true} />}
      <div className="textArea bioDiv">
        {inView && <h4>Bio</h4>}
        {inView && (
          <p>
            <span className="bodyText">
              Hey! I’m Aaron Garcia, a passionate
            </span>{" "}
            <span className="roleText roleText1">ux designer</span>{" "}
            <span className="bodyText">&amp; </span>
            <span className="roleText roleText2">front-end developer</span>{" "}
            <span className="bodyText">
              based out of SLC, UT. I love technology and enjoy building
              user-friendly web applications. Outside of tech, I love spending
              time with my wife, studying Spanish, <br className="hideBr" />{" "}
              &amp; playing the piano.
            </span>
          </p>
        )}
      </div>
      <div className="textArea skillsDiv">
        {inView && <h4>Skills</h4>}
        {inView && (
          <p>
            <span className="bodyText">
              Semantic &amp; a11y HTML <br />
              CSS3, SCSS, Styled Components <br />
              JS(ES6+), React, Redux/toolkit <br />
              GSAP, Framer Motion <br />
              Figma
            </span>
          </p>
        )}
      </div>
      <div className="ref2" ref={ref2} />
      {width > 1220 && inView && (
        <figure>
          <svg className="portraitBorder" viewBox="0 0 54 54" fill="none">
            <circle className="portraitStroke" cx="27" cy="27" r="26" />
          </svg>
          <img src={portrait} alt="Aaron Garcia" className="portrait" />
        </figure>
      )}
      {width <= 1220 && newView && (
        <figure>
          <svg className="portraitBorder" viewBox="0 0 54 54" fill="none">
            <circle className="portraitStroke" cx="27" cy="27" r="26" />
          </svg>
          <img src={portrait} alt="Aaron Garcia" className="portrait" />
        </figure>
      )}
    </StyledAbout>
  );
};

const StyledAbout = styled("section")`
  .textArea {
    /* border: 2px solid grey; */
    position: absolute;
    left: var(--leftBody);
    width: 22rem;
    h4 {
      font-size: calc(0.8rem + 0.2vw);
      font-weight: 500;
      letter-spacing: 0.1vw;
      opacity: 0;
      transform: translate(1rem, 0);
      animation: divTitle 2s ease forwards;
    }
    p {
      font-size: calc(1rem + 0.1vw);
      letter-spacing: 0.04vw;
      .bodyText {
        /* font-weight: 200; */
        opacity: 0;
        /* animation: fade 1.2s ease-in 0.8s forwards; */
        animation: fade 1.2s ease-in forwards;
      }
      .roleText {
        color: var(--col1);
        opacity: 0;
        filter: blur(4px);
        animation: fade 0.8s ease-in forwards;
        &:hover {
          text-decoration: underline;
          cursor: help;
        }
      }
      .roleText1 {
        animation-delay: 0.2s;
      }
      .roleText2 {
        animation-delay: 0.4s;
      }
      .hideBr {
        display: none;
      }
    }
  }
  .bioDiv {
    top: 18rem;
    h4 {
      animation-delay: 1.6s;
    }
    p {
      .bodyText {
        animation-delay: 1s;
      }
    }
  }
  .skillsDiv {
    top: 36rem;
    h4 {
      animation-delay: 2s;
    }
    p {
      .bodyText {
        animation-delay: 1.4s;
      }
    }
  }

  .ref2 {
    position: absolute;
    bottom: 20%;
    padding: 1rem;
  }

  figure {
    position: absolute;
    bottom: 50%;
    right: 20%;
    /* right: 40%; */
    transform: translate(0, 50%);
    width: 28rem;
    height: 28rem;
    /* border: 1px solid grey; */
    border-radius: 50%;
    .portraitBorder {
      /* border: 1px solid white; */
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-90deg);
      width: 34rem;
      opacity: 1;
      padding: 2rem;
      /* animation: dim 0.6s ease-in 2s forwards; */
      .portraitStroke {
        /* stroke: white; */
        /* stroke: grey; */
        stroke: var(--col1);
        stroke-width: 0.2px;
        stroke-dasharray: 350px;
        stroke-dashoffset: 350px;
        animation: drawPortrait 2.4s ease-in forwards;
      }
    }
    .portrait {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      opacity: 0;
      animation: fade 2.4s ease 1s forwards;
    }
  }

  @keyframes divTitle {
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
  @keyframes fade {
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }
  @keyframes drawPortrait {
    to {
      stroke-dashoffset: 0;
    }
  }

  @media (max-width: 1440px) {
    .textArea {
      width: 21rem;
    }
    .bioDiv {
      top: 14rem;
    }
    .skillsDiv {
      top: 30rem;
    }
    figure {
      bottom: 50%;
      right: 20%;
      transform: translate(0, 50%);
      width: 22rem;
      height: 22rem;
      .portraitBorder {
        width: 28rem;
      }
    }
  }

  @media (max-width: 1220px) {
    .textArea {
      width: 34rem;
    }
    .bioDiv {
      top: 13.2rem;
    }
    .skillsDiv {
      top: 26rem;
    }
    figure {
      top: 32rem;
      right: 50%;
      transform: translate(50%, 50%);
      width: 20rem;
      height: 20rem;
      .portraitBorder {
        width: 26rem;
      }
    }
  }

  @media (max-width: 768px) {
    .textArea {
      width: 20rem;
    }
    .bioDiv {
      top: 11rem;
    }
    .skillsDiv {
      top: 26rem;
    }
  }

  @media (max-width: 580px) {
    figure {
      width: 16rem;
      height: 16rem;
      .portraitBorder {
        width: 22rem;
        .portraitStroke {
          stroke-width: 0.4px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .textArea {
      left: var(--leftMobile);
      width: 18rem;
    }
    .skillsDiv {
      top: 26rem;
    }
    figure {
      bottom: 10rem;
    }
  }
`;

export default About;
