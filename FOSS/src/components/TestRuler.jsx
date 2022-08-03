import styled from "styled-components";

const TestRuler = () => {
    return (
        <StyledTestRuler></StyledTestRuler>
    )
}

const StyledTestRuler = styled('div')`
    position: fixed;
    top: 4%;
    /* bottom: 26%; */
    left: 50%;
    transform: translate(-50%, 0);
    width: 82vw;
    height: 90vh;
    border: 1px dashed orange;
    z-index: 100;
    pointer-events: none;
    transition: 0.6s ease, width 0s;
    @media(max-width: 1440px) {
        /* top: 7%; */
        bottom: 28%;
        left: 50%;
        transform: translate(-50%, 0);
        width: 88vw;
        height: 86vh;
    }
    @media(max-width: 1080px) {
        /* top: 7%; */
        bottom: 30%;
        left: 50%;
        transform: translate(-50%, 0);
        width: 88vw;
        height: 86vh;
    }
    @media(max-width: 768px) {
        /* top: 7%; */
        bottom: 32%;
        left: 50%;
        transform: translate(-50%, 0);
        width: 88vw;
        height: 86vh;
    }
`;

export default TestRuler;