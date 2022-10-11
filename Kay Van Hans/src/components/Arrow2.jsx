import React from 'react'
import styled from 'styled-components'

function Arrow2({darkTheme}) {

    const darkStyle = {
        display: !darkTheme ? 'none' : 'block',
    }
  return (
    <ScArrow2 style={darkStyle}>
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.0451 32.9464L0.707107 2.6085L2.6085 0.707107L32.9464 31.0451L33.8 31.8986V30.6915V7.9H36.5V36.5H7.9V33.8H30.6915H31.8986L31.0451 32.9464Z" stroke="var(--light)" class="svg-elem-1"></path>
        </svg>
    </ScArrow2>
  )
}

const ScArrow2 = styled('div')`
    padding-top: 0.2rem;
    /***************************************************
    * Generated by SVG Artista on 10/11/2022, 9:17:41 AM
    * MIT license (https://opensource.org/licenses/MIT)
    * W. https://svgartista.net
    **************************************************/

@-webkit-keyframes animate-svg-stroke-1 {
  0% {
    stroke-dashoffset: 203.5090789794922px;
    stroke-dasharray: 203.5090789794922px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 203.5090789794922px;
  }
}

@keyframes animate-svg-stroke-1 {
  0% {
    stroke-dashoffset: 203.5090789794922px;
    stroke-dasharray: 203.5090789794922px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 203.5090789794922px;
  }
}

@-webkit-keyframes animate-svg-fill-1 {
  0% {
    fill: transparent;
  }

  100% {
    fill: var(--light);
  }
}

@keyframes animate-svg-fill-1 {
  0% {
    fill: transparent;
  }

  100% {
    fill: var(--light);
  }
}

.svg-elem-1 {
  -webkit-animation: animate-svg-stroke-1 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s both,
                       animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
          animation: animate-svg-stroke-1 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s both,
               animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
}

`

export default Arrow2