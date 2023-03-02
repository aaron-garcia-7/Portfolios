import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import arrow from "../../images/graphics/arrow.svg";
import arrow2 from "../../images/graphics/arrow2.svg";

function Contact({ darkTheme, inHome }) {
  let currentYear = new Date().getFullYear();
  // Parallax Effect
  const [offset, setOffset] = useState(0);
  const parallaxScroll = () => {
    setOffset(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", parallaxScroll);
    return () => window.removeEventListener("scroll", parallaxScroll);
  }, [offset]);
  const parallaxStyle = {
    transform: `translate(0, ${offset * 0.08}px)`,
  };
  const parallaxStyleSend = {
    transform: `translate(0, ${offset * -0.1}px)`,
  };
  // End Parallax

  const subHeader = {
    color: darkTheme ? "var(--red)" : "var(--blue)",
  };

  return (
    <ScContact id="contact">
      <header
        className={inHome ? "contactTitle" : "contactTitle contactTitleAlt"}
      >
        <h2>Get In Touch</h2>
        <img src={!darkTheme ? arrow : arrow2} alt="" />
      </header>
      <form name="contact" method="post" action="/contact">
        <input type="hidden" name="form-name" value="contact" />
        <div className="formField">
          <input
            type="text"
            name="name"
            placeholder=" "
            required
            className="input"
          />
          <label htmlFor="name" className="label">
            Name
          </label>
        </div>
        <div className="formField">
          <input
            type="email"
            name="email"
            placeholder=" "
            required
            className="input"
          />
          <label htmlFor="email" className="label">
            Email
          </label>
        </div>
        <div className="formField">
          <textarea
            name="message"
            id=""
            cols="30"
            rows="6"
            placeholder=" "
            required
            className="textArea"
          ></textarea>
          <label htmlFor="message" className="label">
            Message
          </label>
        </div>
        <div
          className={inHome ? "submitDiv" : "submitDiv altSubmit"}
          style={parallaxStyleSend}
        >
          <div className="planeDiv">
            <FontAwesomeIcon icon={faPaperPlane} className="faIcon" />
          </div>
          <button type="submit">Send</button>
        </div>
      </form>
      <aside className="altLinks">
        <h4 style={subHeader}>
          Let’s build your <br />
          dream projects!
        </h4>
        <div className="linkBlock">
          <h5>Email</h5>
          <a href="mailto:aaronegarcia1@gmail.com" className="contactLink">
            <div>
              <p className="text emailText">aaronegarcia1[at]gmail.com</p>
            </div>
          </a>
        </div>
        <div className="linkBlock">
          <h5>Socials</h5>
          <a
            href="https://www.linkedin.com/in/aaron-garcia-3b7081211/"
            target="_blank"
            rel="noreferrer"
            className="contactLink"
          >
            <div>
              <p className="text linkedInText">LinkedIn</p>
            </div>
          </a>
          <a
            href="https://github.com/aaron-garcia-7"
            target="_blank"
            rel="noreferrer"
            className="contactLink"
          >
            <div>
              <p className="text githubText">Github</p>
            </div>
          </a>
          <a
            href="https://twitter.com/aaron_garcia_7"
            target="_blank"
            rel="noreferrer"
            className="contactLink"
          >
            <div>
              <p className="text twitterText">Twitter</p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/aaron_garcia_creative/"
            target="_blank"
            rel="noreferrer"
            className="contactLink"
          >
            <div>
              <p className="text instagramText">Instagram</p>
            </div>
          </a>
        </div>
      </aside>
      <footer>
        <h2>&copy;{currentYear} &nbsp; Made By Me, Aaron Garcia</h2>
      </footer>
      <div className="contactBubbleDiv" style={parallaxStyle}>
        <div className="contactBubble" />
      </div>
    </ScContact>
  );
}

const ScContact = styled("section")`
  height: 120vh;
  min-height: 64rem;
  > * {
    position: absolute;
  }
  .contactTitle {
    top: 16%;
    left: 12%;
    font-size: calc(1.6rem + 1.6vw);
    text-transform: uppercase;
    &::before {
      content: "04";
      font-family: "Raleway", sans-serif;
      font-size: calc(0.7rem + 0.7vw);
      letter-spacing: 0.2rem;
      position: absolute;
      top: -1vw;
      left: -2vw;
      opacity: 0;
      animation: fade 2s ease 0.2s forwards;
    }
  }
  .contactTitleAlt {
    &::before {
      content: "05";
    }
  }
  form {
    width: calc(16rem + 16vw);
    top: 32%;
    left: 12%;
    display: flex;
    flex-direction: column;
    .formField {
      position: relative;
      height: calc(2rem + 1vw);
      margin-top: 3.2rem;
      padding-bottom: 0.6rem;
      border-bottom: var(--smartBorder);
      input,
      textArea {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: calc(0.7rem + 0.7vw);
        font-weight: 300;
        letter-spacing: 0.08rem;
        background: none;
        border: none;
        resize: none;
        &:autofill {
          background: none; // Not working
        }
        &:-webkit-autofill {
          background: none; // Not working
        }
      }
      // Message Field
      &:nth-of-type(3) {
        height: calc(8rem + 4vw);
      }
      label {
        position: absolute;
        pointer-events: none;
        font-size: calc(0.8rem + 0.8vw);
        width: 100%;
        height: 100%;
        padding-bottom: 0.6rem;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        font-size: calc(0.8rem + 0.8vw);
        font-weight: 300;
        letter-spacing: 0.08rem;
        text-transform: uppercase;
        transition: 0.4s ease;
      }
      input:focus ~ label,
      textArea:focus ~ label {
        transform: translate(0, -100%);
        font-size: calc(0.5rem + 0.5vw);
        opacity: 0.7;
      }
      .input:not(:placeholder-shown).input:not(focus) ~ .label,
      .textArea:not(:placeholder-shown).textArea:not(focus) ~ .label {
        transform: translate(0, -100%);
        font-size: calc(0.5rem + 0.5vw);
        opacity: 0.7;
      }
    }

    .submitDiv {
      position: absolute;
      top: 200%; // Four Projects
      /* top: 186%; */
      right: -22%;
      width: calc(4.8rem + 4vw);
      height: calc(4.8rem + 4vw);
      border-radius: 50%;
      transition: 0.8s cubic-bezier(0.18, 0.79, 0.49, 1);
      button {
        position: absolute;
        background: var(--red);
        width: calc(4rem + 4.8vw);
        height: calc(4rem + 4.8vw);
        border-radius: 50%;
        color: var(--light);
        font-size: calc(0.8rem + 0.8vw);
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 0.08rem;
        transition: transform 0.6s cubic-bezier(0.53, -0.48, 0.48, 1.4);
        &:hover,
        &:focus {
          transform: scale(0.8);
        }
      }
      .planeDiv {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        transform: rotate(-10deg);
        .faIcon {
          opacity: 0;
          transition: 0.3s ease;
        }
      }
      &:hover,
      &:focus {
        button {
          transform: scale(0.8);
        }
        .planeDiv {
          animation: flight 6s ease infinite;
          .faIcon {
            opacity: 1;
          }
        }
      }
    }
    .altSubmit {
      top: 170%;
    }
  }
  .altLinks {
    top: 24%;
    right: 18%;
    > * {
      font-family: "Raleway", sans-serif;
    }
    h4 {
      font-size: calc(1.2rem + 1.2vw);
      font-weight: 500;
      letter-spacing: 0.06rem;
      margin-bottom: calc(2.6rem + 2.6vw);
    }
    .linkBlock {
      display: flex;
      flex-direction: column;
      margin-bottom: calc(2rem + 2vw);
      > * {
        letter-spacing: 0.08rem;
      }
      h5 {
        font-size: calc(0.6rem + 0.6vw);
        text-transform: uppercase;
        font-weight: 400;
        margin-bottom: calc(0.5rem + 0.5vw);
      }
      .contactLink {
        margin: 0.2vw 0;
        font-size: calc(0.6rem + 0.8vw);
        font-weight: 300;
        overflow: hidden;
        div {
          transform: translate(0, 0);
          transition: transform 0.6s cubic-bezier(0.53, -0.48, 0.48, 1.4);
          .text {
            position: relative;
            transition: opacity 0.4s ease;
            cursor: pointer;
            &::after {
              position: absolute;
              top: 100%;
              left: 0;
            }
          }
          .emailText {
            &::after {
              content: "aaronegarcia1[at]gmail.com";
            }
          }
          .linkedInText {
            &::after {
              content: "LinkedIn";
            }
          }
          .githubText {
            &::after {
              content: "Github";
            }
          }
          .twitterText {
            &::after {
              content: "Twitter";
            }
          }
          .instagramText {
            &::after {
              content: "Instagram";
            }
          }
        }
        &:hover {
          div {
            transform: translate(0, -100%);
            .text {
              opacity: 0.6;
              transition: opacity 0.4s ease 0.5s;
            }
          }
        }
      }
      &:nth-of-type(2) {
        .contactLink {
          width: 50%;
        }
      }
    }
  }
  footer {
    bottom: 4%;
    left: 12%;
    h2 {
      font-size: calc(0.8rem + 2vw);
      font-weight: 400;
      text-transform: uppercase;
    }
  }
  .contactBubbleDiv {
    top: -42%;
    right: 0;
    overflow: hidden;
    width: calc(16rem + 16vw);
    height: calc(16rem + 16vw);
    pointer-events: none;
    transition: 0.8s cubic-bezier(0.18, 0.79, 0.49, 1);
    opacity: 0.4;
    z-index: -2;
    .contactBubble {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transform: translate(16%, 0);
      background: var(--bubble);
    }
  }

  @keyframes flight {
    0% {
      opacity: 0;
      transform: rotate(-10deg);
    }
    20% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 0;
      transform: rotate(130deg);
    }
  }

  @media (max-width: 1440px) {
    form {
      .submitDiv {
        top: 192%; // Four Projects
        /* top: 180%; */
        right: -16%;
      }
      .altSubmit {
        top: 162%;
      }
    }
    .altLinks {
      right: 12%;
    }
  }

  // Max Height
  @media (max-height: 640px) {
    .contactTitle {
      top: 16%;
      left: 12%;
      transform: scale(0.9);
      &::before {
        top: -1.6vw;
        left: -2.4vw;
      }
    }
    form {
      transform: scale(0.9);
      top: 28%;
      left: 12%;
      .submitDiv {
        top: 190%; // Four Projects
        /* top: 176%; */
        right: -16%;
      }
      .altSubmit {
        top: 150%;
      }
    }
    .altLinks {
      top: 22%;
      right: 12%;
      transform: scale(0.9);
    }
    footer {
      bottom: 6%;
      left: 13%;
    }
  }
  // Max Height

  @media (max-width: 1024px) {
    height: 104vh;
    min-height: 48rem;
    .contactTitle {
      top: 10%;
      left: 8% !important;
      transform: scale(0.9);
      &::before {
        top: -1.6vw;
        left: -2.4vw;
      }
    }
    form {
      transform: scale(0.9);
      top: 24%;
      left: 8% !important;
      .submitDiv {
        top: 190%; // Four Projecs
        /* top: 178%; */
        right: -16%;
      }
      .altSubmit {
        top: 182%;
      }
    }
    .altLinks {
      top: 16%;
      right: 10% !important;
      transform: scale(0.9);
    }
    footer {
      bottom: 6%;
      left: 10% !important;
    }
  }

  @media (max-width: 768px) {
    height: 148vh;
    min-height: 68rem;
    .contactTitle {
      top: 6%;
      &::before {
        top: -2vw;
        left: -3vw;
      }
      h2 {
        margin-bottom: 2vw;
      }
    }
    form {
      width: 68%;
      top: 14%;
      .formField {
        &:nth-of-type(3) {
          height: calc(6rem + 4vw);
        }
      }
      .submitDiv {
        top: 216%; // Four Projects
        /* top: 204%; */
        right: -10%;
      }
      .altSubmit {
        top: 194%;
      }
    }
    .altLinks {
      top: 54%;
      right: auto !important;
      left: 12%;
      transform: scale(1);
    }
    footer {
      bottom: 4%;
      left: 8% !important;
    }
  }

  @media (max-width: 520px) {
    .contactTitle {
      left: 12%;
      &::before {
        top: -4vw;
        left: -4vw;
      }
    }
    form {
      width: 80%;
      .submitDiv {
        top: 224%; // Four Projects
        /* top: 206%; */
        transition: 0s;
      }
      .altSubmit {
        top: 210%;
      }
    }
    .altLinks {
      .linkBlock {
        .contactLink {
          div {
            .text {
              font-weight: 400;
            }
          }
        }
      }
    }
    footer {
      bottom: 6%;
      left: 2% !important;
      transform: scale(0.8);
    }
    .contactBubbleDiv {
      transition: 0s;
    }
  }

  @media (max-width: 480px) {
    .contactTitle {
      &::before {
        top: -6vw;
        left: 0;
      }
    }
    form {
      width: 80%;
      .submitDiv {
        top: 212%; // Remove when Iconic is added
        .planeDiv {
          /* border: 1px solid blue; */
          top: -16%;
          left: -16%;
          width: 120%;
          height: 120%;
          animation: flight 6s ease infinite;
          .faIcon {
            opacity: 1;
          }
        }
      }
    }
  }
`;

export default Contact;
