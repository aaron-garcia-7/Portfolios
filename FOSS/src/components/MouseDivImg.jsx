import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import styled from "styled-components";
import uxImg from '../images/photos/uxImg.jpg';
import webImg from '../images/photos/webImg.jpg';
import proj1Img from '../images/photos/proj1Img.png'
import proj2Img from '../images/photos/proj2Img.png'
import proj3Img from '../images/photos/proj3Img.png'

const MouseDivImg = ({posX, posY, inResume}) => {
    const { showImg } = useSelector((store) => store.mouseImg);

    const [width, setWidth] = useState(window.innerWidth);

    const checkWidth = () => {
      setWidth(window.innerWidth);
      console.log("testing");
    };
  
    useEffect(() => {
      window.addEventListener("resize", checkWidth);
  
      return () => window.removeEventListener("resize", checkWidth);
    }, [width]);

    const mouseStyle = {
        position: 'absolute',
        top: showImg ? `calc(${posY}px - 2rem)` : null,
        left: showImg ? `calc(${posX}px - 12rem)` : null,
        background: showImg === "uxImg" ? `url(${uxImg})` : showImg ===  'webImg' ? `url(${webImg})` : showImg === "proj1Img" ? `url(${proj1Img})` : showImg === "proj2Img" ? `url(${proj2Img})` : showImg === "proj3Img" ? `url(${proj3Img})` : null,
        transform: inResume && width > 768 ? `translate(0, -40%) scale(0.6)` : inResume && width <= 768 ? `translate(0, -40%) scale(0.3)` : null,
        mixBlendMode: inResume ? 'exclusion' : null,
    }

    return (
        <StyledMouseDivImg style={mouseStyle}>
            <div className="inner" />
        </StyledMouseDivImg>
    )
}

const StyledMouseDivImg = styled('div')`
    background-size: cover;
    width: 38rem;
    height: 26rem;
    border-radius: 0.8rem;
    z-index: 9;
    opacity: 0;
    pointer-events: none;
    transition: 0.4s linear;
    mix-blend-mode: color-dodge;
    /* mix-blend-mode: exclusion; */
    animation: fadeImg 0.6s ease forwards;

    @keyframes fadeImg {
        to {
            opacity: 0.5;
        }
    }

    @media(max-width: 1440px) {
        transform: scale(0.7) translate(-20%, -20%);
    }

    @media(max-width: 768px) {
        transform: scale(0.7) translate(-20%, -40%);
    }

    @media(max-width: 580px) {
        transform: scale(0.3) translate(-56%, -120%);
    }

    @media(max-width: 480px) {
        display: none;
    }
`

export default MouseDivImg;