import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-scroll';
import styled from "styled-components";

const ResumeBtn = () => {
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
        
        return () => {
            window.removeEventListener("scroll", listenFromTop);
            window.removeEventListener("resize", checkWindowSize);
        };
    }, [fromTop, topDistance]);
    
    const { display } = useSelector((store) => store.hide);
    const [isHovering, setIsHovering] = useState(false);

    let repositionBtn = {
        bottom: width > 768 ? "calc(100% - 8.6rem)" : "calc(100% - 8.2rem)",
        right: "var(--right)",
        position: 'fixed',
        width: "var(--btnWidth)",
        opacity: width <= 580 ? 0 : 1,
        pointerEvents: width <= 580 ? 'none' : 'all',
    };
    let hideStyle = {
        opacity: isHovering ? 1 : width > 480 ? "var(--semiOpaque)" : 0,
        // transition: isHovering ? '0.6s ease' : '0.6s ease 1.6s',
        transition: '0.6s ease',    
    }
    let showStyle = {
        opacity: 1,
        transition: '0.2s ease',
    }
    
    return (
        <StyledResumeBtn style={defaultLayout ? null : repositionBtn}>
            <Link to="resumeSection"
            smooth={true} 
            duration={500} 
            delay={20} 
            offset={window.innerWidth > 768 ? 60 : 28}
            style={fromTop && !display ? hideStyle : showStyle}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={defaultLayout ? "" : "reStyleBtn"}
            tabIndex={defaultLayout ? 2 : 1}
            >
                Resume
            </Link>
        </StyledResumeBtn>
    )
}

const StyledResumeBtn = styled('div')`
    /* border: 2px solid red; */
    z-index: 3;
    position: absolute;
    bottom: 28%;
    right: 45%;
    transform: translate(50%, 0);
    transition: 0.6s ease, width 0s;
    /* cursor: pointer; */
    a {
        position: relative;
        font-size: calc(0.8rem + 0.4vw);
        /* font-weight: 200; */
        background: transparent;
        border: none;
        color: white;
        cursor: pointer;
        transition: 0.6s ease, font 0s;
        &::after {
            content: "";
            position: absolute;
            bottom: -24%;
            left: 50%;
            transform: translate(-50%, 0);
            width: 100%;
            height: 3px;
            background: var(--col1);
            pointer-events: none;
            transition: 0.3s ease;
            animation: collapseOut 0.6s ease forwards;
        }
        &:hover {
            &::after {
                /* bottom: -24%; */
                /* width: 50%; */
                animation: collapseIn 0.6s ease forwards;
            }
        }
    }
    .reStyleBtn {
        font-size: calc(0.6rem + 0.4vw);
        /* font-weight: 300; */
        animation: resumeBtn 0.4s ease forwards;
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
            &::before {
                opacity: 1;
                padding: 0;
            }
        }
    }

    // Keyframes 'collapseIn' & 'collapseOut' are located in the Global Styles


    @media(max-width: 1440px) {
        right: 44%;
    }
    @media(max-width: 1080px) {
        right: 42%;
        bottom: 30%;
    }
    @media(max-width: 768px) {
        right: 40%;
        bottom: 32%;
    }
    @media(max-width: 580px) {
        right: 36%;
        bottom: 30%;
    }

    // Height
    @media(max-height: 600px) {
        bottom: 17.2%;
    }
    @media(max-height: 480px) {
        display: none;
    }

`

export default ResumeBtn;