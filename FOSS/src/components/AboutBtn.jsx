import { useSelector } from "react-redux";
import styled from "styled-components";

const AboutBtn = () => {
    const { defaultLayout } = useSelector((store) => store.layout);

    let repositionBtn = {
        top: '4.6rem',
        right: "var(--right)",
    };
    
    return (
        <StyledAboutBtn style={defaultLayout ? null : repositionBtn}>
            <button className={defaultLayout ? "" : "reStyleBtn"}>About</button>
        </StyledAboutBtn>
    )
}

const StyledAboutBtn = styled('div')`
    position: fixed;
    z-index: 3;
    top: var(--top);
    right: 14%;
    transform: translate(50%, -80%);
    width: var(--btnWidth);
    transition: 0.6s ease, width 0s;
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
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 0rem;
            border: 1px solid white;
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
    .reStyleBtn {
        font-size: calc(0.6rem + 0.4vw);
        font-weight: 300;   
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

    @media(max-width: 1080px) {
        right: 18%;
    }

    @media(max-width: 768px) {
        right: 20%;
    }

    @media(max-width: 480px) {
        right: 22%;
    }
`

export default AboutBtn;