import { useSelector } from "react-redux";
import styled from "styled-components";
import uxImg from '../images/photos/uxImg.jpg';
import webImg from '../images/photos/webImg.jpg';

const MouseDivImg = ({posX, posY}) => {
    const { showImg } = useSelector((store) => store.mouseImg);

    const mouseStyle = {
        position: 'absolute',
        top: showImg ? `calc(${posY}px - 2rem)` : null,
        left: showImg ? `calc(${posX}px - 12rem)` : null,
        background: showImg === "uxImg" ? `url(${uxImg})` : showImg ===  'webImg' ? `url(${webImg})` : null,
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