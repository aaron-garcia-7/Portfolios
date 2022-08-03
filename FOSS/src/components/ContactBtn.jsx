import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import styled from "styled-components";

const ContactBtn = () => {
    const { defaultLayout } = useSelector((store) => store.layout);

    // Dynamic contact reposition after scroll
    let [width, setWidth] = useState(window.innerWidth);
    const sizeHandler = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", sizeHandler);

        return () => {
            window.removeEventListener('resize', sizeHandler);
        }
    }, [width])

    let repositionBtn = {
        bottom: '6%',
        right: width > 768 ? '8%' : '12%',
        transform: 'translate(50%, 0%)',
        position: 'fixed',
    };

    return (
        <StyledContactBtn style={defaultLayout ? null : repositionBtn}>
            <button className={defaultLayout ? "" : "reStyledBtn"}>Contact</button>
        </StyledContactBtn>
    )
}

const StyledContactBtn = styled('div')`
    z-index: 3;
    position: absolute;
    bottom: 28%;
    right: 55%;
    transform: translate(50%, 0);
    transition: 0.6s ease;
    button {
        font-size: calc(0.8rem + 0.4vw);
        font-weight: 200;
        padding: 0.4rem calc(0.2rem + 2vw);
        background: transparent;
        border: 3px solid var(--col1);
        color: white;
        border-radius: 2rem;
        cursor: pointer;
        transition: all 0.3s ease, padding 0.6s ease;
        &:hover {
            font-weight: 300;
            background: var(--col1);
            color: var(--col2);
        }
    }
    .reStyledBtn {
        padding: 0.4rem calc(0.2rem + 0.6vw);
    }
    
    @media(max-width: 1440px) {
        right: 56%;
        button {
        padding: 0.2rem calc(0.2rem + 2vw);
        }
    }

    @media(max-width: 1080px) {
        right: 58%;
        bottom: 30%;
    }

    @media(max-width: 768px) {
        right: 60%;
        bottom: 32%;
    }

    @media(max-width: 480px) {
        right: 64%;
        bottom: 34%;
        .reStyledBtn {
            padding: 0.1rem calc(0.4rem + 0.6vw);
            font-weight: 300;
        }
    }

    // Height
    @media(max-height: 600px) {
        display: none;
    }
`

export default ContactBtn;