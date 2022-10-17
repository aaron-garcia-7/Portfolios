import React from 'react'
import { NavLink } from "react-router-dom";

import styled from 'styled-components'

function ProjectCard({id, title, name1, name2, name3, img, role, role2, date, url, cardHover, setCardHover}) {
  return (
    <ScProjectCard id={id === 1 ? "card1" : id === 2 ? "card2" : id === 3 ? "card3" : "card4"}>
        <NavLink to={url} onMouseEnter={() => setCardHover(true)} onMouseLeave={() => setCardHover(false)}>
            <figure className="card" style={{background: id === 1 ? "var(--blue)" : id === 2 ? "var(--red)" : id === 3 ? "#121212" : "var(--blue)"}}>
                <figcaption className='a11y'>{title}</figcaption>
                <img src={img} alt={title} />
            </figure>
        </NavLink>
        {<aside className="sideText1">
        <h3 className="a11y">{title}</h3>
        <h3>{name1} {name2 && <span><br />{name2}</span>} {name3 && <span><br />{name3}</span>}</h3>
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
        cursor: none;
        img {
            position: absolute;
            top: 50%;
            left: 50%;
        }
    }
    .sideText1 {
        position: absolute;
        padding: 0 calc(0.4rem + 1.4vw);
        > * {
            font-family: "Raleway", sans-serif;
            text-transform: uppercase;
        }
        h3 {
            font-size: calc(1rem + 1vw);
            font-weight: 300;
            letter-spacing: 0.2rem;
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
            /* padding: 0 calc(0.4rem + 1.4vw); */
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
                /* font-weight: 400; */
            }
            .role1 {
                transform: translate(0, 160%);
                /* margin-top: 1.6rem; */
            }
            .role2 {
                /* margin-bottom: 0.6rem; */
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