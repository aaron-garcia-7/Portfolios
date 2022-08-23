import { useState, useEffect } from "react";
import styled from "styled-components";

const Hero = () => {
  const [offset, setOffset] = useState(0);

  const parallaxScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", parallaxScroll);

    return () => {
      window.removeEventListener("scroll", parallaxScroll);
    };
  }, []);

  const style = {
    transform: `translate(-50%, ${offset * 0.26}px)`,
  };
  return (
    <StyledHero>
      <div className="introText" style={style}>
        <h1>Garcia</h1>
        <h2>UX Des + Web Dev</h2>
      </div>
    </StyledHero>
  );
};

const StyledHero = styled("section")`
  background: transparent;
  width: 100vw;
  height: 100vh;
  min-height: 36rem;
  .introText {
    position: absolute;
    top: 36%;
    left: 50%;
    /* transform: translate(-50%, -50%); */
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

  @media (max-width: 480px) {
    .introText {
      top: 32%;
    }
  }
`;

export default Hero;
