import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faComment } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const ContactBtn = ({pageWidth}) => {
    const { defaultLayout } = useSelector((store) => store.layout);

    // The note below is now handled by the prop 'pageWidth' This is to reduce repeated code.
    
    // Dynamic button reposition after window resize
    // let [width, setWidth] = useState(window.innerWidth);
    // const sizeHandler = () => {
    //     setWidth(window.innerWidth);
    // }
    // useEffect(() => {
    //     window.addEventListener("resize", sizeHandler);
    //     return () => {
    //         window.removeEventListener('resize', sizeHandler);
    //     }
    // }, [width])

    let repositionBtn = {
        bottom: pageWidth > 1440 ? '8%' : '7%',
        right: pageWidth > 768 ? '8%' : '10%',
        transform: pageWidth <= 580 ? 'translate(70%, 0%)' : 'translate(50%, 0%)',
        position: 'fixed',
    };

    // Hide on Scroll
    const [fromTop, setFromTop] = useState(false);
    const [atBottom, setAtBottom] = useState(false);
    const [topDistance, setTopDistance] = useState(800);

    const checkWindowSize = () => {
        return pageWidth > 1440 
          ? setTopDistance(800)
          : pageWidth <= 1440 && pageWidth > 768
          ? setTopDistance(580)
          : pageWidth <= 768 
          ? setTopDistance(360)
          : 0
      }

    const listenFromTop = () => {
        window.scrollY > topDistance ? setFromTop(true) : setFromTop(false);
    }

    const listenFromBottom = () => {
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 60 ? setAtBottom(true) : setAtBottom(false);
      }

    useEffect(() => {
        window.addEventListener("scroll", listenFromTop);
        window.addEventListener("scroll", listenFromBottom);
        window.addEventListener("resize", checkWindowSize);

        return () => {
            window.removeEventListener("scroll", listenFromTop);
            window.removeEventListener("scroll", listenFromBottom);
            window.removeEventListener("resize", checkWindowSize);
        };
    }, [fromTop, topDistance]);
    
    const { display } = useSelector((store) => store.hide);
    const [isHovering, setIsHovering] = useState(false);

    let hideStyle = {
        opacity: isHovering ? 1 : window.innerWidth > 580 ? "var(--opaque)" : 1,
        transition: '0.6s ease',  
        border: pageWidth <= 580 && !defaultLayout ? 'none' : null,
  
    }
    let showStyle = {
        opacity: 1,
        transition: '0.2s ease',
        border: pageWidth <= 580 && !defaultLayout ? 'none' : null,
    }
    let bottomStyle = {
        opacity: 1,
        border: pageWidth <= 580 && !defaultLayout ? "none" : null,
    }

    return (
        <StyledContactBtn style={defaultLayout ? null : repositionBtn}>
            <a 
                // style={fromTop && !display ? hideStyle : showStyle} 
                href="mailto:aaronegarcia1@gmail.com"
                style={fromTop && !display && !atBottom ? hideStyle : atBottom ? bottomStyle : showStyle} 
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={defaultLayout ? "" : "reStyledLink"}
                tabIndex="2"
            >
                {pageWidth <= 580 && !defaultLayout ? <FontAwesomeIcon icon={faEnvelope}/> : "Contact" }
            </a>
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
    a {
        font-size: calc(0.8rem + 0.4vw);
        /* font-weight: 300; */
        padding: 0.4rem calc(0.2rem + 2vw);
        background: transparent;
        border: 3px solid var(--col1);
        color: white;
        border-radius: 2rem;
        cursor: pointer;
        transition: all 0.3s ease, padding 0.6s ease;
        &:hover {
            /* font-weight: 300; */
            background: var(--col1);
            color: var(--col2);
        }
    }
    .reStyledLink {
        padding: 0.4rem calc(0.2rem + 0.6vw);
    }
    
    @media(max-width: 1440px) {
        /* bottom: 27.6%; */
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
        bottom: 31.8%;
    }

    @media(max-width: 580px) {
        right: 63%;
        bottom: 30%;
        .reStyledLink {
            padding: 0.4rem 0.6rem;
            font-weight: 300;
        }
    }

    // Height
    @media(max-height: 600px) {
        bottom: 17%;
    }
    @media(max-height: 480px) {
        display: none;
    }
`

export default ContactBtn;