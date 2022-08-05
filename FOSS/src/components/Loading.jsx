import styled from "styled-components";

const Loading = () => {
    return (
        <StyledLoading>
            <div className="screen1" />
            <div className="logoContainer">
                <div className="ring ring1" />
                <div className="ring ring2" />
            </div>
        </StyledLoading>
    )
}

const StyledLoading = styled('aside')`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    /* background: transparent; */
    .screen1 {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: #000;
        /* opacity: 0.4; */
        opacity: 0.94;
        animation: screen1 0.5s 2.5s ease forwards;
    }
    .logoContainer {
        /* border: 2px dashed grey; */
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 12rem;
        height: 12rem;
        filter: blur(12px);
        animation: blur 2.6s 0.2s ease forwards;
        .ring {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(2);
            z-index: 10;
            padding: 1.6rem;
            border: 2px solid white;
            border-radius: 50%;
        }
        .ring1 {
            animation: ring1 1s 1.4s ease forwards;
        }
        .ring2 {
            animation: ring2 1s 1.4s ease forwards;
        }
    }

    @keyframes blur {
        10% {
            filter: blur(0);
        }
        80% {
            top: 50%;
            left: 50%;
        }
        100% {
            filter: blur(0);
            top: calc(var(--top) - 2px);
            left: var(--left);
        }
    }

    @keyframes ring1 {
        0% {
            top: 50%;
            left: 50%;
        }
        20% {
            top: 50%;
            left: 64%;
        }
        40% {
            top: 50%;
            left: 64%;
        }
        56% {
            top: 32%;
            left: 50%;
        }
        80% {
            top: 32%;
            left: 50%;
        }
        92% {
            transform: translate(-50%, -50%) scale(2);
        }
        100% {
            top: 42%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @keyframes ring2 {
        0% {
            top: 50%;
            left: 50%;
        }
        20% {
            top: 50%;
            left: 36%;
        }
        40% {
            top: 50%;
            left: 36%;
        }
        56% {
            top: 70%;
            left: 50%;
        }
        80% {
            top: 70%;
            left: 50%;
        }
        92% {
            transform: translate(-50%, -50%) scale(2);
        }
        100% {
            top: 60%;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @keyframes screen1 {
        to {
            height: 0%;
        }
    }

    @media (max-width: 768px){
        .logoContainer{
            .ring {
                border: 1px solid white;
                padding: 1.2rem;
            }
        }

        @keyframes ring1 {
            /* 0% {
                top: 50%;
                left: 50%;
            }
            20% {
                top: 50%;
                left: 64%;
            }
            40% {
                top: 50%;
                left: 64%;
            }
            56% {
                top: 36%;
                left: 50%;
            }
            80% {
                top: 36%;
                left: 50%;
            }
            92% {
                transform: translate(-50%, -50%) scale(2);
            } */
            100% {
                top: 44%;
                left: 50%;
                transform: translate(-50%, -50%) scale(1);
            }
        }

        @keyframes ring2 {
            /* 0% {
                top: 50%;
                left: 50%;
            }
            20% {
                top: 50%;
                left: 36%;
            }
            40% {
                top: 50%;
                left: 36%;
            }
            56% {
                top: 64%;
                left: 50%;
            }
            80% {
                top: 64%;
                left: 50%;
            }
            92% {
                transform: translate(-50%, -50%) scale(2);
            }
            95% {
                opacity: 1;
            } */
            100% {
                top: 55%;
                left: 50%;
                transform: translate(-50%, -50%) scale(1);
            }
        }

        @keyframes blur {
            10% {
                filter: blur(0);
            }
            80% {
                top: 50%;
                left: 50%;
            }
            100% {
                filter: blur(0);
                top: calc(var(--top) - 11px);
                left: 12%;
            }
        }
    }


`

export default Loading;