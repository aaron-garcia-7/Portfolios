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

    let reStyleBtn = {
        fontSize: "calc(0.6rem + 0.4vw)",
    }
    
    return (
        <StyledResumeBtn style={defaultLayout ? null : repositionBtn}>
            <button className={defaultLayout ? "" : "reStyleBtn"}>Resume</button>
        </StyledResumeBtn>
    )
}

const StyledResumeBtn = styled('div')`
    /* border: 2px solid red; */
    z-index: 3;
    position: absolute;
    bottom: 29%;
    right: 45%;
    transform: translate(50%, 0);
    transition: 0.6s ease;
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
            transition: 0.3s ease;
        }
        &:hover {
            &::after {
                bottom: -24%;
            }
        }
    }
    .reStyleBtn {
        font-size: calc(0.6rem + 0.4vw);
        font-weight: 300;
        animation: resumeBtn 0.4s ease forwards;
        &::after {
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
            &::after {
                opacity: 1;
                padding: 0;
            }
        }
    }


    @media(max-width: 1440px) {
        right: 44%;
    }
    @media(max-width: 1080px) {
        right: 42%;
        bottom: 31%;
    }
    @media(max-width: 768px) {
        right: 40%;
        bottom: 33%;
    }
    @media(max-width: 480px) {
        right: 36%;
        bottom: 35%;
    }

    // Height
    @media(max-height: 600px) {
        display: none;
    }

`

export default ResumeBtn;