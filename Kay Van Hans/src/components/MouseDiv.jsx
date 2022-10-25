import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function MouseDiv({cardHover}) {

    const [posX, setPosX] = useState(window.pageX);
    const [posY, setPosY] = useState(window.pageY);

    const locateMouse = e => {
        setPosX(e.pageX);
        setPosY(e.pageY);
    }

    useEffect(() => {
        setPosY(window.scrollY);
        window.addEventListener('mousemove', locateMouse);

        return () => window.removeEventListener('mousemove', locateMouse);
    }, [])

  const mouseStyle = {
    top: `calc(${posY}px - 108vh)`,
    left: `calc(${posX}px - calc(2rem + 1vw))`,
    opacity: cardHover ? 1 : 0,
    transform: cardHover ? 'scale(1)' : 'scale(0)',
  }

  return (
    <ScMouseDiv style={mouseStyle}>
        <p>View Case</p>
    </ScMouseDiv>
  )
}

const ScMouseDiv = styled('div')`
    position: absolute;
    background: var(--light);
    width: calc(4rem + 2vw);
    height: calc(4rem + 2vw);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    /* transition: 0.8s cubic-bezier(.21,.89,.57,.99), opacity 0.3s; */
    transition: 1s cubic-bezier(.15,1.1,.54,1.08), opacity 0.3s;
    p {
        color: var(--red);
        text-transform: uppercase;
        font-size: calc(0.4rem + 0.4vw);
        letter-spacing: 0.08rem;
    }

`

export default MouseDiv