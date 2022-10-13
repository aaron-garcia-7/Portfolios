import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import socialText from '../images/graphics/socialText.svg';
import socialTextWhite from '../images/graphics/socialTextWhite.svg';
import closeText from '../images/graphics/closeText.svg';
import plus from '../images/graphics/plus.svg'
import twitter from '../images/graphics/twitter.svg'
import linkedin from '../images/graphics/linkedin.svg'
import github from '../images/graphics/github.svg'
import styled from 'styled-components'

function SocialMediaBtn({darkTheme, pageWidth}) {
    const [menuOpen, setMenuOpen] = useState(false);

    const bubbleStyle = {
        background: menuOpen ? "var(--red)" : "var(--blue)",
        transform: menuOpen ? 'translate(-50%, -50%) rotate(135deg)' : 'translate(-50%, -50%) rotate(0deg)',
    }

    const toggleSocialText = {
        scale: menuOpen ? "0" : '1',
        transition: '0.8s cubic-bezier(.55,-0.85,.46,1.66)',
    }
    const toggleCloseText = {
        scale: !menuOpen ? "0" : '1',
        transition: '0.8s cubic-bezier(.55,-0.85,.46,1.66)',
    }
    const twitterStyle = {
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen && pageWidth > 1440 ? "scale(1.1)" 
        : menuOpen && pageWidth <= 1440 && pageWidth > 768 ? "scale(0.9)" 
        : menuOpen && pageWidth <= 768 ? "scale(0.7)" 
        : "scale(0)",
        transition: "transform 0.8s cubic-bezier(.56,-0.57,.59,1.32) 0.2s, opacity 1s ease 0.4s",
    }
    const linkedinStyle = {
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen && pageWidth > 1440 ? "scale(1.1)" 
        : menuOpen && pageWidth <= 1440 && pageWidth > 768 ? "scale(0.9)" 
        : menuOpen && pageWidth <= 768 ? "scale(0.7)" 
        : "scale(0)",        transition: "transform 0.8s cubic-bezier(.56,-0.57,.59,1.32) 0.3s, opacity 1s ease 0.5s",
    }
    const githubStyle = {
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen && pageWidth > 1440 ? "scale(1.1)" 
        : menuOpen && pageWidth <= 1440 && pageWidth > 768 ? "scale(0.9)" 
        : menuOpen && pageWidth <= 768 ? "scale(0.7)" 
        : "scale(0)",        transition: "transform 0.8s cubic-bezier(.56,-0.57,.59,1.32) 0.4s, opacity 1s ease 0.6s",
    }

  return (
    <ScSocialMediaBtn>
        {/* <div className="button" tabIndex={2} onTabFocus={() => {setMenuOpen(true)}}> */}
        <div className="button" tabIndex={2}>
            <div className="roundText">
                <img src={darkTheme ? socialTextWhite : socialText} style={toggleSocialText} alt="social" />
                <img src={closeText} style={toggleCloseText} alt="close" />
            </div>
            <div className="bubble" style={bubbleStyle} onClick={() => setMenuOpen(prev => !prev)}>
                <img src={plus} alt="" />
            </div>
        </div>
        <ul>
            <li className='twitterItem' style={twitterStyle}>
                <a href="https://twitter.com/aaron_garcia_7" target="_blank" rel="noreferrer">
                    <img src={twitter} alt="" />
                </a>
            </li>
            <li className='linkedinItem' style={linkedinStyle}>
                <a href="https://www.linkedin.com/in/aaron-garcia-3b7081211/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="" />
                </a>
            </li>
            <li className='githubItem' style={githubStyle}>
                <a href="https://github.com/aaron-garcia-7" target="_blank" rel="noreferrer">
                    <img src={github} alt="" />
                </a>
            </li>
        </ul>
    </ScSocialMediaBtn>
  )
}

const ScSocialMediaBtn = styled('div')`
    /* border: 2px solid black; */
    top: 2rem;
    left: 4vw;
    width: 6rem;
    height: 18rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 6;
    opacity: 0;
    pointer-events: none;
    animation: trueFade 1s ease forwards 3.4s;
    .button {
        /* border: 2px dashed red; */
        position: relative;
        width: 100%;
        height: 33%;
        > * {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .roundText {
            /* width: 4rem; */
            width: calc(4rem + 1vw);
            height: calc(4rem + 1vw);
            transform: translate(-50%, -50%) rotate(0deg);
            animation: textSpin 16s linear infinite;
            img {
                position: absolute;
                width: 100%;
            }
        }
        .bubble {
            width: calc(2rem + 1vw);
            height: calc(2rem + 1vw);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: transform 0.8s cubic-bezier(.55,-0.85,.46,1.66), background 0.6s ease 0.2s;
            img {
                color: var(--light);
                user-select: none;
                width: 1.2rem;
                height: 1.2rem;
            }
        }
    }
    ul {
        /* display: none; */
        /* border: 1px solid black; */
        position: absolute;
        top: 1.4rem;
        left: 1.4rem;
        width: 8rem;
        height: 8rem;
        z-index: -1;
        li {
            position: absolute;
        }
        .twitterItem {
            bottom: 0;
        }
        .linkedinItem {
            bottom: 14%;
            right: 14%;
        }
        .githubItem {
            right: 0;
        }
    }

    @keyframes textSpin {
        to {
            transform: translate(-50%, -50%) rotate(360deg);
            /* rotate: 360deg; */
        }
    }

    @media (max-width: 1440px) {
        ul {
            width: 7.6rem;
            height: 7.6rem;
        }
    }

    @media (max-width: 768px) {
        .button {
            transform: scale(0.8);
        }
        ul {
            width: 6.8rem;
            height: 6.8rem;
            }
        }
    }

    @media (max-width: 520px) {
        /* .button {
            transform: scale(0.8);
        } */
        ul {
            top: 1.8rem;
            left: 1.8rem;
            width: 6rem;
            height: 6rem;
        }
    }
`

export default SocialMediaBtn