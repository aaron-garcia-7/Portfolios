import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import styled from "styled-components";
import ResumeBlock from "../components/ResumeBlock";
import SectionTitle from "../components/SectionTitle";
import resumeData from "../data/resumeData";

const Resume = () => {
  const [ref1, inView1] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const freelanceBlocks = resumeData.map(
    ({ title, id, date, pos1, pos2, url, delay }, index) => (
      <ResumeBlock
        key={index}
        title={title}
        id={id}
        date={date}
        pos1={pos1}
        pos2={pos2}
        url={url}
        delay={delay}
      />
    )
  );

  return (
    <StyledResume ref={ref1}>
      <Element
        name="resumeSection"
        className="scrollElement"
        id="resumeSection"
      />
      {inView1 && <SectionTitle title={"Resume"} />}
      {inView1 && (
        <button className="pdfBtn" href="./sample.pdf">
          <span className="pdfBtnText">View PDF</span>
        </button>
      )}
      {inView1 && (
        <article className="resume">
          {inView1 && (
            <header>
              <div className="left">
                <h2>Aaron Garcia</h2>
                <h4>User Experience Designer</h4>
                <h4>Client Side Developer</h4>
              </div>
              <div className="right">
                <a
                  href="https://garciathe.dev/"
                  rel="noreferrer"
                  className="contactMethod"
                >
                  garciathe.dev
                </a>
                <a
                  href="mailto:aaronegarcia1@gmail.com"
                  rel="noreferrer"
                  className="contactMethod"
                >
                  aaronegarcia1@gmail.com
                </a>
                <a
                  href="tel:3852274287"
                  target="_blank"
                  rel="noreferrer"
                  className="contactMethod"
                >
                  (385) 227-4287
                </a>
              </div>
            </header>
          )}

          {inView1 && (
            <div className="skills">
              <h3 className="segmentTitle">Skills</h3>
              <div className="content">
                <div className="left">
                  <p>Semantic &amp; Accessible HTML</p>
                  <p>CSS, SCSS, Styled Components</p>
                  <p>JavaScript (ES6+), React.js, Redux/toolkit</p>
                  <p>Framer Motion, React Router, GSAP</p>
                </div>
                <div className="right">
                  <p>Design Strategy</p>
                  <p>Prototyping &amp; Wireframing</p>
                  <p>Interaction, Visual, &amp; Motion Design</p>
                  <p>Figma &amp; Canva</p>
                </div>
              </div>
            </div>
          )}

          <div className="freelance" ref={ref2}>
            {inView1 && <h3 className="segmentTitle title2">Experience</h3>}
            {inView2 && freelanceBlocks}
          </div>

          <div className="education" ref={ref3}>
            {inView3 && <h3 className="segmentTitle title3">Education</h3>}
            {inView3 && (
              <div className="left">
                <a
                  href="https://www.coursera.org/professional-certificates/google-ux-design"
                  target="_blank"
                  rel="noreferrer"
                  className="studyTool"
                >
                  coursera
                </a>
                <a
                  href="https://www.codecademy.com/profiles/aaron_garcia_7"
                  target="_blank"
                  rel="noreferrer"
                  className="studyTool"
                >
                  codecademy
                </a>
                <a
                  href="https://scrimba.com/learn/learnreact"
                  target="_blank"
                  rel="noreferrer"
                  className="studyTool"
                >
                  scrimba
                </a>
                <a
                  href="https://www.freecodecamp.org/aaron_garcia_7"
                  target="_blank"
                  rel="noreferrer"
                  className="studyTool"
                >
                  freecodecamp
                </a>
                <a
                  href="https://developedbyed.com/courses"
                  target="_blank"
                  rel="noreferrer"
                  className="studyTool"
                >
                  developedbyed
                </a>
              </div>
            )}
          </div>
        </article>
      )}
    </StyledResume>
  );
};

const StyledResume = styled("section")`
  border: 1px solid var(--col2); // Toggles a strange bug
  height: auto;

  .scrollElement {
    margin-bottom: 16rem;
  }

  .pdfBtn {
    position: absolute;
    top: 7rem;
    right: 18%;
    padding: 0.4rem calc(0.2rem + 1vw);
    background: transparent;
    border: 2px solid var(--col1);
    border-radius: 2rem;
    opacity: 0;
    cursor: default;
    pointer-events: none;
    transition: all 0.3s ease;
    animation: pdfBtn 1s ease 2.4s forwards;
    .pdfBtnText {
      opacity: 0;
      color: white;
      font-size: calc(0.8rem + 0.4vw);
      font-weight: 300;
      letter-spacing: 0.1rem;
      animation: pdfBtnText 0.6s ease 2.8s forwards;
    }
    &:hover {
      border: 2px solid transparent;
      background: var(--col1);
      .pdfBtnText {
        color: var(--col2);
      }
    }
  }

  .resume {
    position: relative;
    width: 64vw;
    border-radius: 1rem;
    padding: 8rem; // Changed the laptop version
    border: 4px solid #ffffff22;
    margin: 0 auto 12rem auto;
    /* background: #19303c; */
    > * {
      margin-bottom: 6rem;
    }
    header {
      display: flex;
      justify-content: space-between;
      opacity: 0;
      /* transform: translate(0, 4rem); */
      transform: scale(0.94);
      animation: resumeItems 1.6s ease 1.4s forwards;
      .left {
        h2 {
          font-size: calc(1.6rem + 0.6vw);
          font-weight: 200;
          letter-spacing: 0.2rem;
        }
        h4 {
          font-size: calc(0.6rem + 0.4vw);
          font-weight: 200;
          letter-spacing: 0.1rem;
          margin-bottom: 0.6rem;
        }
      }
      .right {
        width: 36%;
        display: flex;
        flex-direction: column;
        padding-top: 1.2rem;
        .contactMethod {
          color: var(--col1);
          font-size: calc(0.8rem + 0.2vw);
          font-weight: 300;
          letter-spacing: 0.1rem;
          margin-bottom: 1rem;
          border-left: 2px solid transparent;
          padding-left: 0.6rem;
          transform: translate(-0.6rem, 0);
          transition: 0.3s ease;
          &:nth-of-type(3) {
            margin-bottom: 0rem;
          }
          &:hover {
            border-left: 2px solid var(--col1);
          }
        }
      }
    }

    .segmentTitle {
      color: #ffffff44;
      font-size: calc(2rem + 1vw);
      font-style: italic;
      font-weight: 100;
      letter-spacing: 0.4rem;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    .skills {
      /* border: 1px dashed grey; */
      /* transform: translate(0, 4rem); */
      opacity: 0;
      transform: scale(0.94);
      animation: resumeItems 1.6s ease 1.8s forwards;
      .content {
        display: flex;
        justify-content: space-between;
        .left,
        .right {
          p {
            font-size: calc(0.8rem + 0.2vw);
            font-weight: 200;
            letter-spacing: 0.1rem;
            margin-bottom: 0.2rem;
          }
        }
        .right {
          width: 36%;
        }
      }
    }

    .freelance {
      transform: translate(0, 3.2rem);
      .title2 {
        opacity: 0;
        transform: scale(0.94);
        animation: resumeItems 1.6s ease 2s forwards;
      }
    }

    .education {
      padding-top: 4rem;
      .title3 {
        opacity: 0;
        transform: scale(0.94);
        animation: resumeItems 1.6s ease 0.6s forwards;
      }
      .left {
        display: flex;
        flex-direction: column;
        width: 24%;
        opacity: 0;
        /* transform: translate(0, 4rem); */
        transform: scale(0.94) translate(-0.6rem, 0);
        animation: resumeItemEducation 1.6s ease 1.4s forwards;
        .studyTool {
          /* border: 1px solid wheat; */
          color: var(--col1);
          font-size: calc(0.6rem + 0.4vw);
          font-weight: 400;
          letter-spacing: 0.1rem;
          margin-bottom: 0.6rem;
          padding-left: 0.6rem;
          border-left: 2px solid transparent;
          opacity: 0;
          transform: translate(10%, 0);
          transition: 0.3s ease;
          animation: slide 1s ease forwards;
          &:hover {
            border-left: 2px solid var(--col1);
          }
          &:nth-child(1) {
            animation-delay: 1.4s;
          }
          &:nth-child(2) {
            animation-delay: 1.6s;
          }
          &:nth-child(3) {
            animation-delay: 1.8s;
          }
          &:nth-child(4) {
            animation-delay: 2s;
          }
          &:nth-child(5) {
            animation-delay: 2.2s;
          }
        }
      }
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      bottom: -2rem;
      padding: 2rem 0;
      width: 56%;
      height: 100%;
      background: var(--col2);
      /* background: red; */
      animation: resumeReveal 2s linear 0.8s forwards;
    }
    &::before {
      left: -1rem;
    }
    &::after {
      right: -1rem;
    }
  }

  @keyframes pdfBtn {
    to {
      opacity: 1;
      cursor: pointer;
      pointer-events: all;
    }
  }
  @keyframes pdfBtnText {
    to {
      opacity: 1;
    }
  }
  @keyframes resumeReveal {
    0% {
      width: 56%;
      height: 100%;
    }
    32% {
      width: 4%;
      height: 100%;
    }
    100% {
      width: 0%;
      height: 0%;
    }
  }
  @keyframes resumeItems {
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes resumeItemEducation {
    100% {
      transform: scale(1) translate(-0.6rem, 0);
      opacity: 1;
    }
  }
  @keyframes slide {
    100% {
      transform: scale(1) translate(0, 0);
      opacity: 1;
    }
  }

  @media (max-width: 1440px) {
    .scrollElement {
      margin-bottom: 14rem;
    }

    .pdfBtn {
      top: 7.2rem;
    }

    .resume {
      padding: 6rem;
      > * {
        margin-bottom: 6rem;
      }
      header {
        .right {
          padding-top: 0.6rem;
          width: 40%;
          .contactMethod {
            margin-bottom: 0.9rem;
          }
        }
      }

      .segmentTitle {
        margin-bottom: 2rem;
      }

      .skills {
        .content {
          .right {
            width: 40%;
          }
        }
      }
    }
  }
  @media (max-width: 1220px) {
    .resume {
      padding: 3.2rem 2.4rem;

      header {
        .left {
          h2 {
            font-size: calc(1.6rem + 0.6vw);
          }
          h4 {
            font-size: calc(0.7rem + 0.4vw);
          }
        }
        .right {
          padding-top: 0.6rem;
          .contactMethod {
            font-size: calc(0.7rem + 0.2vw);
            margin-bottom: 0.6rem;
          }
        }
      }

      .segmentTitle {
        font-size: calc(1.2rem + 1vw);
      }

      .skills {
        .content {
          .left {
            width: 52%;
          }
          .right {
            width: 40%;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .scrollElement {
      margin-bottom: 12rem;
    }
    .pdfBtn {
      top: 6rem;
      padding: 0.2rem calc(0.6rem + 1vw);
    }
    .resume {
      padding: 3.4rem 2.6rem;
      border-width: 3px;
      > * {
        margin-bottom: 3.2rem;
      }
      header {
        flex-direction: column;
        .right {
          padding-top: 2rem;
          width: 80%;
          .contactMethod {
            font-size: calc(0.7rem + 0.2vw);
            margin-bottom: 0.2rem;
          }
        }
      }

      .segmentTitle {
        font-size: calc(1.2rem + 1vw);
        margin-bottom: 1rem;
      }

      .skills {
        .content {
          flex-direction: column;
          .left {
            width: auto;
            p {
              font-size: calc(0.7rem + 0.2vw);
              letter-spacing: 0.06rem;
            }
          }
          .right {
            width: auto;
            p {
              font-size: calc(0.6rem + 0.4vw);
              letter-spacing: 0.06rem;
            }
          }
        }
      }
      &::before {
        left: -0.4rem;
      }
      &::after {
        right: -0.4rem;
      }
    }
  }

  @media (max-width: 480px) {
    .pdfBtn {
      top: 6.2rem;
      letter-spacing: 0rem;
      padding: 0.2rem calc(0.4rem + 2vw);
      border-width: 1px;
    }
    .resume {
      width: 76vw;
      margin: 0 auto 4rem 8vw;
      padding: 2.4rem 1.8rem;
      header {
        .left {
          h2 {
            font-size: calc(1.4rem + 0.6vw);
            margin-bottom: 1rem;
          }
          h4 {
            margin-bottom: 0;
          }
        }
        .right {
          /* padding-top: 2rem; */
          .contactMethod {
            /* font-size: calc(0.7rem + 0.2vw); */
            /* margin-bottom: 0.6rem; */
          }
        }
      }

      .segmentTitle {
        /* font-size: calc(1.2rem + 1.2vw); */
      }

      .skills {
        .content {
          /* flex-direction: column; */
          .left {
            /* width: auto; */
          }
          .right {
            /* width: auto; */
          }
        }
      }
    }
  }
`;

export default Resume;
