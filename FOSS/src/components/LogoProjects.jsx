import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LogoProjects = ({setToggle}) => {
    const [fromTop, setFromTop] = useState(false);
    const [topDistance, setTopDistance] = useState(800);
    const [width, setWidth] = useState(window.innerWidth);

    const checkWindowSize = () => {
        setWidth(window.innerWidth);
        return width > 1440 
        ? setTopDistance(800)
        : width <= 1440 && width > 768
        ? setTopDistance(200)
        : width <= 768 
        ? setTopDistance(80)
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
      }, [width, fromTop, topDistance]);

      const { display } = useSelector((store) => store.hide);
      const [isHovering, setIsHovering] = useState(false);

      let hideStyle = {
        opacity: isHovering ? 1 : width > 480 ? "var(--opaque)" : 0,
        // transition: isHovering ? '0.6s ease' : '0.6s ease 1s',
        transition: '0.6s ease',
      }
      let showStyle = {
        opacity: 1,
        transition: '0.2s ease 0s',
      }

    return (
        <StyledLogoProjects
        //   style={fromTop && !display ? hideStyle : showStyle} 
          style={fromTop && width <= 580 ? hideStyle : showStyle}  
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={() => setToggle(prev => !prev)}
        >
            <div className="circle" />
            <div className="circle" />
        </StyledLogoProjects>
    )
}

const StyledLogoProjects = styled('div')`
    border-radius: 50%;
    position: fixed;
    top: var(--top);
    left: var(--left);
    transform: translate(-50%, -50%);
    height: 5.8rem;
    width: 5.8rem;
    cursor: pointer;
    z-index: 5;
    transition: 0.6s ease;
    /* background: white; */
    /* background: transparent; */
    mix-blend-mode: exclusion;
    .circle {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 1.6rem;
        border: 2px solid white;
        border-radius: 50%;
        transition: 0.6s ease, transform 0.3s;

        &:nth-last-of-type(1){
            transform: translate(-50%, -80%);
        }
        &:nth-last-of-type(2){
            transform: translate(-50%, -20%);
        }
    }
    &:hover {
        .circle {
            &:nth-last-of-type(1){
                transform: translate(-50%, -50%);
            }
            &:nth-last-of-type(2){
                transform: translate(-50%, -50%);
            }
        }
    }

    @media (max-width: 768px){
        .circle {
            border: 1px solid white;
            padding: 1.2rem;
        }
    }

    @media (max-width: 480px){
        left: 12%
    }
`

export default LogoProjects;