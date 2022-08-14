import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";

const Resume = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <StyledResume ref={ref}>
      <Element name="resumeSection" />
      {inView && <SectionTitle title={"Resume"} />}
    </StyledResume>
  );
};

const StyledResume = styled("section")`
  /* border: 2px solid green; */
`;

export default Resume;
