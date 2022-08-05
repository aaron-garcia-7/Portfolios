import { Element } from "react-scroll";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";

const Work = () => {
  return (
    <StyledWork>
      <Element name="workSection" />
      <SectionTitle title={"My Work"} />
    </StyledWork>
  );
};

const StyledWork = styled("section")``;

export default Work;
