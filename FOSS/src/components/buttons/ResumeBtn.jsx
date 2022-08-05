import { useState, useEffect, useCallback } from 'react';
import { useSelector } from "react-redux";
import styled from "styled-components";

const ResumeBtn = () => {
    const { defaultLayout } = useSelector((store) => store.layout);

    let repositionBtn = {
        bottom: "calc(100% - 10rem)",
        right: "var(--right)",
        position: 'fixed',
        width: "var(--btnWidth)",
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
        <StyledResumeBtn style={defaultLayout ? null : repositionBtn}>
            <button style={fromTop && scrollDown ? hideStyle : showStyle} className={defaultLayout ? "" : "reStyleBtn"}>
                Resume
            </button>
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
    transition: 0.6s ease;
    cursor: pointer;
    animation: resumeBtn 1s ease forwards;
    button {
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
            bottom: -12%;
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
        font-weight: 300;
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

    @keyframes collapseIn {
        0% {
            width: 100%;
        }
        40% {
            width: 40%;
        }
        60% {
            width: 56%;
        }
        100% {
            width: 50%;
        }
    }
    @keyframes collapseOut {
        0% {
            width: 50%;
        }
        40% {
            width: 110%;
        }
        60% {
            width: 94%;
        }
        100% {
            width: 100%;
        }
    }


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
    @media(max-width: 480px) {
        right: 36%;
        bottom: 34%;
    }

    // Height
    @media(max-height: 600px) {
        display: none;
    }

`

export default ResumeBtn;