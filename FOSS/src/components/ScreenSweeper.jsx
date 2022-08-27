import styled from "styled-components";

const ScreenSweeper = () => {
    return <StyledScreenSweeper/>
}

const StyledScreenSweeper = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    min-height: 36rem;
    background: black;
    animation: change 40s ease 800ms infinite alternate;
    
    @keyframes change {
        0% {
            opacity: 0.94;
        }
        5% {
            opacity: 0;
        }
        95% {
            opacity: 0;
        }
        100% {
            opacity: 0.94;
        }
    }

    @media(max-width: 480px) {
            /* height: 86vh; */
    }
`

export default ScreenSweeper;