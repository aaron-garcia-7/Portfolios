import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import sun from '../images/graphics/sun.svg';
import moon from '../images/graphics/moon.svg';

function ThemeToggle({darkTheme, setDarkTheme, setMenuOpen}) {
    const location = useLocation();

    const rotate = {
        transform: 'rotate(180deg)',
    }
    const rotateBack = {
        transform: 'rotate(-180deg)',
    }
    const switchStyle = {
        animationDelay: location.pathname === "/" ? "3.7s" : "1.8s",
    }

  return (
<ScThemeToggle style={switchStyle} tabIndex={6} onFocus={() => {setMenuOpen(false)}} onKeyDown={(event) => {
    if(event.key === "Enter"){
        setDarkTheme(prev => !prev);
    }
    }}>
        <div className="spinner" style={darkTheme ? rotate : null}>
            <img src={sun} alt="" onClick={() => setDarkTheme(true)} style={!darkTheme ? rotateBack : null}/>
            <img src={moon} alt="" onClick={() => setDarkTheme(false)} style={darkTheme ? rotate : null}/>
        </div>
    </ScThemeToggle>
  )
}

const ScThemeToggle = styled('div')`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 34%);
    opacity: 0;
    pointer-events: none;
    animation: trueFade 1s ease forwards;
    .spinner {
        height: calc(4rem + 2vw);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: transform 1s cubic-bezier(.5,-0.56,.62,1.53);
        img {
            width: calc(1rem + 1vw);
            height: calc(1rem + 1vw);
            transition: transform 1.4s cubic-bezier(.5,-0.56,.62,1.53);
            cursor: pointer;
        }
    }

    // Position Right
    /* @media (max-width: 768px) {
        left: 90%;
    } */

    /* @media (max-width: 520px) {
        transform: translate(-64%, 34%);
    } */
    @media (max-width: 520px) {
        transform: translate(-100%, 34%);
    }
`

export default ThemeToggle