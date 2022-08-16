import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import styled from "styled-components";
import ResumeBlock from "../components/ResumeBlock";
import SectionTitle from "../components/SectionTitle";
import resumeData from "../data/resumeData";

const Resume = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const freelanceBlocks = resumeData.map(
    ({ title, date, current, pos1, pos2 }) => (
      <ResumeBlock
        title={title}
        date={date}
        current={current}
        pos1={pos1}
        pos2={pos2}
      />
    )
  );

  return (
    <StyledResume ref={ref}>
      <Element name="resumeSection" className="scrollElement" />
      {inView && <SectionTitle title={"Resume"} />}
      <button className="pdfBtn">Download PDF</button>
      <article className="resume">
        <header>
          <div className="left">
            <h2>Aaron Garcia</h2>
            <h4>User Experience Designer</h4>
            <h4>Client Side Developer</h4>
          </div>
          <div className="right">
            <a href="https://garciathe.dev/" className="contactMethod">
              garciathe.dev
            </a>
            <a href="mailto:aaronegarcia1@gmail.com" className="contactMethod">
              aaronegarcia1@gmail.com
            </a>
            <a href="tel:3852274287" target="_blank" className="contactMethod">
              (385) 227-4287
            </a>
          </div>
        </header>

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

        <div className="freelance">
          <h3 className="segmentTitle">Experience</h3>
          {freelanceBlocks}
        </div>

        <div className="education">
          <h3 className="segmentTitle">Education</h3>
          <div className="left">
            <a
              href="https://www.freecodecamp.org/aaron_garcia_7"
              target="_blank"
              className="studyTool"
            >
              freecodecamp
            </a>
            <a
              href="https://www.codecademy.com/profiles/aaron_garcia_7"
              target="_blank"
              className="studyTool"
            >
              codecademy
            </a>
            <a
              href="https://scrimba.com/learn/learnreact"
              target="_blank"
              className="studyTool"
            >
              scrimba
            </a>
            <a
              href="https://developedbyed.com/courses"
              target="_blank"
              className="studyTool"
            >
              developedbyed
            </a>
            <a
              href="https://stackoverflow.com/users/17918709/aaron-garcia-7"
              target="_blank"
              className="studyTool"
            >
              stackoverflow
            </a>
            <a
              href="https://www.coursera.org/professional-certificates/google-ux-design"
              target="_blank"
              className="studyTool"
            >
              coursera
            </a>
          </div>
        </div>
      </article>
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
    font-size: calc(0.8rem + 0.4vw);
    font-weight: 200;
    letter-spacing: 0.1rem;
    padding: 0.4rem calc(0.2rem + 1vw);
    background: transparent;
    border: 2px solid var(--col1);
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      border: 3px solid transparent;
      background: var(--col1);
      color: var(--col2);
      font-weight: 300;
    }
  }

  .resume {
    width: 64vw;
    border-radius: 2rem;
    padding: 8rem;
    border: 2px solid #ffffff44;
    margin: 0 auto 12rem auto;
    /* background: #19303c; */
    > * {
      margin-bottom: 8rem;
    }
    header {
      display: flex;
      justify-content: space-between;
      .left {
        h2 {
          font-size: calc(2rem + 0.6vw);
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
          &:nth-of-type(3) {
            margin-bottom: 0rem;
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
      margin-bottom: 4rem;
    }

    .skills {
      /* border: 1px dashed grey; */
      /* .segmentTitle {
      } */
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

    .education {
      .left {
        /* border: 1px solid white; */
        display: flex;
        flex-direction: column;
        width: 24%;
        .studyTool {
          /* border: 1px solid wheat; */
          color: var(--col1);
          font-size: calc(0.6rem + 0.4vw);
          font-weight: 400;
          letter-spacing: 0.1rem;
          margin-bottom: 0.6rem;
          /* width: 20%; */
        }
      }
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
      padding: 4rem;
      > * {
        margin-bottom: 6rem;
      }
      header {
        .right {
          padding-top: 1rem;
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
      top: 5.6rem;
    }
    .resume {
      padding: 3.4rem 2.6rem;
      border-width: 1px;
      header {
        flex-direction: column;
        .right {
          padding-top: 2rem;
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
          flex-direction: column;
          .left {
            width: auto;
          }
          .right {
            width: auto;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    .pdfBtn {
      top: 6rem;
      letter-spacing: 0rem;
      padding: 0.4rem calc(0.2rem + 2vw);
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
