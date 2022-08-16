import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import socialMediaData from "../data/socialMediaData";
import { closeNav } from "../reducers/navReducer";

const MobileNav = () => {
    const dispatch = useDispatch();
    const { navOpen } = useSelector((store) => store.nav);
    const [width, setWidth] = useState(window.innerWidth);

    const handleWidthChange = () => {
        setWidth(window.innerWidth);
        return width > 580 ? dispatch(closeNav()) : null;
    }

    useEffect(() => {
        window.addEventListener('resize', handleWidthChange);

        return () => {
            window.removeEventListener('resize', handleWidthChange);
        }
    }, [width])


    const activeStyle = {
        opacity: 1,
        zIndex: 7,
        transition: '1s ease, width 0s, height 0s',
    }
    const hiddenStyle = {
        opacity: 0,
        zIndex: 7,
        transition: '1s ease, width 0s, height 0s',
    }

    const socialLinkList = socialMediaData.map(obj => (
        <a href={obj.src} className="link">
            <img src={obj.img} alt={obj.name} />
        </a>
    ))

    return (
        <StyledMobileNav style={navOpen ? activeStyle : hiddenStyle}>
            <h2 className="menuTitle">Menu</h2>
            <div className="ringsContainer">
                <svg className="ring" viewBox="0 0 54 54" fill="none">
                    <circle className="strokePath" cx="27" cy="27" r="26"/>
                </svg>
                <svg className="ring" viewBox="0 0 54 54" fill="none">
                    <circle className="strokePath" cx="27" cy="27" r="26"/>
                </svg>
            </div>
            <div className="mainLinks">
                <a href="" className="link">About</a>
                <a href="" className="link">Work</a>
                <a href="" className="link">Resume</a>
            </div>
            <div className="socialLinks">
                {socialLinkList}
            </div>
            <a href="" className="contact">Contact</a>
        </StyledMobileNav>
    )
}

const StyledMobileNav = styled('nav')`
    position: fixed;
    top: 0;
    min-height: 24rem;
    background: #22384300;
    width: 100vw;
    height: 100vh;
    transition: 0.6s ease;
    animation: clear 0.4s linear 0.2s forwards;

    .menuTitle,
    .contact {
        position: absolute;
        /* top: calc(var(--top) - 22px); */
        left: 50%;
        transform: translate(-50%, 100%);
        color: white;
        /* font-size: calc(2rem + 0.2vw); */
        /* font-weight: 100; */
        /* letter-spacing: 0.4rem; */
        opacity: 0;
        animation: menuTitle 1.6s ease forwards;
        &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0%);
            width: 100%;
            height: 100%;
            background: #223843;
            opacity: 0;
            animation: menuTitleAfter 1.6s ease forwards;
        }
    }
    .menuTitle {
        top: calc(var(--top) - 22px);
        font-size: calc(2rem + 0.2vw);
        font-weight: 100;
        letter-spacing: 0.4rem;
        animation-delay: 1.6s;
        pointer-events: none;
        user-select: none;
        &::after {
            animation-delay: 1.6s;
        }
    }
    .contact {
        bottom: 12%;
        font-size: calc(1.4rem + 0.2vw);
        font-weight: 200;
        letter-spacing: 0.1rem;
        animation-delay: 1.2s;
        &::after {
            animation-delay: 1.2s;
        }
    }

    .ringsContainer {
        /* border: 2px solid white; */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8rem;
        height: 16rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .ring {
            /* border: 1px solid white; */
            width: 12rem;
            opacity: 0.2;
            padding: 2rem;
            animation: dim 0.6s ease-in 2s forwards;
            .strokePath {
                stroke: white;
                stroke-width: 1;
                stroke-dasharray: 350px;
                stroke-dashoffset: 350px;   
                filter: blur(0px);
                animation: drawLogo 1.6s ease-in forwards;
            }
            &:nth-of-type(1){
                transform: translate(0, 34%) rotate(-135deg);
                .strokePath {
                    animation-delay: 0s;
                }
            }
            &:nth-of-type(2){
                transform: translate(0, -34%) rotate(-140deg);
                .strokePath {
                    animation-delay: 0.6s;
                }
            }
        }
    }
    .mainLinks,
    .socialLinks {
        /* border: 1px solid white; */
        position: absolute;
        top: 50%;
        transform: translate(0%, -50%);
        display: flex;
        flex-direction: column;
        .link {
            /* border: 1px solid white; */
            position: relative;
            opacity: 1;
            width: 72%;
            color: white;
            margin: 2rem;
            font-size: calc(1rem + 1vw);
            font-weight: 200;
            opacity: 0;
            filter: blur(1);
            animation: fadeIn 2s ease forwards;
            &:nth-of-type(1){
                animation-delay: 0.2s;
            }
            &:nth-of-type(2){
                animation-delay: 0.4s;
            }
            &:nth-of-type(3){
                animation-delay: 0.6s;
            }
            &:hover {
                &::before {
                    opacity: 1;
                }
            }
        }
    }
    .mainLinks {
        left: 12%;
        .link {
            transform: translate(0, -100%);
            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: -12px;
                width: 3px;
                height: 100%;
                background: var(--col1);
                opacity: 0;
                transition: 0.3s ease;
            }
            &:hover {
                &::before {
                    opacity: 1;
                }
            }
        }
    }
    .socialLinks {
        right: 16%;
        .link {
            transform: translate(0, 100%);
            &::after {
                content: "";
                position: absolute;
                top: 0;
                right: 24px;
                width: 3px;
                height: 100%;
                background: var(--col1);
                opacity: 0;
                transition: 0.3s ease;
            }
            &:hover {
                &::after {
                    opacity: 1;
                }
            }
        }
    }

    @keyframes clear {
        50% {
            backdrop-filter: blur(3px);
        }
        100% {
            background: #223843ff;
            backdrop-filter: blur(6px);
        }
    }
    @keyframes drawLogo {
        to {
            filter: blur(1px);
            stroke-dashoffset: 0;
        }
    }
    @keyframes dim {
        to {
            opacity: 0.06;
        }
    }
    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translate(0, 0);
            filter: blur(0);
        }
    }
    @keyframes menuTitle {
        0% {
            opacity: 0;
        }
        90% {
            opacity: 1;
        }
        100% {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
    @keyframes menuTitleAfter {
        0% {
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        100% {
            opacity: 1;
            transform: translate(-50%, 100%);
        }
    }


    @media (max-width: 480px) {
        .contact {
            bottom: 22%;
        }
        .ringsContainer {
            top: 44%;
            .ring {
                width: 8rem;
            }
        }
        .mainLinks,
        .socialLinks {
            top: 44%;
        }
    }
`

export default MobileNav;