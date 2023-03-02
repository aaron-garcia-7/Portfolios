import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

function SkillsCard({cardNum, setCardNum, darkTheme, skill1, skill2, skill3, skill4, skill5, setCardSpeed}) {

  // Parallax Effect
  const [offset, setOffset] = useState(0);
  const parallaxScroll = () => {
    setOffset(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", parallaxScroll);
    return () => window.removeEventListener("scroll", parallaxScroll);
  }, [offset]);
  // End Parallax

  const cardStyle = {
    background: cardNum === 0 ? 'var(--red)' : cardNum === 1 ? 'var(--blue)' : cardNum === 2 && !darkTheme ? 'var(--dark)' : 'var(--light)',
    transform: `translate(0, ${offset * -0.08}px)`,
  }

  const headerStyle = {
    color: cardNum === 2 && darkTheme ? 'var(--dark)' : 'var(--light)',
  }

  const textStyle = {
    color: cardNum === 2 && darkTheme ? 'var(--dark)' : 'var(--light)',
    borderBottom: cardNum === 2 && darkTheme ? '1px solid var(--dark)' : '1px solid var(--light)',
  }

  return (
    <ScSkillsCard style={cardStyle}>
        <header>
            <h6 
              className={cardNum === 0 ? 'active' : ''} 
              style={headerStyle} 
              onClick={() => {
                setCardNum(0) 
                setCardSpeed(12000)
            }}
            >Development</h6>
            <span style={headerStyle}>|</span>
            <h6 
              className={cardNum === 1 ? 'active' : ''} 
              style={headerStyle} 
              onClick={() => {
                setCardNum(1) 
                setCardSpeed(12000)
            }}
            >Design</h6>
            <span style={headerStyle}>|</span>
            <h6 
              className={cardNum === 2 ? 'active' : ''} 
              style={headerStyle} 
              onClick={() => {
                setCardNum(2) 
                setCardSpeed(12000)
            }}
            >Upcoming</h6>
        </header>
        <ul>
            <li style={textStyle}>
                {skill1}
            </li>
            <li style={textStyle}>
                {skill2}
            </li>
            <li style={textStyle}>
                {skill3}
            </li>
            <li style={textStyle}>
                {skill4}
            </li>
            <li style={textStyle}>
                {skill5}
            </li>
        </ul>
    </ScSkillsCard>
  )
}

const ScSkillsCard = styled('div')`
    position: absolute;
    top: 69%; // Four Projects
    /* top: 62%; */
    width: 100%;
    height: 86%;
    padding: 2.4rem 1.6rem;
    transition: 0.8s cubic-bezier(0.18, 0.79, 0.49, 1);
    header {
        display: flex;
        align-items: center;
        margin: 1rem 0 4rem 0;
        > * {
            margin: 0 0.4rem;
        }
        h6 {
            font-size: calc(0.6rem + 0.8vw);
            font-weight: 300;
            letter-spacing: 0.08rem;
            cursor: pointer;
            opacity: 0.7;
        }
        .active {
            font-weight: 500;
            opacity: 1;
        }
    }

    ul {
        li {
            padding: 0.2rem;
            margin: 2rem 0;
            font-size: calc(0.4rem + 0.8vw);
            font-weight: 300;
            letter-spacing: 0.08rem;

        }
    }

    @media (max-width: 1440px) {
        height: 96%;
    }

    @media (max-width: 1224px) {
        top: 72%;
        header {
            margin: 0.4rem 0 3.2rem 0;
        }
    }

    @media (max-width: 768px) {
        top: 96%; // Four Projects
        /* top: 84%; */
        header {
            margin: 0 0 2.4rem 0;
        }
        ul {
            li {
                margin: 1.6rem 0;
                font-size: calc(0.6rem + 0.6vw);
            }
        }
    }

    @media (max-width: 520px) {
        top: 106%; // Four Projects
        /* top: 92%; */
        width: 100%;
        transition: 0s, background 0.6s ease;
        header {
            > * {
                margin: 0 0.2rem;
            }
        }
    }

    @media (max-width: 480px) {
        height: 112%;
        ul {
            li {
                margin: 1.6rem 0;
                font-size: calc(0.6rem + 0.6vw);
                font-weight: 400;
                letter-spacing: 0.04rem;
            }
        }
    }

`

export default SkillsCard