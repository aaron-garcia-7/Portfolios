import React from 'react'
import ThemeToggle from "./ThemeToggle";

import styled from 'styled-components'
import SocialMediaBtn from './SocialMediaBtn';

function Nav({darkTheme, setDarkTheme}) {
  return (
    <ScNav>        
        <div className="spacer1" />
        {/* <SocialMediaBtn /> */}
        <ThemeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <ul className="navLinks">
            <li>
                <a href="">Work</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Resume</a>
            </li>
        </ul>
    </ScNav>
  )
}

const ScNav = styled('nav')`
    /* border: 2px dashed red; */
    position: absolute;
    top: 2rem;
    width: 100vw;
    height: 4rem;
    padding: 0 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    overflow: hidden;
    div {
      padding: 1rem;
    }
    .navLinks {
      display: flex;
      list-style: none;
      li {
        margin: 0 1vw;
        a {
          font-size: calc(0.5rem + 0.6vw);
          text-decoration: none;
          text-transform: uppercase;
        }
      }
    }
`

export default Nav