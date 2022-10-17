import React from 'react'
import { Link } from 'react-scroll';
import ThemeToggle from "./ThemeToggle";

import styled from 'styled-components'
import SocialMediaBtn from './SocialMediaBtn';

function Nav({darkTheme, setDarkTheme, pageWidth}) {
  return (
    <ScNav>        
        <div className="spacer1" />
        {/* <SocialMediaBtn /> */}
        <ThemeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <ul className="navLinks">
            <Link className='navItem' to="work" smooth={'easeInOutQuint'} offset={pageWidth > 768 ? 150 : 40}>
              <div>
                <a href="" className='link workLink'>Work</a>
              </div>
            </Link>
            <li>
              <div>
              |
              </div>
            </li>
            <li className='navItem'>
              <div>
                <a href="" className='link aboutLink'>About</a>
              </div>
            </li>
            <li>
              <div>
              |
              </div>
            </li>
            <li className='navItem'>
              <div>
                <a href="" className='link resumeLink'>Resume</a>
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
          .link {
            position: relative;
            font-size: calc(0.5rem + 0.6vw);
            text-decoration: none;
            text-transform: uppercase;
            transition: 0.4s ease;
          }
          .workLink {
            &::after {
              content: 'work';
              position: absolute;
              top: 100%;
              left: 0;
            }
          }
          .aboutLink {
            &::after {
              content: 'about';
              position: absolute;
              top: 100%;
              left: 0;
            }
          }
          .resumeLink {
            &::after {
              content: 'resume';
              position: absolute;
              top: 100%;
              left: 0;
            }
          }
        }
        &:hover {
          div {
            transform: translate(0, -100%);
            .link {
              opacity: 0.6;
              transition: 0.4s ease 0.4s;
            }
          }
        }
      }
    }

    @media (max-width: 1024px) {
      top: 2.8rem;
      .navLinks {
        .navItem {
          &:hover {
            div {
              transform: translate(0, -84%);
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
            .link {
              &::after {
                transform: translate(0, 20%);
              }
            }
          }
          &:hover {
            div {
              transform: translate(0, -90%);
            }
          }
        }
      }
    }

    @media (max-width: 520px) {
      .navLinks {
        .navItem {
          div {
            .link {
              &::after {
              }
            }
          }
          &:hover {
            div {
              transform: translate(0, -82%);
            }
          }
        }
      }
    }
`

export default Nav