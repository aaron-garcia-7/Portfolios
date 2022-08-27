// Backed up on 08/12/2022 ... This version wasn't using React Router.

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import styled from "styled-components";
import caseStudyData from "../data/caseStudyData";

import CaseStudy from "../components/CaseStudy";
import SectionTitle from "../components/SectionTitle";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);

  const caseStudies = caseStudyData.map((obj, index) => (
    <CaseStudy
      key={obj.id}
      index={index}
      img={obj.img}
      title={obj.title}
      roles={obj.roles}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  ));

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <StyledWork ref={ref}>
      <Element name="workSection" />
      {inView && <SectionTitle title={"My Work"} />}
      {caseStudies}
    </StyledWork>
  );
};

const StyledWork = styled("section")`
  border: 2px solid red;
  height: 64rem;
  .caseStudy {
    position: absolute;
  }
  .caseStudy1 {
    top: 20%;
    left: 18%;
  }
  .caseStudy2 {
    top: 20%;
    right: 18%;
  }
  .caseStudy3 {
    top: 54%;
    left: 18%;
  }
  .caseStudy4 {
    top: 54%;
    right: 18%;
  }

  @media (max-width: 1440px) {
    .caseStudy {
      position: absolute;
    }
    .caseStudy1 {
      top: 20%;
      left: 18%;
    }
    .caseStudy2 {
      top: 20%;
      right: 18%;
    }
    .caseStudy3 {
      top: 54%;
      left: 18%;
    }
    .caseStudy4 {
      top: 54%;
      right: 18%;
    }
  }

  @media (max-width: 768px) {
    /* height: 220vh; */
  }
`;

export default Work;
