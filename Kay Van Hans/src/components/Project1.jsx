import React from 'react'
import styled from 'styled-components'
import project1 from '../images/graphics/project1.svg';

function Project1({cardOpen, setCardOpen}) {

  return (
    <ScProject1 id={cardOpen ? "active" : null}>
        <div className="card" id={cardOpen ? "active" : null} onClick={() => setCardOpen(prev => !prev)}>
            <h4 className='a11y'>Bonnie’s Dance School</h4>
            <img src={project1} alt="Bonnie's Dance School" />
        </div>
        <div className="case">
            {/* <h4>Project Title</h4> */}
        </div>
    </ScProject1>
  )
}

const ScProject1 = styled('div')`
    /* position: absolute; */
    top: 19%;
    right: 12%;
    /* right: 14rem; */
    margin-left: calc(100% - 36rem);
    width: calc(12rem + 12vw);
    height: calc(14rem + 14vw);
    transition: all 0.8s cubic-bezier(.33,-0.15,.63,1.16) 0.2s;
    z-index: 5;
    .card {
        width: 100%;
        height: 100%;
        background: var(--blue);
        position: relative;
        cursor: pointer;
        transition: 1s ease 0.2s;
        h4 {
            font-size: calc(1rem + 1vw);
        }
        img {
            /* border: 2px solid red; */
            width: 80%;
            position: absolute;
            top: 50%;
            transform: translate(10%, -50%);
        }
        &#active {
            opacity: 0;
            height: 50%;
            width: 50%;
        }
    }

    &#active {
        /* border: 4px solid black; */
        position: fixed;
        top: 0;
        right: 0;
        background: var(--red);
        width: 100vw;
        height: 100vh;
        overflow: scroll;
    }
`

export default Project1