import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";

import styled from 'styled-components'

function ProjectCard({id, title, name1, name2, name3, img, role, role2, date, url, setCardHover, setCardHover2, setCardHover3}) {
    
    // Parallax Effect
    const [offset, setOffset] = useState(0);
    const parallaxScroll = () => {
        setOffset(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener("scroll", parallaxScroll);
        return () => window.removeEventListener("scroll", parallaxScroll);
    }, [offset]);
    const parallaxStyleText = {
        transform: `translate(0, ${offset * -0.05}px)`,
    };
    // End Parallax

  return (
    <ScProjectCard id={id === 1 ? "card1" : id === 2 ? "card2" : id === 3 ? "card3" : "card4"}>
        {id === 2 ?
            <NavLink to={url} 
            onMouseEnter={
                () => {
                    setCardHover(true)
                    setCardHover2(true)
                }
            } 
            onMouseLeave={() => {
                setCardHover(false)
                setCardHover2(false)
            }} 
            >
            <figure className="card" style={{background: id === 1 ? "var(--blue)" : id === 2 ? "var(--red)" : id === 3 ? "#121212" : "var(--blue)"}}>
                <figcaption className='a11y'>{title}</figcaption>
                <img src={img} alt={title} />
            </figure>
        </NavLink> : id === 3 ?
        <NavLink to={url} 
            onMouseEnter={
                () => {
                    setCardHover(true)
                    setCardHover3(true)
                }
            } 
            onMouseLeave={() => {
                setCardHover(false)
                setCardHover3(false)
            }} 
            >
            <figure className="card" style={{background: id === 1 ? "var(--blue)" : id === 2 ? "var(--red)" : id === 3 ? "#121212" : "var(--blue)"}}>
                <figcaption className='a11y'>{title}</figcaption>
                <img src={img} alt={title} />
            </figure>
        </NavLink> :
        <NavLink to={url} 
            onMouseEnter={
                () => {
                    setCardHover(true)
                }
            } 
            onMouseLeave={() => {
                setCardHover(false)
            }} 
            >
            <figure className="card" style={{background: id === 1 ? "var(--blue)" : id === 2 ? "var(--red)" : id === 3 ? "#121212" : "var(--blue)"}}>
                <figcaption className='a11y'>{title}</figcaption>
                <img src={img} alt={title} />
            </figure>
        </NavLink>
        
        }
        {<aside className="sideText1" style={parallaxStyleText}>
        <h3 className="a11y">{title}</h3>
        <h3 className={id === 3 || id === 4 ? "singleLine" : null}><span>{name1}</span><br /><span>{name2}</span><br /><span>{name3}</span></h3>
        <p className='role1'>{role}</p>
        <p className='role2'>{role2}</p>
        <p className='cardDate'>{date}</p>
      </aside>}
        <aside className="sideText2">
        <h3 className="a11y">{title}</h3>
        <h3>{title}</h3>
        <p className='role1'>{role}{role2 && ` + ${role2}`}</p>
        <p className='cardDate'>{date}</p>
      </aside>
    </ScProjectCard>
  )
}

const ScProjectCard = styled('div')`
    width: calc(14rem + 14vw);
    height: calc(16rem + 16vw);
    .card {
        position: relative;
        width: 100%;
        height: 100%;
        transition: 0.4s ease;
        /* cursor: none; */
        img {
            position: absolute;
            top: 50%;
            left: 50%;
        }
    }
    .sideText1 {
        position: absolute;
        transition: transform 1s cubic-bezier(.18,.79,.49,1);
        > * {
            font-family: "Raleway", sans-serif;
            text-transform: uppercase;
        }
        h3 {
            span {
                position: relative;
                font-size: calc(1rem + 1vw);
                font-weight: 300;
                letter-spacing: 0.2rem;
                &::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    width: 0%;
                    height: 108%;
                    background: var(--smartBg);
                    /* background: red; */
                }
            }
        }
        .singleLine {
            transform: translate(0, 2rem);
        }
        p {
            font-size: calc(0.5rem + 0.4vw);
            font-weight: 400;
        }
        .role1 {
            margin-top: 1.6rem;
        }
        .role2 {
            margin-bottom: 0.6rem;
        }
        .cardDate {
            font-family: 'Lato', sans-serif;
            font-weight: 600;
        }
    }
    .sideText2 {
        display: none;
    }
    a {
        &:hover,
        &:focus {
            & ~ .sideText1 {
                /* border: 1px dashed grey; */
                h3 {
                    span {
                        &::before {
                            animation: highlight 0.6s ease forwards;
                        }
                        &:nth-of-type(2){
                            &::before {
                                animation-delay: 0.06s;
                            }
                        }
                        &:nth-of-type(3){
                            &::before {
                                animation-delay: 0.12s;
                            }
                        }
                    }
                }
            }
        }
    }

    @keyframes highlight {
        0% {
            left: -2px;
            right: auto;
            width: 0%;
        }
        45% {
            left: -2px;
            right: auto;
            width: 100%;
        }
        55% {
            left: auto;
            right: 0;
            width: 100%;
        }
        100% {
            left: auto;
            right: 0;
            width: 0%;
        }
    }

    @media (max-width: 768px) {
        width: calc(18rem + 18vw);
        height: calc(20rem + 20vw);
        text-align: left;

        .sideText1 {
            display: none;
        }
        .sideText2 {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(0, 0) !important;
            width: 100%;
            height: 100%;
            text-align: left !important;
            z-index: -1;
            > * {
                position: absolute;
                font-family: "Raleway", sans-serif;
                text-transform: uppercase;
            }
            h3 {
                transform: translate(0, -140%);
                font-size: calc(1rem + 1vw);
                font-weight: 300;
                letter-spacing: 0.1rem;
            }
            p {
                bottom: 0;
                font-size: calc(0.5rem + 0.6vw);
            }
            .role1 {
                transform: translate(0, 160%);
            }
            .role2 {
            }
            .cardDate {
                right: 0;
                font-family: 'Lato', sans-serif;
                font-weight: 600;
                transform: translate(68%, -200%) rotate(90deg);
                letter-spacing: 0.1rem;
            }
        }        
    }

    @media (max-width: 480px) {
        width: calc(16rem + 16vw);
        height: calc(18rem + 18vw);
    }
`

export default ProjectCard