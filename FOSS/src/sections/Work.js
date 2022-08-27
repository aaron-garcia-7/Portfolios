import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import styled from "styled-components";
import caseStudyData from "../data/caseStudyData";

import CaseStudyCard from "../components/CaseStudyCard";
import SectionTitle from "../components/SectionTitle";

const Work = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const checkWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, [width]);

  const [refWork, inViewWork] = useInView({
    threshold: width > 580 ? 0.5 : 0.3,
    triggerOnce: true,
  });

  const caseStudies = caseStudyData.map((obj) => (
    <NavLink to={`./caseStudies/${obj.url}`} key={obj.id}>
      <CaseStudyCard
        id={obj.id}
        img={obj.img}
        theme={obj.theme}
        title={obj.title}
        roles={obj.roles}
        animTime={obj.animTime}
      />
    </NavLink>
  ));

  return (
    <StyledWork ref={refWork}>
      <Element name="workSection" className="scrollElement" id="workSection" />
      {inViewWork && <SectionTitle title={"My Work"} />}
      {inViewWork && <div className="container">{caseStudies}</div>}
    </StyledWork>
  );
};

const StyledWork = styled("section")`
  border: 1px solid var(--col2); // Toggles a strange bug
  height: auto;
  .scrollElement {
    margin-bottom: 12rem;
  }
  .container {
    margin: 0 auto 4rem auto;
    width: 64vw;
    display: grid;
    grid-template: 1fr 1fr/ 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 1440px) {
  }

  @media (max-width: 1220px) {
    .container {
      gap: 1rem;
    }
  }
  @media (max-width: 768px) {
    .container {
      top: 54%;
      grid-template: 1fr 1fr 1fr 1fr / 1fr;
      gap: 1rem;
    }
  }
  @media (max-width: 480px) {
    .container {
      width: 76vw;
      margin: 0 auto 4rem 8vw;
    }
  }
`;

export default Work;
