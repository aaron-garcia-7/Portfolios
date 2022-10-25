import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import sun from '../images/graphics/sun.svg';
import moon from '../images/graphics/moon.svg';

function ThemeToggle({darkTheme, setDarkTheme}) {
    const location = useLocation();

    const rotate = {
        transform: 'rotate(180deg)',
    }
    const rotateBack = {
        transform: 'rotate(-180deg)',
    }
    const switchStyle = {
        animationDelay: location.pathname === "/" ? "3.7s" : "0.4s",
    }

  return (
    <ScThemeToggle style={switchStyle}>
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
    /* animation: trueFade 1s ease forwards 3.7s; */
    animation: trueFade 1s ease forwards;
    .spinner {
        height: calc(4rem + 2vw);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 1s cubic-bezier(.5,-0.56,.62,1.53);
        img {
            width: calc(1rem + 1vw);
            height: calc(1rem + 1vw);
            transition: 1.4s cubic-bezier(.5,-0.56,.62,1.53);
            cursor: pointer;
        }
    }

    @media (max-width: 520px) {
        transform: translate(-64%, 34%);
    }
`

export default ThemeToggle