import styled from "styled-components";

const LoadingAlt = () => {
    return (
        <StyledLoadingAlt>
            <div className="screen1" />
            {/* <div className="screen2" /> */}
            <h1 className="preTitle">
                <span className="letter">G</span>
                <span className="letter">A</span>
                <span className="letter">R</span>
                <span className="letter">C</span>
                <span className="letter">I</span>
                <span className="letter">A</span>
            </h1>
        </StyledLoadingAlt>
    )
}

const StyledLoadingAlt = styled('aside')`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background: transparent;
    /* opacity: 0.2; */
    .screen1 {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: #000;
        animation: screen1 0.5s 2.5s ease forwards;
    }
    /* .screen2 {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 0%;
        background: #313131;
        animation: screen2 0.8s 0.8s ease forwards;
    } */
    .preTitle{
        position: absolute;
        /* border: 2px solid white; */
        top: 44%;
        left: 50%;
        transform: translate(-47%, -50%);
        font-size: calc(4rem + 2vw);
        font-weight: 100;
        letter-spacing: 2.8vw;
        filter: blur(20px);
        animation: focus 0.6s 0.2s ease forwards;
    }
    .letter {
        font-size: calc(4rem + 2vw);
        font-weight: 100;
        animation: letterfade 0.6s 1s ease forwards;
        &:nth-of-type(1){
            animation-delay: 1.8s;
        }
    }


    @keyframes screen1 {
        to {
            height: 0%;
        }
    }
    @keyframes screen2 {
        40% {
            height: 100%;
        }
        60% {
            height: 100%;
        }
        100% {
            height: 0%;
        }
    }
    @keyframes focus {
        to {
            filter: blur(0);
        }
    }
    @keyframes letterfade {
        to {
            opacity: 0;
        }
    }
`

export default LoadingAlt;