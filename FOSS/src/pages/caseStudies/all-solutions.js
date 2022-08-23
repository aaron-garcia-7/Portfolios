import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import LogoProjects from "../../components/LogoProjects";

import logo2 from "../../images/allSolutions/logo2.png";
// import logo from "../../images/allSolutions/logo.svg";
import logo from "../../images/allSolutions/logo.png";
import phoneModel from "../../images/allSolutions/phoneModel.png";
import desktopModel from "../../images/allSolutions/desktopModel.png";
import wireframe1 from "../../images/allSolutions/wireframe1.png";
import wireframe2 from "../../images/allSolutions/wireframe2.png";
import page1 from "../../images/allSolutions/page1.png";
import page2 from "../../images/allSolutions/page2.png";
import {
  Note1,
  Note2,
  Note3,
  Note4,
  Note5,
  Note6,
} from "../../components/notes/Project2Notes";

const CaseStudy2 = ({ loading }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const checkWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [width]);

  const [ref, inView] = useInView({
    // threshold: width > 580 ? 0.3 : 0.4,
    // threshold: width > 768 ? 0.3 : 0,
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <StyledCaseStudy1>
      {!loading && <LogoProjects />}
      <NavLink to="/" className="return">
        <p>Return</p>
        <div className="underline" />
      </NavLink>
      <header className="case2Banner">
        <img src={logo} alt="" className="logo" />
        <div className="details">
          <p>
            <span>Project:</span>
            all solutions
          </p>
          <p>
            <span>Role:</span>
            web developer, co-designer
          </p>
          <p>
            <span>Duration:</span>6 weeks
          </p>
        </div>
      </header>
      <main className="case2Main">
        <section className="general">
          <aside>
            <div className="visit">
              <h4>Visit Site</h4>
              <a href="https://www.ashaac.com" target="_blank" rel="noreferrer">
                ashaac.com
              </a>
            </div>
            <div className="client">
              <h4>The Client</h4>
              <p>
                <span>All Solutions</span> is a newly established business
                located in West Jordan, UT. They provide repair &amp;
                replacement services for heating &amp; air conditioning.
              </p>
            </div>
            <div className="vision">
              <h4>Project Vision</h4>
              <p>
                Create a user-friendly website that helps generate leads and
                conveys their business motto of trust and reliability.
              </p>
            </div>
          </aside>
          <div className="devices">
            <img src={phoneModel} alt="" className="displayPhone" />
            <img src={desktopModel} alt="" className="displayMac" />
          </div>
        </section>
        <section className="concept">
          <header className="conceptHeader">
            <h3>Concept</h3>
            <article className="conceptDescription">
              <p>
                This design process was a collaboration task. I met with the
                client to go over key questions regarding the website’s overall
                goals, needs, and desired feel. I then sent the owner’s
                responses to my collaborator who provided the initial website
                design and layout. The concept helped to generate the feel for
                the rest of the site.
              </p>
              <p>
                With an initial design provided, I could focus more time on the
                development aspect, which I prefer. There were a few minor
                adjustments I provided to the initial design, but mostly stayed
                true to the original idea. I made more changes to the second
                page however, as well as fully designed the contact module.
              </p>
            </article>
          </header>
          <main className="conceptBody">
            <img
              src={wireframe1}
              alt="all solutions home page"
              className="page"
            />
            <img
              src={wireframe2}
              alt="all solutions about page"
              className="page"
            />
          </main>
        </section>
        <section className="development" ref={ref}>
          <header className="developmentHeader">
            <h3>Development</h3>
            <article className="developmentDescription">
              <p>
                Since I'm looking to get practice with React.js, it's no
                surprise that this is the library I decided to go with when
                building the application. The dependencies included
                react-router-dom, redux/toolkit, react-intersection-observer,
                react-scroll, and integrating an icon library called
                fontawesome. Please feel free to visit my{" "}
                <a
                  href="https://github.com/aaron-garcia-7/Clients/tree/main/allSolutions"
                  target="_blank"
                  rel="noreferrer"
                >
                  github
                </a>{" "}
                for full access to the source code! You're also welcome to
                contact me with any questions.
              </p>
              <p>
                Overall my main take away is that I prefer and lean more toward
                the development aspect of a products creative lifecycle versus
                strictly the design portion. This was an excellent opportunity
                for me to exercise my front-end skills using React.js and I'm
                excited for more chances to showcase my skills.
              </p>
            </article>
          </header>
          <main className="developmentBody">
            {/* <img src={note1} alt="note1" className="note" /> */}
            {inView && <Note1 class={"class"} />}
            {inView && <Note2 class={"class"} />}
            {inView && <Note3 class={"class"} />}
            {inView && <Note4 class={"class"} />}
            {inView && <Note5 class={"class"} />}
            {inView && <Note6 class={"class"} />}
            <img src={page1} alt="all solutions home page" className="page" />
            <img src={page2} alt="all solutions about page" className="page" />
          </main>
        </section>
        <section className="production">
          <header className="productionHeader">
            <h3>Production</h3>
            <article className="productionDescription">
              <p>
                Hosting for this project was set up through godaddy. The client
                had purchased their domain name and one of their plans with
                them, so to remain consistent we continued to use their hosting
                services, which was a nice chance for me to become familiar with
                godaddy's hosting dashboard and user interface.
              </p>
              <p>
                For SEO we utilized common methods. We added the business to
                google maps and I instructed the business owner to request
                reviews from the people he works with. On the google business
                account we updated the info fully, including business details,
                areas of operation, hours, contatact info, photos, etc.
              </p>
            </article>
          </header>
        </section>
      </main>
      <footer className="case2Footer">
        <h2>Sample Text</h2>
      </footer>
    </StyledCaseStudy1>
  );
};

const StyledCaseStudy1 = styled("div")`
  /* background: white; */
  background: var(--col2);
  width: 100vw;
  .return {
    position: fixed;
    top: var(--top);
    right: var(--right);
    transform: translate(50%, -50%);
    width: 4.8rem;
    height: 4.8rem;
    /* border: 2px solid coral; */
    border-radius: 50%;
    z-index: 3;
    background: black;
    mix-blend-mode: difference;
    transition: 0.3s ease;
    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      /* color: var(--col2); */
      color: white;
      font-size: calc(0.8rem + 0.4vw);
      transition: 0.3s ease;
    }
    .underline {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(2rem + 2vw);
      /* border: 1px solid var(--col2); */
      border: 1px solid white;
      transition: 0.3s ease;

      &::before,
      &::after {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        width: 20%;
        /* border: 1px solid var(--col2); */
        border: 1px solid white;
        transform-origin: left;
        opacity: 0;
        transition: 0.3s ease;
      }
    }
    &:hover {
      p {
        opacity: 0;
      }
      .underline {
        top: 50%;
        width: 50%;
        width: 40%;
        /* transition-delay: 0.3s; */
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

  .case2Banner {
    position: relative;
    /* background: #0e9bff; */
    /* background: var(--col2); */
    background: #313131;
    background: white;
    height: 36vh;
    min-height: 20rem;
    .logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(12rem + 24vw);
      object-fit: cover;
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
        font-size: calc(0.6rem + 0.6vw);
        span {
          font-weight: 500;
          font-size: calc(1rem + 0.6vw);
          letter-spacing: 0.1rem;
          padding-right: 0.6rem;
        }
      }
    }
  }

  .case2Main {
    /* background: white; */
    /* background: var(--col2); */
    width: 74vw;
    margin: auto;
    .general {
      /* border: 4px solid coral; */
      display: flex;
      position: relative;
      width: auto;
      /* height: 100vh; */
      height: auto;
      min-height: 48rem;
      /* background: white; */
      background: var(--col2);
      padding: 12rem 0 0 0;
      aside {
        width: 50%;
        display: flex;
        flex-direction: column;
        > * {
          margin-bottom: calc(2rem + 1vw);
          width: 20rem;
          h4 {
            color: var(--col2);
            color: white;

            font-size: calc(0.8rem + 0.8vw);
            font-weight: 400;
            letter-spacing: 0.1rem;
            margin-bottom: 0.6rem;
          }
          a,
          p {
            color: var(--col2);
            color: white;

            font-size: calc(0.8rem + 0.2vw);
            span {
              font-weight: 500;
            }
          }
          a {
            font-style: italic;
          }
        }
      }
      .devices {
        /* border: 2px solid black; */
        position: relative;
        width: 56rem;
        height: 28rem;
        img {
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
      /* background: white; */
      background: var(--col2);
      display: flex;
      flex-direction: column;
      position: relative;
      width: auto;
      height: auto;
      min-height: 48rem;
      padding: 8rem 0 0 0;
      .conceptHeader,
      .developmentHeader,
      .productionHeader {
        h3 {
          font-size: calc(1.4rem + 1.4vw);
          letter-spacing: 0.2rem;
          color: var(--col2);
          color: white;

          margin-bottom: 2rem;
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
            color: white;

            font-size: calc(0.8rem + 0.2vw);
            a {
              color: var(--col2);
              color: white;

              font-weight: 500;
              text-decoration: underline;
            }
          }
        }
      }
      .conceptBody,
      .developmentBody,
      .productionBody {
        /* border: 2px solid black; */
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 4rem 0;
        .page {
          width: 46%;
        }
        .note {
          position: absolute;
          &:nth-of-type(1) {
            left: 25%;
            transform: translate(-60%, -120%);
          }
          &:nth-of-type(2) {
            top: calc(4rem + 4vw);
            left: 50%;
            transform: translate(-10%, 0%);
          }
          &:nth-of-type(3) {
            top: calc(4rem + 12vw);
            left: 50%;
            transform: translate(-50%, 0%);
          }
          &:nth-of-type(4) {
            top: calc(8rem + 16vw);
            left: 0%;
            transform: translate(-90%, 0%);
          }
          &:nth-of-type(5) {
            top: calc(6rem + 22vw);
            right: 0%;
            transform: translate(70%, 0%);
          }
          &:nth-of-type(6) {
            top: calc(1rem + 48vw);
            right: 0%;
            transform: translate(70%, 0%);
          }
        }
      }
    }
  }

  .case2Footer {
    position: relative;
    background: #0e9bff;
    height: 24vh;
    min-height: 12rem;
  }

  @media (max-width: 1220px) {
    .case2Banner {
      height: 32vh;
      min-height: 18rem;
      .details {
        flex-direction: column;
        width: 72vw;
        transform: translate(-50%, 140%);
        z-index: 2;
        p {
          color: #0e9bff;
          margin-bottom: 0.8rem;
          span {
            font-weight: 400;
          }
        }
      }
    }
    .case2Main {
      width: 72vw;
      .general {
        padding: 14rem 0 0 0;
        flex-direction: column;
        aside {
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
    .case2Banner {
      height: 36vh;
      min-height: 14rem;
      .details {
        width: 68vw;
      }
    }
    .case2Main {
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
              left: 50%;
              transform: translate(-50%, -120%);
            }
            &:nth-of-type(2) {
              top: auto;
              bottom: calc(10rem + 90vw);
              left: 0%;
              transform: translate(-50%, 0%);
            }
            &:nth-of-type(3) {
              top: calc(8rem + 12vw);
              left: 100%;
              transform: translate(-8%, 0%);
            }
            &:nth-of-type(4) {
              top: calc(14rem + 12vw);
              left: 0%;
              transform: translate(-90%, 0%);
            }
            &:nth-of-type(5) {
              top: auto;
              bottom: calc(14rem + 36vw);
              right: 0%;
              transform: translate(70%, 0%);
            }
            &:nth-of-type(6) {
              top: auto;
              bottom: calc(8rem + 18vw);
              right: 0%;
              transform: translate(70%, 0%);
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

    @media (max-width: 580px) {
      .case2Banner {
        height: 30vh;
        min-height: 12rem;
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
      .case2Main {
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
  }
`;

export default CaseStudy2;
