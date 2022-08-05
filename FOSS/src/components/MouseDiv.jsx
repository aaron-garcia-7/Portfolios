import { useState, useEffect } from 'react';
import styled from "styled-components";

const MouseDiv = ({posX, posY, toggle}) => {
    // let [scrolling, setScrolling] = useState(false);

    // For Stationary mouseDiv
    // const mouseStyle = {
    //     // position: scrolling ? "fixed" : "absolute", 
    //     position: "absolute", 
    //     top: `calc(${posY}px - 8px)`,
    //     left: `calc(${posX}px - 8px)`,
    //     padding: "0.4rem",
    //     background: "var(--col1)",
    //     opacity: toggle ? 0 : 1,
    // }

    // For "Fairy" keyframe
    const mouseStyle = {
        // position: scrolling ? "fixed" : "absolute", 
        position: "absolute", 
        top: `calc(${posY}px - 20px)`,
        left: `calc(${posX}px - 20px)`,
        padding: "1.4rem",
        opacity: toggle ? 0 : 1,
    }

    return (
        <StyledMouseDiv style={mouseStyle}>
            <div className="inner" />
        </StyledMouseDiv>
    )
}

const StyledMouseDiv = styled('div')`
    z-index: 9;
    opacity: 0.4;
    border-radius: 50%;
    pointer-events: none;
    animation: revolve 8s linear infinite;
    transition: opacity 0.4s;
    .inner {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0.2rem;
        border-radius: 50%;
        background: var(--col1);
        /* box-shadow: 0px 0px 8px var(--col1); */
        box-shadow: 0px 0px 8px white;
        animation: fairy 1s ease-in-out infinite alternate;
    }

    @keyframes revolve {
        to {
            transform: rotate(360deg);
        }
    }
    @keyframes fairy {
        from {
            transform: translate(-100%, 0);
        }
        to {
            transform: translate(200%, 0);
        }
    }

    @media(max-width: 480px) {
        display: none;
    }
`

export default MouseDiv;