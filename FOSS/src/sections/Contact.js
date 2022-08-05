import { Element } from "react-scroll";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <StyledContact>
      <Element name="contactSection" />
      <SectionTitle title={"Contact Me"} />
    </StyledContact>
  );
};

const StyledContact = styled("section")``;

export default Contact;
