import styled from "styled-components";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <div className="credits">
        <p>Designed &amp; Developed by Aaron Garcia</p>
        <p>made with React in {currentYear}</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled("footer")`
  /* border: 1px solid white; */
  position: relative;
  width: 80vw;
  height: 20vh;
  /* margin: 0 auto 3% auto; */
  margin: auto;
  .credits {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
      font-size: calc(0.6rem + 0.2vw);
      font-weight: 200;
      text-align: center;
    }
  }

  @media (max-width: 1440px) {
    /* height: 3rem; */
  }

  @media (max-width: 480px) {
    bottom: 1.6rem;
  }
`;

export default Footer;
