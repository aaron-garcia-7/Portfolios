import React from 'react'
import styled from 'styled-components'

function ImageModule({showModule, setShowModule, moduleImg, setModuleImg, moduleName, title}) {

  const moduleStyle = {
    opacity: 1,
    cursor: 'pointer',
    pointerEvents: 'all',
  }

  const closeStyle = {
    opacity: 1,
  }


  return (
    <ScImageModule style={showModule ? moduleStyle : null} onClick={() => {
        setShowModule(false); 
        setModuleImg(null);
        }}>
        <header>
            <h2>{moduleName} <span>for</span></h2>
            <p>{title}</p>
        </header>
        <div className="closeDiv" style={showModule ? closeStyle : null}>
            <p>Tap anywhere</p>
            <p>to close</p>
        </div>
        <div className='abstractText'>
            <h4>{moduleName}</h4>
        </div>
        <figure>
            <img src={moduleImg} alt="" />
        </figure>
    </ScImageModule>
  )
}

const ScImageModule = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--smartBg);
    z-index: 6;
    overflow: scroll;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.6s cubic-bezier(0.21, 0.81, 0.55, 1.02);
    header {
        /* border: 2px solid yellow; */
        position: fixed;
        top: 10vw;
        right: 6vw;
        text-transform: uppercase;
        > * {
            font-weight: 300;
        }
        h2 {
            color: var(--red);
            font-size: calc(1rem + 1vw);
        }
        p {
            font-size: calc(0.6rem + 0.6vw);
        }
    }
    .closeDiv {
        /* border: 2px solid yellow; */
        position: fixed;
        bottom: 10vw;
        right: 6vw;
        opacity: 0;
        transition: opacity 0.6s cubic-bezier(0.21, 0.81, 0.55, 1.02) 0.2s;
        p {
            color: var(--light);
            font-size: calc(1rem + 0.6vw);
            font-weight: 300;
            text-transform: uppercase;
            letter-spacing: 0.08rem;
            &:nth-of-type(2) {
                color: var(--red);
            }
        }
    }
    .abstractText {
        position: fixed;
        top: 50%;
        left: 0;
        transform: translate(-26%, -50%);
        h4 {
            font-size: calc(1.2rem + 8vw);
            text-transform: uppercase;
            transform: rotate(-90deg);
            color: var(--blue);
        }
    }
    figure {
        position: absolute;
        top: 46%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 60%;
        opacity: 0;
        animation: fade 1.4s ease 0.2s forwards;
        img {
            width: 100%;
            padding-bottom: 8vw;
        }
    }

    @media (max-width: 1024px) {
        min-height: 48rem;
        .closeDiv {
            bottom: 4vw;
        }
        .abstractText {
            transform: translate(-36%, -50%);
        }
        figure {
            width: 36rem;
            height: 24rem;
            top: 22rem;
            overflow: scroll;
            img {
                padding-bottom: 0;
            }
        }
    }

    @media (max-width: 768px) {
        min-height: 46rem;
        header {
            right: 10vw;
        }
        .closeDiv {
            right: 10vw;
        }
        .abstractText {
            top: 8vw;
            left: 10vw;
            transform: translate(0, 0);
            h4 {
                font-size: calc(1.2rem + 6vw);
                transform: rotate(0deg);
                opacity: 0.2;
            }
        }
        figure {
            top: 50vh;
            top: 50dvh;
            transform: translate(-50%, -50%);
            width: 80vw;
            height: 58vh;
            height: 58dvh;
            min-height: 25rem;
        }
    }

    @media (max-width: 520px) {
        .abstractText {
            display: none;
        }
        /* figure {
            top: 46%;
        } */
        .closeDiv {
            bottom: 6dvw;
        }
    }

    /* @media (max-width: 480px) {
        figure {
            top: 44%;
        }
    } */
`

export default ImageModule