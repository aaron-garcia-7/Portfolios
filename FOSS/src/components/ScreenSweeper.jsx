import styled from "styled-components";

const ScreenSweeper = () => {
    return (
        <StyledScreenSweeper>

        </StyledScreenSweeper>
    )
}

const StyledScreenSweeper = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background: black;
    animation: change 40s ease 0s infinite alternate;
    
    @keyframes change {
        0% {
            opacity: 0.94;
        }
        4% {
            opacity: 0;
        }
        96% {
            opacity: 0;
        }
        100% {
            opacity: 0.94;
        }
    }
`

export default ScreenSweeper;