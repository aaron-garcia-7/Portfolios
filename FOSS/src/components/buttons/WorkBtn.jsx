import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import styled from "styled-components";

const WorkBtn = () => {
    const { defaultLayout } = useSelector((store) => store.layout);

    let repositionBtn = {
        top: "6.4rem",
        right: "var(--right)",
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
        opacity: isHovering ? 1 : window.innerWidth > 480 ? "var(--semiOpaque)" : 0,
        // transition: isHovering ? '0.6s ease' : '0.6s ease 1.6s',
        transition: '0.6s ease',   
    }
    let showStyle = {
        opacity: 1,
        transition: '0.2s ease',
    }

    return (
        <StyledWorkBtn style={defaultLayout ? null : repositionBtn}>
            <Link to="workSection" 
            smooth={true} 
            duration={500} 
            delay={20} 
            offset={window.innerWidth > 768 ? 40 : 28}
            style={fromTop && !display ? hideStyle : showStyle}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={defaultLayout ? "" : "reStyleLink"}
            tabIndex="1"
            >
                Work
            </Link>
        </StyledWorkBtn>
    )
}

const StyledWorkBtn = styled('div')`
    /* border: 2px solid red; */
    position: fixed;
    z-index: 3;
    top: var(--top);
    right: 8%;
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
            a {
            &:hover {
                &::after {
                    padding: 1.8rem;
                }
            }
        }
    }

    @media (max-width: 580px) {
        opacity: 0;
        pointer-events: none;
    }

`

export default WorkBtn;