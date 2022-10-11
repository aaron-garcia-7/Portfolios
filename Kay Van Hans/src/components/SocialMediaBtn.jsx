import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import socialText from '../images/graphics/socialText.svg';
import socialTextWhite from '../images/graphics/socialTextWhite.svg';
import closeText from '../images/graphics/closeText.svg';
import styled from 'styled-components'

function SocialMediaBtn({darkTheme}) {
    const [menuOpen, setMenuOpen] = useState(false);

    const bubbleStyle = {
        background: menuOpen ? "var(--red)" : "var(--blue)",
        transform: menuOpen ? 'translate(-50%, -50%) rotate(135deg)' : 'translate(-50%, -50%) rotate(0deg)',
    }

    const toggleSocial = {
        scale: menuOpen ? "0" : '1',
        transition: '0.8s cubic-bezier(.55,-0.85,.46,1.66)',
    }
    const toggleClose = {
        scale: !menuOpen ? "0" : '1',
        transition: '0.8s cubic-bezier(.55,-0.85,.46,1.66)',
    }

  return (
    <ScSocialMediaBtn>
        <div className="button">
            <div className="roundText">
                <img src={darkTheme ? socialTextWhite : socialText} style={toggleSocial} alt="social" />
                <img src={closeText} style={toggleClose} alt="close" />
            </div>
            <div className="bubble" style={bubbleStyle} onClick={() => setMenuOpen(prev => !prev)}>
                <p>+</p>
            </div>
        </div>
        <ul>
            <li>
                <a href="">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
            </li>
            <li>
                <a href="">
                    <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>
            </li>
            <li>
                <a href="">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </li>
        </ul>
    </ScSocialMediaBtn>
  )
}

const ScSocialMediaBtn = styled('div')`
    /* border: 2px solid black; */
    top: 1rem;
    left: 4vw;
    width: 6rem;
    height: 18rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 6;
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
            /* background: var(--blue); */
            width: calc(2rem + 1vw);
            height: calc(2rem + 1vw);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: transform 0.8s cubic-bezier(.66,-0.55,.46,1.46), background 0.6s ease;
            transition: transform 0.8s cubic-bezier(.55,-0.85,.46,1.66), background 0.6s ease 0.2s;
            p {
                color: var(--light);
                font-size: calc(1.2rem + 1vw);
                margin-bottom: 0.1rem;
                user-select: none;
            }
        }
    }
    ul {
        display: none;
    }

    @keyframes textSpin {
        to {
            transform: translate(-50%, -50%) rotate(360deg);
            /* rotate: 360deg; */
        }
    }
`

export default SocialMediaBtn