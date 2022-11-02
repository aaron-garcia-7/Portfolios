import React from 'react'
import styled from 'styled-components'

function ImageModule({showModule, setShowModule, moduleImg, setModuleImg, moduleName, title}) {

  const moduleStyle = {
    opacity: 1,
    cursor: 'pointer',
    pointerEvents: 'all',
  }

  const closeStyle = {
    opacity: 0.5,
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
            <p>Tap</p>
            <p>anywhere to</p>
            <p>close</p>
        </div>
        <div className="closeDiv" style={showModule ? closeStyle : null}>
            <p>Tap</p>
            <p>anywhere to</p>
            <p>close</p>       
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
        position: fixed;
        opacity: 0;
        transition: opacity 0.6s cubic-bezier(0.21, 0.81, 0.55, 1.02) 1s;
        &:nth-of-type(1) {
            top: 6vw;
            left: 6vw;
        }
        &:nth-of-type(2) {
            bottom: 6vw;
            right: 6vw;
            transition-delay: 1.3s;
        }
        p {
            font-size: calc(0.4rem + 1vw);
            text-transform: uppercase;
            letter-spacing: 0.08rem;
            cursor: pointer;
            &:nth-of-type(1) {
                font-size: calc(1.2rem + 1vw);
            }
            &:nth-of-type(3) {
                font-size: calc(1rem + 1vw);
                text-align: right;
            }
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
            &:nth-of-type(2) {
                bottom: 4vw;
            }
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
            &:nth-of-type(1) {
                left: 10vw;
            }
            &:nth-of-type(2) {
                right: 10vw;
            }
        }
        figure {
            top: 50%;
            transform: translate(-50%, -50%);
            width: 80vw;
            height: 58vh;
            min-height: 16rem;
        }
    }
`

export default ImageModule