import styled from "styled-components";

const GridArea = () => {
    return (
        <StyledGridArea>
            <div className="box2">
                <p>92vw x 86vh</p>
                <div className="box3">
                    <p>84vw x 72vh</p>
                    <div className="box4">
                        <div className="box5">
                        </div>
                    </div>
                </div>
            </div>
        </StyledGridArea>
    )
}

const StyledGridArea = styled('div')`
    position: fixed;
    width: 100vw;
    height: 100vh;
    border: 2px dashed yellow;
    z-index: 100;
    pointer-events: none;
    transition: 0.6s ease, width 0s;
    .box2 {
        border: 2px dashed orange;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 92vw;
        height: 86vh;
        .box3 {
            border: 2px dashed red;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 84vw;
            height: 72vh;
        }
    }
    p {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        opacity: 0.5;
        font-size: calc(0.6rem + 0.2vw);
    }

    @media(max-width: 768px){
        border-width: 1px;
        div {
            border-width: 1px !important;
        }
    }
    @media(max-width: 480px){
        border-radius: 0 0 3.2rem 3.2rem;
    }
`;

export default GridArea;