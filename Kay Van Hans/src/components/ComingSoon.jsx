import React from 'react'
import styled from 'styled-components'

function ComingSoon() {
  return (
    <ScComingSoon>
      <h1>Case Study Coming Soon!</h1>
      <h2>This is a temporary site for Join Sunder while the main one is being built.</h2>
    </ScComingSoon>
  )
}

const ScComingSoon = styled('section')`
  /* border: 2px dashed coral; */
  width: 100vw;
  height: 60vh;
  min-height: 36rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: calc(2.4rem + 1vw);
    font-weight: 400;
    margin-bottom: 2rem;
  }
  h2 {
    font-size: calc(0.8rem + 0.8vw);
    font-weight: 300;
  }
`

export default ComingSoon