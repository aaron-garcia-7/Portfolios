import styled from "styled-components";
// import video from "../images/video.mp4";
import video from "../images/videoComp.mov";

const Hero = () => {
  return (
    <StyledHero>
      <video src={video} className="HeroBg" autoPlay loop muted playsInline />
      <div className="introText">
        <h1>Garcia</h1>
        <h2>UX Des + Web Dev</h2>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled("section")`
  background: #313131;
  .introText {
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
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

  .HeroBg {
    pointer-events: none;
    user-select: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
`;

export default Hero;
