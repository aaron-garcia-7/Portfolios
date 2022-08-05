import { Element } from "react-scroll";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <StyledAbout>
      <Element name="aboutSection" />
      <SectionTitle title={"About Me"} />
      <div className="textArea bioDiv">
        <h4>Bio</h4>
        <p>
          My name is Aaron Garcia. I’m a passionate <span>ux designer</span>{" "}
          &amp; <span>front-end developer</span> based out of SLC, UT. I love
          many aspects of technology and enjoy learning new things. Outside of
          tech, I love studying Spanish <br className="hideBr" /> &amp;
          practicing the piano.
        </p>
      </div>
      <div className="textArea skillsDiv">
        <h4>Skills</h4>
        <p>
          Semantic HTML5 <br />
          CSS3, SCSS, Styled Components <br />
          JavaScript, React, Redux/toolkit <br />
          GSAP, Framer Motion <br />
          Figma
        </p>
      </div>
      <figure>
        <img src="" alt="" />
      </figure>
    </StyledAbout>
  );
};

const StyledAbout = styled("section")`
  .textArea {
    /* border: 1px solid #ffffff22; */
    position: absolute;
    left: var(--leftBody);
    width: 28%;
    h4 {
      font-size: calc(0.6rem + 0.4vw);
      font-weight: 500;
      letter-spacing: 0.1vw;
    }
    p {
      font-size: calc(0.8rem + 0.4vw);
      font-weight: 200;
      /* letter-spacing: 0.1vw; */
      span {
        color: var(--col1);
      }
      .hideBr {
        display: none;
      }
    }
  }
  .bioDiv {
    top: 32%;
  }
  .skillsDiv {
    top: 62%;
  }

  /* @media (max-width: 1440px) {
    .textArea {
      p {
        .hideBr {
          display: block;
        }
      }
    }
  } */

  @media (max-width: 1440px) {
    .textArea {
      p {
        .hideBr {
          display: block;
        }
      }
    }
  }
`;

export default About;
