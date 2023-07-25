import React from 'react'
import { motion } from 'framer-motion'
import { swiperAnim, swiperAnim2, swiperAnim3, swiperAnim4 } from '../animations/pageAnim'
import styled from 'styled-components'

function PageSwiper() {

  return (
    <ScPageSwiper>
        <motion.div className="motionDiv motionDiv-1" variants={swiperAnim} initial="initial" animate="animate" />
        <motion.div className="motionDiv motionDiv-2" variants={swiperAnim2} initial="initial" animate="animate" />
        <motion.div className="motionDiv motionDiv-3" variants={swiperAnim3} initial="initial" animate="animate" />
        <motion.div className="motionDiv motionDiv-4" variants={swiperAnim4} initial="initial" animate="animate" />
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
    display: flex;
    .motionDiv {
      position: absolute;
      background: var(--red);
      width: 25%;
    }
    .motionDiv-1 {
        left: 0%;
    }
    .motionDiv-2 {
        left: 25%;
    }
    .motionDiv-3 {
        left: 50%;
    }
    .motionDiv-4 {
        left: 75%;
    }
`

export default PageSwiper