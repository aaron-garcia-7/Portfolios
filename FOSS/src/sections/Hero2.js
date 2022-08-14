import styled from "styled-components";
import heroBg from "../images/photos/heroImg.jpg";

const Hero2 = () => {
  return (
    <StyledHero2>
      <img src={heroBg} alt="abstract background" className="heroBg" />
      <div className="introText">
        <h1>Garcia</h1>
        <h2>UX Des + Web Dev</h2>
      </div>
    </StyledHero2>
  );
};

const StyledHero2 = styled("section")`
  /* border: 2px dashed coral; */
  background: #313131;
  .introText {
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      font-size: calc(4rem + 2vw);
      font-weight: 100;
      text-transform: uppercase;
      letter-spacing: 2.8vw;
      transform: translate(3%, 0);
    }
    h2 {
      font-size: calc(0.8rem + 0.6vw);
      font-weight: 200;
      text-align: center;
    }
  }

  .heroBg {
    pointer-events: none;
    user-select: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
  }
`;

export default Hero2;
