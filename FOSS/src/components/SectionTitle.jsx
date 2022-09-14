import { useState, useEffect } from 'react';
import styled from "styled-components";

const SectionTitle = ({title, mid}) => {
    const [width, setWidth] = useState(window.innerWidth);

    const checkWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', checkWidth);

        return () => window.removeEventListener('resize', checkWidth);
    }, [width])

    let midStyle = {
        top: width > 1440 ? '14rem' : width <=1440 && width > 1220 ? '12rem' : width <= 1220 && width > 768 ? '10rem' : '8rem',
    }

    return (
        <StyledSectionTitle style={mid ? midStyle : null}>
        {/* <StyledSectionTitle> */}
            <h2 className="title">{title}</h2>
        </StyledSectionTitle>
    )
}

const StyledSectionTitle = styled('div')`
    position: absolute;
    top: 10rem;
    left: var(--leftBody);
    transform: translate(0%, -100%);
    opacity: 0;
    filter: blur(12px);
    animation: blurIn 1s ease forwards;
    .title {
        position: relative;
        font-size: calc(1rem + 1vw);
        font-weight: 200;
        letter-spacing: 0.4vw;
        &::after {
            position: absolute;
            content: "";
            left: 0;
            bottom: 0;
            /* transform: translate(-50%, 0); */
            width: 0%;
            height: 3px;
            background: var(--col1);
            animation: dashGrow 0.6s 0.6s ease forwards;
        }
    }

    // Animations blurIn & dashGrow are found in the GlobalStyles.js

    @media(max-width: 768px) {
        top: 8rem;
    }

    @media(max-width: 480px) {
        left: var(--leftMobile);
    }
`

export default SectionTitle;