import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import ThemeToggle from "./ThemeToggle";

import styled from 'styled-components'

function Nav({darkTheme, setDarkTheme, pageWidth, atHome, setAtHome}) {
  return (
    <ScNav>        
        <div className="spacer1" />
        {/* <SocialMediaBtn /> */}
        <ThemeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <ul className="navLinks">
            {atHome && <Link className='navItem' to="work" smooth={'easeInOutQuint'} offset={pageWidth > 768 ? 150 : 40}>
              <div>
                <p className='text workText'>Work</p>
              </div>
            </Link>}
            {!atHome && <NavLink className='navItem' to="/" onClick={() => setAtHome(true)}>
              <div>
                <p className='text homeText'>Home</p>
              </div>
            </NavLink>}
            <li>
              <div>
              |
              </div>
            </li>
            {atHome && <Link className='navItem' to="about" smooth={'easeInOutQuint'} offset={pageWidth > 768 ? 150 : 40}>
              <div>
                <p className='text aboutText'>About</p>
              </div>
            </Link>}
            {!atHome && <NavLink className='navItem' to={(-1)} onClick={() => setAtHome(true)}>
              <div>
                <p className='text workText'>Work</p>
              </div>
            </NavLink>}
            <li>
              <div>
              |
              </div>
            </li>
            <li className='navItem'>
              <div>
                <p className='text resumeText'>Resume</p>
              </div>
            </li>
        </ul>
    </ScNav>
  )
}

const ScNav = styled('nav')`
    /* border: 2px dashed red; */
    position: absolute;
    top: 3.2rem;
    width: 100vw;
    /* height: 4rem; */
    height: 3.2rem;
    padding: 0 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    overflow: hidden;
    .navLinks {
      /* border: 2px dashed grey; */
      display: flex;
      opacity: 0;
      pointer-events: none;
      animation: trueFade 1s ease forwards 4s;
      .navItem {
        margin: 0 1vw;
        /* border: 1px solid black; */
        overflow: hidden;
        div {
          transform: translate(0, 0);
          transition: 0.6s cubic-bezier(.53,-0.48,.48,1.4);
          .text {
            position: relative;
            font-size: calc(0.5rem + 0.6vw);
            text-decoration: none;
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
        }
        &:hover {
          div {
            transform: translate(0, -100%);
            .text {
              opacity: 0.6;
              transition: 0.4s ease 0.4s;
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
          /* margin: 0 2vw; */
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

    @media (max-width: 520px) {
      .navLinks {
        .navItem {
          div {
            .text {
              &::after {
              }
            }
          }
          &:hover {
            div {
              /* transform: translate(0, -82%); */
            }
          }
        }
      }
    }
`

export default Nav