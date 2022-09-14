import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Banner,
  Banner1220,
  Banner768,
  Banner580,
} from "../../anim/animations";
import styled from "styled-components";

import LogoProjects from "../../components/LogoProjects";

import logo from "../../images/honeysuckleStudios/logo.svg";
import phoneModel from "../../images/honeysuckleStudios/phoneModel.png";
import desktopModel from "../../images/honeysuckleStudios/desktopModel.png";
import wireframe1 from "../../images/honeysuckleStudios/wireframe1.png";
import wireframe2 from "../../images/honeysuckleStudios/wireframe2.png";
import page1 from "../../images/honeysuckleStudios/page1.png";
import page2 from "../../images/honeysuckleStudios/page2.png";
import {
  Note1,
  Note2,
  Note3,
  Note4,
  Note5,
} from "../../components/notes/Project1Notes";
import SocialLinksAlt from "../../components/buttons/SocialLinksAlt";

const CaseStudy1 = ({ loading, pageWidth }) => {
  const navigate = useNavigate();
  const [fromTop, setFromTop] = useState(false);

  const listenFromTop = () => {
    window.scrollY > 80 ? setFromTop(true) : setFromTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenFromTop);

    return () => {
      window.removeEventListener("scroll", listenFromTop);
    };
  }, [fromTop]);

  const [ref1, inView1] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: 1,
    triggerOnce: true,
  });
  const [refNotes, inViewNotes] = useInView({
    threshold: pageWidth >= 768 ? 0.7 : 0.3,
    triggerOnce: true,
  });

  return (
    <StyledCaseStudy1>
      {!loading && <LogoProjects />}
      {fromTop && (
        <div onClick={() => navigate(-1)} className="return">
          <p>Return</p>
          <div className="underline" />
        </div>
      )}
      <motion.header
        variants={
          pageWidth > 1220
            ? Banner
            : pageWidth <= 1220 && pageWidth > 768
            ? Banner1220
            : pageWidth <= 768 && pageWidth > 580
            ? Banner768
            : Banner580
        }
        animate="animate"
        className="case1Banner"
      >
        <img src={logo} alt="" className="logo1" />
        <div className="details">
          <p>
            <span>Project:</span>
            honeysuckle studios
          </p>
          <p>
            <span>Role:</span>
            web developer, ux designer
          </p>
          <p>
            <span>Date:</span>Sept. 2022
          </p>
        </div>
      </motion.header>
      <main className="case1Main">
        <section className="general">
          <aside className="aboutClient">
            <div>
              <a
                href="https://www.honeysuckle-studios.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </a>
            </div>
            <div className="client">
              <h4>The Client</h4>
              <p>
                <span>Honeysuckle Studios</span> is an eyelash studio located in
                West Jordan, UT. They offer different lash styles at a
                competitive rate.
              </p>
            </div>
            <div className="vision">
              <h4>Project Vision</h4>
              <p>
                Update current design. Looking for a more user-friendly, catchy
                style that generates leads for potential clients and provides
                helpful information about lashes and retention in general.
              </p>
            </div>
          </aside>
          <div className="devices">
            <img src={phoneModel} alt="" className="displayPhone displayImg" />
            <img src={desktopModel} alt="" className="displayMac displayImg" />
          </div>
        </section>
        <section className="concept">
          <header className="conceptHeader" ref={ref1}>
            {inView1 && <h3>Concept</h3>}
            <article className="conceptDescription">
              {inView1 && (
                <p>
                  This was an insightful project for me, since I originally
                  designed and developed the first version of the website. After
                  about a year of learning new design principles, I was able to
                  identify clear issues with my first design. For example, I
                  didn’t include a call to action upon first landing on the
                  website and didn’t provide a clear visual hierarchy.
                </p>
              )}
              {inView1 && (
                <p>
                  The new design provided solutions to these issues and others,
                  all while still maintaining the minimal appearance that the
                  client wanted. For example, to give emphasis to leading
                  clients to book their appointments, when opening the
                  navigation menu, there is a styling unique to the booking
                  button.
                </p>
              )}
            </article>
          </header>
          <main className="conceptBody">
            {inView1 && (
              <figure className="page">
                <figcaption>Previous Version</figcaption>
                <img
                  src={wireframe1}
                  alt="Concept for the home page of all solutions"
                  className="case1Img"
                />
              </figure>
            )}
            {inView1 && (
              <figure className="page">
                <figcaption>Current Version</figcaption>
                <img
                  src={wireframe2}
                  alt="Concept for the about page of all solutions"
                  className="case1Img"
                />
              </figure>
            )}
          </main>
        </section>
        <section className="development">
          <div className="refDiv" ref={ref2} />
          <header className="developmentHeader">
            {inView2 && <h3>Development</h3>}
            <article className="developmentDescription">
              {inView2 && (
                <p>
                  While this is a smaller, single page website, I’m looking for
                  every chance I get to become more familiar with react. I was
                  hesitant at first since I figured it would be “overkill”, but
                  also realized that whether the project is big or small, react
                  is a great library.
                </p>
              )}
              {inView2 && (
                <p>
                  My take away from this project is that there is always
                  something to alter and change on any website. To view the full
                  source code, feel free to visit my{" "}
                  <a
                    href="https://github.com/aaron-garcia-7/Clients/tree/main/allSolutions"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github
                  </a>{" "}
                  profile. There you’ll find the source code to other websites
                  I’ve worked on.
                </p>
              )}
            </article>
          </header>
          <main className="developmentBody" ref={refNotes}>
            {inView2 && (
              <figure className="page">
                <figcaption>Previous Version</figcaption>
                <img
                  src={page1}
                  alt="Development for the home page of all solutions"
                  className="case1Img"
                />
              </figure>
            )}
            {inView2 && (
              <figure className="page">
                <figcaption>Current Version</figcaption>
                <img
                  src={page2}
                  alt="Development for the about page of all solutions"
                  className="case1Img"
                />
              </figure>
            )}
            {inViewNotes && <Note1 noteStyle={"noteStyle"} />}
            {inViewNotes && <Note2 noteStyle={"noteStyle"} />}
            {inViewNotes && <Note3 noteStyle={"noteStyle"} />}
            {inViewNotes && <Note4 noteStyle={"noteStyle"} />}
            {inViewNotes && <Note5 noteStyle={"noteStyle"} />}
          </main>
        </section>
        <section className="production">
          <header className="productionHeader" ref={ref3}>
            {inView3 && <h3>Production</h3>}
            <article className="productionDescription">
              {inView3 && (
                <p>
                  Hosting for this project was set up through netlify, an easy
                  to use hosting platform I heard about from developers across
                  the internet. Netlify offers free hosting for smaller
                  websites, so this was an excellent option to go with!
                </p>
              )}
              {inView3 && (
                <p>
                  For SEO we utilized common methods. We added the business to
                  google maps and I instructed the business owner to request
                  reviews from the people he works with. On the google business
                  account we updated the info fully, including business details,
                  areas of operation, hours, contatact info, photos, etc.
                </p>
              )}
            </article>
          </header>
        </section>
      </main>
      <footer className="case1Footer">
        <div className="left">
          <p>
            Need a passionate developer
            <br /> with design experience? <br />
            Feel free to contact me!
          </p>
        </div>
        <div className="center">
          <h3>Connect with me!</h3>
          <div className="divider" />
          <SocialLinksAlt />
        </div>
        <div className="right">
          <a href="mailto:aaronegarcia1@gmail.com">aaronegarcia1@gmail.com</a>
          <a href="tel:3852274287">385-227-4287</a>
        </div>
      </footer>
    </StyledCaseStudy1>
  );
};

const StyledCaseStudy1 = styled("div")`
  background: white;
  width: 100vw;
  .return {
    position: fixed;
    top: var(--top);
    right: var(--right);
    transform: translate(50%, -50%);
    width: 4.8rem;
    height: 4.8rem;
    border: 2px solid transparent;
    border-radius: 50%;
    z-index: 3;
    cursor: pointer;
    transition: 0.3s ease;
    opacity: 0;
    animation: details 0.6s ease forwards;
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--col2);
      font-size: calc(0.8rem + 0.4vw);
      transition: 0.3s ease;
    }
    .underline {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(2rem + 2vw);
      border: 1px solid var(--col2);
      transition: 0.3s ease;
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        width: 20%;
        border: 1px solid var(--col2);
        background: var(--col2);
        transform-origin: left;
        opacity: 0;
        transition: 0.3s ease;
      }
    }
    &:hover {
      border: 2px solid var(--col2);
      p {
        opacity: 0;
      }
      .underline {
        top: 50%;
        width: 50%;
        width: 40%;
        &::before {
          opacity: 1;
          transform: rotate(-45deg) translate(1px, 0.5px);
        }
        &::after {
          opacity: 1;
          transform: rotate(45deg) translate(1px, -0.5px);
        }
      }
    }
  }

  .case1Banner {
    position: relative;
    background: #efa0a0;
    height: 100vh;
    .logo1 {
      position: absolute;
      top: 50%;
      left: 50%;
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.3);
      width: calc(12rem + 24vw);
      object-fit: cover;
      animation: logo1 0.6s ease forwards;
    }
    .details {
      position: absolute;
      bottom: 0.4rem;
      left: 50%;
      transform: translate(-50%, 0);
      width: 74vw;
      display: flex;
      justify-content: space-between;
      p {
        opacity: 0;
        color: #fff;
        font-size: calc(0.6rem + 0.6vw);
        animation: details 2.6s ease forwards;
        span {
          font-weight: 500;
          font-size: calc(1rem + 0.6vw);
          letter-spacing: 0.1rem;
          padding-right: 0.6rem;
        }
        &:nth-child(1) {
          animation-delay: 1.2s;
        }
        &:nth-child(2) {
          animation-delay: 1.5s;
          transform: translate(-16%, 0);
        }
        &:nth-child(3) {
          animation-delay: 1.8s;
        }
      }
    }
  }

  .case1Main {
    width: 74vw;
    margin: auto;
    .general {
      display: flex;
      position: relative;
      width: auto;
      height: auto;
      min-height: 48rem;
      background: white;
      padding: 12rem 0 0 0;
      .aboutClient {
        width: 50%;
        display: flex;
        flex-direction: column;
        > * {
          margin-bottom: calc(2rem + 1vw);
          width: 20rem;
          h4 {
            color: var(--col2);
            font-size: calc(1rem + 0.8vw);
            font-weight: 200;
            letter-spacing: 0.1rem;
            margin-bottom: 0.6rem;
          }
          a,
          p {
            color: var(--col2);
            font-size: calc(0.8rem + 0.2vw);
            span {
              font-weight: 500;
            }
          }
          a {
            font-size: calc(0.8rem + 0.4vw);
            font-weight: 300;
            letter-spacing: 0.1rem;
            color: white;
            background: #efa0a0;
            padding: calc(0.2rem + 0.4vw) calc(0.4rem + 0.6vw);
            border: 2px solid #efa0a0;
            border-radius: 0.6rem;
            transition: 0.3s ease;
            &:hover {
              color: #efa0a0;
              background: white;
            }
          }
        }
      }
      .devices {
        position: relative;
        width: 56rem;
        height: 28rem;
        .displayImg {
          position: absolute;
        }
        .displayPhone {
          width: 12rem;
          bottom: 0;
          left: 0;
          z-index: 2;
        }
        .displayMac {
          width: 36rem;
          bottom: 0;
          right: -8px;
          z-index: 1;
        }
      }
    }

    .concept,
    .development,
    .production {
      background: white;
      display: flex;
      flex-direction: column;
      position: relative;
      width: auto;
      height: auto;
      min-height: 48rem;
      padding: 8rem 0 0 0;
      .refDiv {
        padding: 1rem;
      }
      .conceptHeader,
      .developmentHeader,
      .productionHeader {
        h3 {
          position: relative;
          font-size: calc(1.4rem + 1.4vw);
          letter-spacing: 0.2rem;
          color: var(--col2);
          margin-bottom: 2rem;
          width: default;
          display: inline-block;
          opacity: 0;
          filter: blur(12px);
          animation: blurIn 1s ease forwards;
          &::after {
            position: absolute;
            content: "";
            left: 0;
            bottom: 0;
            width: 0%;
            height: 3px;
            /* background: var(--col1); */
            background: #efa0a0;
            animation: dashGrow 0.6s 0.6s ease forwards;
          }
        }
        .conceptDescription,
        .developmentDescription,
        .productionDescription {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4rem;
          p {
            width: 46%;
            color: var(--col2);
            font-size: calc(0.8rem + 0.2vw);
            opacity: 0;
            animation: fade 1s ease-in 0.6s forwards;
            a {
              color: var(--col2);
              font-weight: 500;
              text-decoration: underline;
              opacity: 0;
              animation: fade 1s ease-in 0.6s forwards;
            }
            &:nth-child(2) {
              animation-delay: 1s;
            }
          }
        }
      }
      .conceptBody,
      .developmentBody,
      .productionBody {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 4rem 0;
        .page {
          position: relative;
          width: 46%;
          figcaption {
            position: absolute;
            top: 0;
            left: 0;
            translate: 0% -100%;
            color: #313131;
            font-size: calc(0.6rem + 0.8vw);
            font-weight: 200;
            letter-spacing: 0.1rem;
            opacity: 0;
            filter: blur(8px);
            animation: blurIn 0.6s ease 1s forwards;
          }
          .case1Img {
            width: 100%;
            animation: addShadow 0.8s ease 1.4s forwards;
          }
          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background: white;
            animation: imgSlider 0.6s ease 1.4s forwards;
          }
          &:nth-of-type(2) {
            &::after {
              animation-delay: 1.5s;
            }
          }
        }
        .note {
          position: absolute;
          &:nth-of-type(1) {
            left: 32%;
            transform: translate(0%, 100%);
          }
          &:nth-of-type(2) {
            right: 0%;
            transform: translate(40%, 100%);
          }
          &:nth-of-type(3) {
            top: calc(8rem + 12vw);
            left: 16%;
            transform: translate(-100%, 0%);
          }
          &:nth-of-type(4) {
            top: calc(6rem + 16vw);
            right: 25%;
            transform: translate(75%, 0%);
          }
          &:nth-of-type(5) {
            top: calc(0rem + 36vw);
            left: 50%;
            transform: translate(-100%, 0%);
          }
        }
      }
    }
    .production {
      min-height: 36rem;
    }
  }

  .case1Footer {
    background: #efa0a0;
    height: 24vh;
    min-height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    > * {
      height: 6rem;
    }
    .left {
      width: 24%;
      p {
        color: white;
        font-size: calc(0.8rem + 0.2vw);
        font-weight: 400;
        line-height: 2rem;
      }
    }
    .center {
      width: 24%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h3 {
        color: white;
        font-size: calc(0.8rem + 0.6vw);
        text-align: center;
      }
      .divider {
        width: 16%;
        height: 4px;
        color: white;
        border: 1px solid white;
        margin: 0.6rem 0 1.2rem 0;
      }
    }
    .right {
      width: 24%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      transform: translate(40%, 0);
      a {
        color: white;
        padding-left: 0.6rem;
        border-left: 3px solid transparent;
        transition: 0.3s ease;
        &:nth-child(1) {
          font-size: calc(0.8rem + 0.1vw);
          margin-bottom: 1rem;
        }
        &:nth-child(2) {
          letter-spacing: 0.1rem;
        }
        &:hover {
          border-left: 2px solid var(--col1);
        }
      }
    }
  }

  @keyframes logo1 {
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(0.5);
    }
  }
  @keyframes details {
    to {
      opacity: 1;
    }
  }
  @keyframes imgSlider {
    to {
      width: 0%;
    }
  }
  @keyframes addShadow {
    to {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 1220px) {
    .case1Banner {
      .details {
        flex-direction: column;
        width: 72vw;
        transform: translate(-50%, 140%);
        z-index: 2;
        p {
          color: #efa0a0;
          margin-bottom: 0.8rem;
          span {
            font-weight: 400;
          }
          &:nth-child(2) {
            transform: translate(0, 0);
          }
        }
      }
    }
    .case1Main {
      width: 72vw;
      .general {
        padding: 14rem 0 0 0;
        flex-direction: column;
        .aboutClient {
          width: 100%;
          > * {
            margin-bottom: calc(1rem + 1vw);
            width: 100%;
          }
        }
        .devices {
          width: 100%;
          margin: 6rem 0;
        }
      }
      .concept,
      .development,
      .production {
        padding: 6rem 0 0 0;
      }
    }
  }

  @media (max-width: 768px) {
    .return {
      width: 3.6rem;
      height: 3.6rem;
    }
    .case1Banner {
      .details {
        width: 68vw;
      }
    }
    .case1Main {
      width: 68vw;
      .general {
        .devices {
          height: 54rem;
          .displayPhone {
            width: 14rem;
            bottom: 50%;
            left: 50%;
            transform: translate(-50%, 0);
          }
          .displayMac {
            width: 26rem;
            bottom: 0%;
            right: 50%;
            transform: translate(50%, 0);
          }
        }
      }
      .concept,
      .development,
      .production {
        padding: 6rem 0 0 0;
        .conceptHeader,
        .developmentHeader,
        .productionHeader {
          .conceptDescription,
          .developmentDescription,
          .productionDescription {
            flex-direction: column;
            margin-bottom: 0rem;
            p {
              width: 100%;
              margin-bottom: 2rem;
            }
          }
        }
        .conceptBody,
        .developmentBody,
        .productionBody {
          flex-direction: column;
          .page {
            width: 100%;
            margin-bottom: 4rem;
          }
          .note {
            position: absolute;
            &:nth-of-type(1) {
              left: 96%;
              top: 6%;
              transform: translate(-100%, 0%);
            }
            &:nth-of-type(2) {
              top: auto;
              bottom: calc(10rem + 116vw);
              right: 0%;
              transform: translate(20%, 0%);
            }
            &:nth-of-type(3) {
              transform: translate(20%, 140%);
            }
            &:nth-of-type(4) {
              top: auto;
              bottom: calc(10rem + 86vw);
              transform: translate(-75%, 0%);
            }
            &:nth-of-type(5) {
              top: calc(12rem + 36vw);
              left: 100%;
              transform: translate(-60%, 0%);
            }
          }
        }
      }

      .concept,
      .development,
      .production {
        padding: 2rem 0 0 0;
        .conceptHeader,
        .developmentHeader,
        .productionHeader {
          .conceptDescription,
          .developmentDescription,
          .productionDescription {
            flex-direction: column;
            p {
              width: 100%;
              margin-bottom: 2rem;
            }
          }
        }
      }
    }

    .case1Footer {
      height: 36vh;
      min-height: 24rem;
      flex-direction: column;
      .left {
        order: 0;
        width: 80%;
        p {
          text-align: center;
          line-height: 1.6rem;
        }
      }
      .center {
        order: 2;
        width: 80%;
        h3 {
          font-size: calc(0.8rem + 0.8vw);
        }
        .divider {
          width: 10%;
          margin: 0.6rem 0 1rem 0;
        }
      }
      .right {
        order: 1;
        width: 80%;
        align-items: center;
        transform: translate(0, -20%);
        a {
          &:nth-child(1) {
            margin-bottom: 0rem;
          }
        }
      }
    }
  }

  @media (max-width: 580px) {
    .case1Banner {
      .details {
        p {
          font-weight: 400;
          font-size: calc(0.8rem + 0.4vw);
          span {
            font-size: calc(1rem + 0.6vw);
          }
        }
      }
    }
    .case1Main {
      .general {
        .devices {
          height: 46rem;
          .displayPhone {
            width: 14rem;
            bottom: 44%;
          }
          .displayMac {
            width: 20rem;
            bottom: 0%;
          }
        }
      }
    }
  }
`;

export default CaseStudy1;
