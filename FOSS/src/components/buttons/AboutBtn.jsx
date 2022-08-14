import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import styled from "styled-components";

const AboutBtn = () => {
    const { defaultLayout } = useSelector((store) => store.layout);
    
    // Dynamic button reposition after window resize
    let [width, setWidth] = useState(window.innerWidth);
    const sizeHandler = () => {
        setWidth(window.innerWidth);
    }

    // Hide on Scroll
    const [fromTop, setFromTop] = useState(false);
    const [topDistance, setTopDistance] = useState(800);

    const checkWindowSize = () => {
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
        window.addEventListener("resize", sizeHandler);
      
        return () => {
          window.removeEventListener("scroll", listenFromTop);
          window.removeEventListener("resize", checkWindowSize);
          window.removeEventListener('resize', sizeHandler);
        };
    }, [fromTop, topDistance, width]);

    const { display } = useSelector((store) => store.hide);
    const [isHovering, setIsHovering] = useState(false);

    let repositionBtn = {
        top: width > 768 ? '4.4rem' : '4.8rem',
        right: "var(--right)",
        opacity: width > 580 ? 1 : 0,
    };
    let hideStyle = {
        opacity: isHovering ? 1 : width > 480 ? "var(--semiOpaque)" : 0,
        transition: '0.6s ease',   
    }
    let showStyle = {
        opacity: 1,
        transition: '0.2s ease',
    }
    
    return (
        <StyledAboutBtn style={defaultLayout ? null : repositionBtn}>
            <Link to="aboutSection" 
            smooth={true} 
            duration={500} 
            offset={12}
            delay={20} 
            style={fromTop && !display ? hideStyle : showStyle}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={defaultLayout ? "" : "reStyleLink"}>
                About
            </Link>
        </StyledAboutBtn>
    )
}

const StyledAboutBtn = styled('div')`
    position: fixed;
    z-index: 3;
    top: var(--top);
    right: 14%;
    transform: translate(50%, -80%);
    width: var(--btnWidth);
    transition: 0.6s ease, width 0s;
    a {
        position: relative;
        font-size: calc(0.8rem + 0.4vw);
        font-weight: 200;
        background: transparent;
        border: none;
        color: white;
        cursor: pointer;
        transition: 0.6s ease, font 0s;
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 0rem;
            border: 1px solid var(--col1);
            border-radius: 50%;
            opacity: 0;
            transition: 0.3s ease;
        }
        &:hover {
            &::after {
                opacity: 1;
                padding: 2.4rem;
            }
        }
    }
    .reStyleLink {
        font-size: calc(0.6rem + 0.4vw);
        font-weight: 300;   
        &::after {
            opacity: 0;
            transition: 0s;
        }
        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 0%;
            transform: translate(-400%, -50%);
            padding: 0;
            width: 0rem;
            height: 100%;
            border: 1px solid var(--col1);
            border-radius: 0;
            opacity: 0;
            transition: 0.3s ease;
        }
        &:hover {
            ::after {
                display: none;
            }
            &::before {
                opacity: 1;
                padding: 0;
            }
        }
    }

    @media(max-width: 1080px) {
        right: 16%;
            a {
            &:hover {
                &::after {
                    padding: 1.8rem;
                }
            }
        }
    }

    @media(max-width: 768px) {
        right: 20%;
    }

    @media(max-width: 580px) {
        /* right: 22%; */
        /* display: none; */
        opacity: 0;
        pointer-events: none;
    }
`

export default AboutBtn;