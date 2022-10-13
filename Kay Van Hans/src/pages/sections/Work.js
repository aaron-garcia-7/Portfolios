import React, { useState } from "react";
import styled from "styled-components";
import Project1 from "../../components/Project1";
// import arrow from "../../images/graphics/arrow.svg";

function Work() {
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <ScWork>
      <header className="workTitle">
        <h2>
          My <br /> Work
        </h2>
      </header>
      <Project1 cardOpen={cardOpen} setCardOpen={setCardOpen} />
      <aside className="sideText1">
        <h5>
          Bonnie’s <br />
          Dance <br />
          School
        </h5>
        <p>UX Design + Front-end Development</p>
      </aside>
    </ScWork>
  );
}

const ScWork = styled("section")`
  /* border: 3px dashed red; */
  height: 280vh;
  min-height: 120rem;
  > * {
    position: absolute;
  }
  .workTitle {
    top: 10%;
    right: 12%;
    text-align: right;
    font-size: calc(1.6rem + 1.6vw);
    text-transform: uppercase;
    &::before {
      content: "02";
      font-family: "Raleway", sans-serif;
      font-size: calc(0.7rem + 0.7vw);
      letter-spacing: 0.2rem;
      position: absolute;
      top: 0;
      left: -2vw;
      opacity: 0;
      animation: fade 2s ease 3.6s forwards;
    }
  }
  .sideText1 {
    top: 21%;
    /* right: 36%; */
    /* right: 42rem; */
    right: calc(12rem + 26%);
    text-transform: uppercase;
    h5 {
      font-family: "Raleway", sans-serif;
      font-size: calc(1rem + 1vw);
      font-weight: 300;
      margin-bottom: 2rem;
      letter-spacing: 0.2rem;
    }

    p {
      font-family: "Raleway", sans-serif;
      font-size: calc(0.4rem + 0.4vw);
      font-weight: 400;
    }
  }
`;

export default Work;
