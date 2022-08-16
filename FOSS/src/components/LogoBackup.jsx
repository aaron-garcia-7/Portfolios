import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const Logo = ({setToggle}) => {
    const [fromTop, setFromTop] = useState(false);
    const [scrollDown, setScrollDown] = useState(false);
    const [y, setY] = useState(window.scrollY);

    const listenFromTop = () => {
        window.scrollY > 520 ? setFromTop(true) : setFromTop(false);
      }

    const handleNavHide = useCallback(
        e => {
          const window = e.currentTarget;
          if (y > window.scrollY) {
            setScrollDown(false);
          } else if (y < window.scrollY) {
            setScrollDown(true);
          }
          setY(window.scrollY);
        }, [y]
      );

      useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavHide);
        window.addEventListener("scroll", listenFromTop);
      
        return () => {
          window.removeEventListener("scroll", handleNavHide);
          window.removeEventListener("scroll", listenFromTop);
        };
      }, [handleNavHide]);

      let hideStyle = {
        opacity: "var(--opaque)",
        pointerEvents: "none",
        transition: '0.6s ease',
      }
      let showStyle = {
        opacity: 1,
        pointerEvents: "all",
        transition: '0.2s ease',
      }

    return (
        <StyledLogo style={fromTop && scrollDown ? hideStyle : showStyle} onClick={() => setToggle(prev => !prev)}>
            <div className="circle" />
            <div className="circle" />
        </StyledLogo>
    )
}

const StyledLogo = styled('div')`
    /* border: 2px solid red; */
    border-radius: 50%;
    position: fixed;
    top: var(--top);
    left: var(--left);
    transform: translate(-50%, -50%);
    height: 5.8rem;
    width: 5.8rem;
    cursor: pointer;
    z-index: 2;
    transition: 0.6s ease;
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
            /* &:nth-last-of-type(1){
                top: 16%;
            }
            &:nth-last-of-type(2){
                top: -16%;
            } */
        }
        /* &:hover {
            .circle {
                &:nth-last-of-type(1){
                    transform: translate(-50%, -50%);
                }
                &:nth-last-of-type(2){
                    transform: translate(-50%, -50%);
                }
            }
        } */
    }

    @media (max-width: 768px){
        left: 12%;
    }
`

export default Logo;