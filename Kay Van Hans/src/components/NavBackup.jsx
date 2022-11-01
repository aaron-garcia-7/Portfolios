import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import ThemeToggle from "./ThemeToggle";
import resume from '../documents/resume.pdf';

import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import styled from 'styled-components'

function Nav({darkTheme, setDarkTheme, pageWidth, setMenuOpen}) {
  const location = useLocation();

  const linksStyle = {
    animationDelay: location.pathname === '/' ? '4s' : '2s',
  }

  return (
    <ScNav variants={pageAnim} initial="initial" animate="animate" exit="exit">        
        <div className="spacer1" />
        <ThemeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} setMenuOpen={setMenuOpen}/>
        <ul className="navLinks" style={linksStyle}>
            {location.pathname === "/" && <Link className='navItem' href="#work" to="work" smooth={'easeInOutQuint'} offset={pageWidth > 768 ? 150 : 40} tabIndex={6}>
              <div>
                <p className='text workText'>Work</p>
              </div>
            </Link>}
            {location.pathname !== "/" && <NavLink className='navItem' to="/" tabIndex={6}>
              <div>
                <p className='text homeText'>Home</p>
              </div>
            </NavLink>}
            <li>
              <div>
              |
              </div>
            </li>
            {location.pathname === '/' && <Link className='navItem' href="#about" to="about" smooth={'easeInOutQuint'} offset={pageWidth > 768 ? 150 : 40} tabIndex={7}>
              <div>
                <p className='text aboutText'>About</p>
              </div>
            </Link>}
            {location.pathname !== '/' && <Link className='navItem' href="#contact" to="contact" smooth={'easeInOutQuint'} offset={pageWidth > 768 ? 150 : 40} tabIndex={7}>
              <div>
                <p className='text contactText'>Contact</p>
              </div>
            </Link>}
            <li>
              <div>
              |
              </div>
            </li>
            <a href={resume} target="_blank" rel="noreferrer" className='navItem' tabIndex={8}>
              <div>
                <p className='text resumeText'>Resume</p>
              </div>
            </a>
        </ul>
    </ScNav>
  )
}

const ScNav = styled(motion.nav)`
    position: absolute;
    top: 3.2rem;
    width: 100vw;
    height: 3.2rem;
    padding: 0 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    overflow: hidden;
    .navLinks {
      display: flex;
      opacity: 0;
      pointer-events: none;
      animation: trueFade 1s ease forwards;
      .navItem {
        margin: 0 1vw;
        overflow: hidden;
        div {
          transform: translate(0, 0);
          transition: 0.6s cubic-bezier(.53,-0.48,.48,1.4);
          .text {
            position: relative;
            font-size: calc(0.5rem + 0.6vw);
            text-transform: uppercase;
            transition: 0.4s ease;
            cursor: pointer;
            &::after {
              position: absolute;
              top: 100%;
              left: 0;
            }
          }
          .workText {
            &::after {
              content: 'work';
            }
          }
          .aboutText {
            &::after {
              content: 'about';
            }
          }
          .resumeText {
            &::after {
              content: 'resume';
            }
          }
          .homeText {
            &::after {
              content: 'home';
            }
          }
          .contactText {
            &::after {
              content: 'contact';
            }
          }
        }
        &:hover,
        &:focus {
          div {
            transform: translate(0, -100%);
            .text {
              opacity: 0.6;
              transition: 0.4s ease 0.5s;
            }
          }
        }
      }
    }

    @media (max-width: 1224px) {
      top: 2.8rem;
      .navLinks {
        .navItem {
          div {
            transform: translate(0, 10%);
            .text {
            &::after {
              top: 120%;
            }
          }
        }
          &:hover {
            div {
              transform: translate(0, -110%);
            }
          }
        }
      }
    }

    @media (max-width: 768px) {
      .navLinks {
        transform: translate(0, -20%);
        .navItem {
          div {
            transform: translate(0, 24%);
            .text {
              &::after {
                transform: translate(0, 20%);
              }
            }
          }
          &:hover {
            div {
              transform: translate(0, -120%);
            }
          }
        }
      }
    }
`

export default Nav