import styled from "styled-components";

const CaseStudy = () => {
  return (
    <StyledCaseStudy>
      <main>
        <h2>Business Name Large</h2>
        <h5>Roles</h5>
        <p>Date goes here</p>
      </main>
      <footer>
        <h4>Business Name goes here.</h4>
        <p>This is where your role goes.</p>
      </footer>
    </StyledCaseStudy>
  );
};

const StyledCaseStudy = styled("article")``;

export default CaseStudy;
