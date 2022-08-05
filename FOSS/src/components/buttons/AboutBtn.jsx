import { useState, useEffect, useCallback } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import styled from "styled-components";

const AboutBtn = () => {
    const { defaultLayout } = useSelector((store) => store.layout);

    let repositionBtn = {
        top: '4.6rem',
        right: "var(--right)",
    };

    // Hide on Scroll
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
        <StyledAboutBtn style={defaultLayout ? null : repositionBtn}>
            <Link to="aboutSection" 
            smooth={true} 
            duration={500} 
            delay={20} 
            style={fromTop && scrollDown ? hideStyle : showStyle}
            className={defaultLayout ? "" : "reStyleLink"}>
                About
            </Link>
        </StyledAboutBtn>
    )
}

const StyledAboutBtn = styled('div')`
    /* border: 2px solid red; */
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

    @media(max-width: 480px) {
        right: 22%;
    }
`

export default AboutBtn;