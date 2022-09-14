import { useDispatch } from "react-redux";
import { showNone, showProj1, showProj2, showProj3 } from "../reducers/mouseImgReducer";
import styled from "styled-components";

const ResumeBlock = ({title, id, date, pos1, pos2, url, delay}) => {
    const dispatch = useDispatch();

    let style = {
        animationDelay: `${delay}s`
    }
    const enterHandler = (id) => {
        return id === 1 ? dispatch(showProj1()) : id === 2 ? dispatch(showProj3()) : id === 3 ? dispatch(showProj2()) : null;
    }
    const leaveHandler = (id) => {
        dispatch(showNone());
    }

    return (
        <StyledResumeBlock style={style} onMouseEnter={() => enterHandler(id)} onMouseLeave={() => leaveHandler(id)}>
            <div className="left">
                <h4 className="businessName">{title}</h4>
                <h5 className="dateRange">{date}</h5>
                <a href={url} target="_blank" rel="noreferrer" className="siteLink">Visit Website</a>
            </div>
            <div className="right">
                <p className="position1">{pos1}</p>
                <p className="position2">{pos2}</p>
            </div>
        </StyledResumeBlock>
    )
}

const StyledResumeBlock = styled('div')`
    display: flex;
    justify-content: space-between;
    padding: 2rem 0 3.2rem 0;
    opacity: 0;
    transform: scale(0.94);    
    animation: appear 1s ease forwards;
    &:nth-of-type(1) {
        padding-top: 0rem;
    }
    .left {
        > * {
            margin-bottom: 0.6rem;
        }
        .businessName {
            font-size: calc(1rem + 0.4vw);
            font-weight: 200;
            letter-spacing: 0.1rem;
        }
        .dateRange {
            font-size: calc(0.5rem + 0.4vw);
            font-weight: 400;
            letter-spacing: 0.1rem;
        }
        .siteLink {
            position: relative;
            color: var(--col1);
            font-size: calc(0.6rem + 0.4vw);
            font-weight: 200;
            letter-spacing: 0.2rem;
            &::after {
                content: "";
                position: absolute;
                bottom: -24%;
                left: 50%;
                transform: translate(-50%, 0);
                width: 100%;
                height: 3px;
                background: var(--col1);
                pointer-events: none;
                transition: 0.3s ease;
                animation: collapseOut 0.6s ease forwards;
            }
            &:hover {
                &::after {
                    animation: collapseIn 0.6s ease forwards;
                }
            }
        }
    }
    .right {
        width: 36%;
        .position1,
        .position2 {
            font-size: calc(0.5rem + 0.4vw);
            font-weight: 200;
            letter-spacing: 0.1rem;
        }
        .position1 {
            padding-top: 2.4rem;
            margin-bottom: 0.6rem;
        }
    }

    @keyframes appear {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @media (max-width: 1440px) {
        .right {
            width: 40%;
        }
    }
    @media (max-width: 1220px) {
        padding: 2rem 0 2rem 0;
        .right {
            width: 40%;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        padding-top: 2.8rem;

        .left {
            .businessName {
                width: 100%;
            }
            .siteLink {
                &::after {
                    height: 1px;
                }
            }
        }
        .right {
            width: auto;
            .position1,
            .position2 {
                font-size: calc(0.6rem + 0.4vw);
            }
            .position1 {
                padding-top: 1rem;
                margin-bottom: 0.6rem;
            }
        }
    }
`

export default ResumeBlock;