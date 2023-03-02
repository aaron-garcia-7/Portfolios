import React from 'react'
import { motion } from 'framer-motion'
import { swiperAnim } from '../animations/pageAnim'
// import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

function PageSwiper() {
    // const location = useLocation();

  return (
    <ScPageSwiper>
        <motion.div className="motionDiv" variants={swiperAnim} initial="initial" animate="animate" />
    </ScPageSwiper>
  )
}

// const ScPageSwiper = styled(motion.div)`
const ScPageSwiper = styled('div')`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    pointer-events: none;
    .motionDiv {
        position: absolute;
        width: 100%;
        background: var(--red);
    }
`

export default PageSwiper