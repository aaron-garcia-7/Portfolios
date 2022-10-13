import React from 'react'
import styled from 'styled-components';
import sun from '../images/graphics/sun.svg';
import moon from '../images/graphics/moon.svg';

function ThemeToggle({darkTheme, setDarkTheme}) {
    const activeSpinner = {
        transform: 'rotate(180deg)',
    }
    const activeImg = {
        transform: 'rotate(-180deg)',
        cursor: 'pointer',
    }
    const coverStyle = {
        background: darkTheme ? "var(--dark)" : "var(--light)",
    }

  return (
    <ScThemeToggle>
        <div className="spinner" style={darkTheme ? activeSpinner : null}>
            <img src={sun} alt="" onClick={() => setDarkTheme(true)} style={!darkTheme ? activeImg : null}/>
            <img src={moon} alt="" onClick={() => setDarkTheme(false)} style={darkTheme ? activeImg : null}/>
        </div>
        {/* <div className="cover" style={coverStyle} /> */}
    </ScThemeToggle>
  )
}

const ScThemeToggle = styled('div')`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 20%);
    opacity: 0;
    pointer-events: none;
    animation: trueFade 1s ease forwards 3.7s;
    .spinner {
        /* border: 2px dashed red; */
        /* height: 8rem; */
        height: calc(6rem + 2vw);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: 0.6s ease;
        img {
            /* width: 2rem; */
            /* height: 2rem; */
            width: calc(1rem + 1vw);
            height: calc(1rem + 1vw);
            transition: 0.6s ease;
        }
    }
    .cover {
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translate(-50%, 10%);
        width: 12rem;
        height: 4rem;
        transition: 0.6s ease;
    }
`

export default ThemeToggle