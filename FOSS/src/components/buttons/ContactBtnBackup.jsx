import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import styled from "styled-components";

const ContactBtn = () => {
    const { defaultLayout } = useSelector((store) => store.layout);

    // Dynamic button reposition after window resize
    let [width, setWidth] = useState(window.innerWidth);
    const sizeHandler = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", sizeHandler);
        return () => {
            window.removeEventListener('resize', sizeHandler);
        }
    }, [width])

    let repositionBtn = {
        bottom: width > 1440 ? '8%' : '7%',
        right: width > 768 ? '8%' : '12%',
        transform: 'translate(50%, 0%)',
        position: 'fixed',
    };

    // Hide on Scroll
    const [fromTop, setFromTop] = useState(false);
    const [topDistance, setTopDistance] = useState(800);

    const checkWindowSize = () => {
        let width = window.innerWidth;
        return width > 1440 
          ? setTopDistance(800)
          : width <= 1440 && width > 768
          ? setTopDistance(580)
          : width <= 768 
          ? setTopDistance(360)
          : 0
      }

    const listenFromTop = () => {
        window.scrollY > topDistance ? setFromTop(true) : setFromTop(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", listenFromTop);
        window.addEventListener("resize", checkWindowSize);

        return () => {
            window.removeEventListener("scroll", listenFromTop);
            window.removeEventListener("resize", checkWindowSize);
        };
    }, [fromTop, topDistance]);
    
    const { display } = useSelector((store) => store.hide);
    const [isHovering, setIsHovering] = useState(false);

    let hideStyle = {
        opacity: isHovering ? 1 : window.innerWidth > 480 ? "var(--opaque)" : 1,
        // transition: isHovering ? '0.6s ease' : '0.6s ease 1s',
        transition: '0.6s ease',    
    }
    let showStyle = {
        opacity: 1,
        transition: '0.2s ease',
    }

    return (
        <StyledContactBtn style={defaultLayout ? null : repositionBtn}>
            <button 
                style={fromTop && !display ? hideStyle : showStyle} 
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={defaultLayout ? "" : "reStyledLink"}
                tabIndex="2"
            >
                Contact
            </button>
        </StyledContactBtn>
    )
}

const StyledContactBtn = styled('div')`
    z-index: 3;
    position: absolute;
    bottom: 27%;
    right: 55%;
    transform: translate(50%, 0);
    transition: 0.6s ease;
    button {
        font-size: calc(0.8rem + 0.4vw);
        font-weight: 200;
        padding: 0.4rem calc(0.2rem + 2vw);
        background: transparent;
        border: 3px solid var(--col1);
        color: white;
        border-radius: 2rem;
        cursor: pointer;
        transition: all 0.3s ease, padding 0.6s ease;
        &:hover {
            font-weight: 300;
            background: var(--col1);
            color: var(--col2);
        }
    }
    .reStyledLink {
        padding: 0.4rem calc(0.2rem + 0.6vw);
    }
    
    @media(max-width: 1440px) {
        /* bottom: 27.6%; */
        right: 56%;
        button {
        padding: 0.2rem calc(0.2rem + 2vw);
        }
    }

    @media(max-width: 1080px) {
        right: 58%;
        bottom: 29%;
    }

    @media(max-width: 768px) {
        right: 60%;
        bottom: 31%;
    }

    @media(max-width: 480px) {
        right: 64%;
        bottom: 34%;
        .reStyledLink {
            padding: 0.1rem calc(0.4rem + 0.6vw);
            font-weight: 300;
        }
    }

    // Height
    @media(max-height: 600px) {
        display: none;
    }
`

export default ContactBtn;