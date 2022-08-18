import styled from "styled-components";

const CaseStudyCard = ({id, img, theme, title, roles, animTime}) => {

    let cardStyle = {
        // backgroundColor: theme,
        animationDelay: animTime === 1 ? '1.8s' : animTime === 2 ? '2.2s' : '2.6s',
    }

    let delayStyle = {
        animationDelay: animTime === 1 ? '0.8s' : animTime === 2 ? '1.2s' : '1.6s',
    }

    let imgStyle = {
        width: id === 2 ? '60%' : id === 3 ? '70%' : id === 4 ? '50%' : null,
        animationDelay: animTime === 1 ? '2.2s' : animTime === 2 ? '2.6s' : '3s',
    }

    return (
        <StyledCaseStudyCard style={cardStyle}>
            <div className="reveal1" style={delayStyle}/>
            <div className="reveal2" style={delayStyle}/>
            <img src={img} alt={title} style={imgStyle}/>
            <div className="projectDetails">
                <p>View Project</p>
                <h4>{title}</h4>
                <h5>{roles}</h5>
            </div>
        </StyledCaseStudyCard>
    )
}

const StyledCaseStudyCard = styled('div')`
    position: relative;
    width: 100%;
    height: calc(6rem + 12vw);
    min-height: 16rem;
    border: 1px solid var(--col1);
    /* border: var(--test); */
    border-radius: 1rem;
    background: transparent;
    pointer-events: none;
    cursor: default;
    animation: cardReveal 1.6s ease 1.8s forwards;

    .reveal1,
    .reveal2 {
        content: "";
        position: absolute;
        width: 104%;
        height: 104%;
    }
    .reveal1 {
        bottom: 0;
        right: -1%;
        background: var(--col2);
        animation: lineReveal1 1.8s linear forwards;
    }
    .reveal2 {
        bottom: -1%;
        right: 0;
        background: var(--col2);
        animation: lineReveal2 1.8s linear forwards;
    }

    img {
        width: 40%; // for project 1
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        animation: imgReveal 1.2s ease 2.2s forwards;
    }
    .projectDetails {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        padding: 0.8rem;
        background: #eeeeeeee;
        backdrop-filter: blur(1px);
        opacity: 0;
        border-radius: 1rem;
        transition: 0.3s ease;
        p {
            width: 90%;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, 0%);
            color: var(--col2);
            opacity: 0;
            font-size: calc(0.8rem + 0.8vw);
            font-weight: 300;
            letter-spacing: 0.1rem;
        }
        h4 {
            position: absolute;
            bottom: 20%;
            left: 6%;
            transform: translate(12%, 0%);
            color: var(--col2);
            font-size: calc(1rem + 0.2vw);
            font-weight: 300;
            width: 80%;
            opacity: 0;
        }
        h5 {
            position: absolute;
            bottom: 12%;
            left: 6%;
            transform: translate(12%, 0%);
            color: var(--col2);
            font-size: calc(0.6rem + 0.2vw);
            font-weight: 400;
            letter-spacing: 0.06rem;
            width: 80%;
            opacity: 0;
        }
    }
    &:hover {
        .projectDetails {
            opacity: 1;
            p {
                opacity: 1;
                transform: translate(-50%, -50%);
                transition: 0.6s ease;
            }
            h4,
            h5 {
                opacity: 1;
                transform: translate(0%, 0%);
                transition: 0.8s ease;
            }
            h4 {
                transition-delay: 0.2s;
            }
            h5 {
                transition-delay: 0.4s;
            }
        }
    }

    @keyframes lineReveal1 {
        0% {
            width: 104%;
            height: 104%;
        }
        28% {
            width: 2%;
            height: 104%;
        }
        72% {
            width: 2%;
            height: 2%;
        }
        100% {
            width: 0;
            height: 0;
        }
    }
    @keyframes lineReveal2 {
        0% {
            height: 104%;
            width: 104%;
        }
        32% {
            height: 2%;
            width: 104%;
        }
        68% {
            height: 2%;
            width: 2%;
        }
        100% {
            height: 0;
            width: 0;
        }
    }
    @keyframes cardReveal {
        to {
            background: white;
            pointer-events: all;
            cursor: pointer;
        }
    }
    @keyframes imgReveal {
        to {
            opacity: 1;
        }
    }


    @media (max-width: 1440px) {
        .projectDetails{
            h5 {
                letter-spacing: 0rem;
            }
        }
    }
    @media (max-width: 1220px) {
        .projectDetails {
            p {
                top: 46%; 
            }
            h4 {
                bottom: 22%;
            }
            h5 {
                bottom: 8%;
            }
        }
    }
    @media (max-width: 768px) {
        height: 16rem;
        .projectDetails {
            p {
                top: 50%; 
            }
            h4 {
                bottom: 20%;
            }
            h5 {
                bottom: 12%;
            }
        }
    }
`

export default CaseStudyCard;