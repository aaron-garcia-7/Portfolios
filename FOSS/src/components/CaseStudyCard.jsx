import styled from "styled-components";

const CaseStudyCard = ({index, img, title, roles}) => {

    return (
        <StyledCaseStudyCard>
            <p className="imgHere">[ image here ]</p>
            <div className="projectDetails">
                <h4>{title}</h4>
                <p>{roles}</p>
            </div>
        </StyledCaseStudyCard>
    )
}

const StyledCaseStudyCard = styled('div')`
    position: relative;
    width: 100%;
    /* height: 20vw; */
    height: calc(6rem + 12vw);
    border: var(--test);
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    transition: 0.6s ease, width 0s;
    .imgHere {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.7rem;
        opacity: 0.4;
        transition: 0.3s ease;
    }
    .projectDetails {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0.8rem;
        background: #31313190;
        transform: translate(0, 100%);
        transition: 0.3s ease;
        h4 {
            font-size: 1rem;
            font-weight: 200;
        }
        p {
            font-size: 0.7rem;
            font-weight: 300;
        }
    }
    &:hover {
        .imgHere {
            opacity: 0;
        }
        .projectDetails {
            transform: translate(0, 0);
        }
    }

    @media (max-width: 768px) {
        height: 16rem;
    }
`

export default CaseStudyCard;