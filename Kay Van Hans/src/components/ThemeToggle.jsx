import React from 'react'
import styled from 'styled-components';
import sun from '../images/graphics/sun.svg';
import moon from '../images/graphics/moon.svg';

function ThemeToggle({darkTheme, setDarkTheme}) {
    const activeSpinner = {
        transform: 'rotate(180deg)',
    }
    const activeImg = {
        transform: 'rotate(180deg)',
        cursor: 'pointer',
    }

  return (
    <ScThemeToggle>
        <div className="spinner" style={darkTheme ? activeSpinner : null}>
            <img src={sun} alt="" onClick={() => setDarkTheme(true)} style={!darkTheme ? activeImg : null}/>
            <img src={moon} alt="" onClick={() => setDarkTheme(false)} style={darkTheme ? activeImg : null}/>
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
    animation: trueFade 1s ease forwards 3.7s;
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
        }
    }
`

export default ThemeToggle