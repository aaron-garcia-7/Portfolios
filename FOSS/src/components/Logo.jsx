import styled from "styled-components";

const Logo = () => {
    return (
        <StyledLogo>
            <div className="circle" />
            <div className="circle" />
        </StyledLogo>
    )
}

const StyledLogo = styled('div')`
    position: absolute;
    top: var(--top);
    left: var(--left);
    transform: translate(-50%, -50%);
    height: 4rem;
    cursor: pointer;
    z-index: 2;
    transition: 0.6s ease;
    .circle {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        padding: 1.6rem;
        border: 2px solid white;
        border-radius: 50%;
        transition: 0.6s ease, transform 0.3s;
        &:nth-last-of-type(1){
            top: 20%;
        }
        &:nth-last-of-type(2){
            top: -20%;
        }
    }
    &:hover {
        .circle {
            &:nth-last-of-type(1){
                transform: translate(-50%, -23%);
            }
            &:nth-last-of-type(2){
                transform: translate(-50%, 23%);
            }
        }
    }

    @media (max-width: 768px){
        .circle {
            border: 1px solid white;
            padding: 1.2rem;
            &:nth-last-of-type(1){
                top: 14%;
            }
            &:nth-last-of-type(2){
                top: -14%;
            }
        }
        &:hover {
            .circle {
                &:nth-last-of-type(1){
                    transform: translate(-50%, -22%);
                }
                &:nth-last-of-type(2){
                    transform: translate(-50%, 22%);
                }
            }
        }
    }

    @media (max-width: 768px){
        left: 12%;
    }
`

export default Logo;