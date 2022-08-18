import styled from "styled-components";

const ResumeBlock = ({title, date, current, pos1, pos2}) => {
    return (
        <StyledResumeBlock>
            <div className="left">
                <h4 className="businessName">{title}</h4>
                <h5 className="dateRange">{date}</h5>
                {/* <p className="currentClient">{current ? 'Current Client' : 'Former Client'}</p> */}
            </div>
            <div className="right">
                <p className="position1">{pos1}</p>
                <p className="position2">{pos2}</p>
            </div>
        </StyledResumeBlock>
    )
}

const StyledResumeBlock = styled('div')`
    border-bottom: 2px solid grey;
    display: flex;
    justify-content: space-between;
    margin-bottom: 6rem;
    padding-bottom: 3.2rem;
    .left {
        /* border: 1px solid grey; */
        > * {
            margin-bottom: 0.6rem;
        }
        .businessName {
            /* border: 1px solid white; */
            font-size: calc(1rem + 0.4vw);
            font-weight: 200;
            letter-spacing: 0.1rem;
        }
        .dateRange {
            font-size: calc(0.5rem + 0.4vw);
            font-weight: 400;
            letter-spacing: 0.1rem;
        }
        .currentClient {
            font-size: calc(0.6rem + 0.4vw);
            font-weight: 100;
            letter-spacing: 0.2rem;
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

    @media (max-width: 1440px) {
        .left {
            .businessName {
                /* border: 1px solid white; */
                /* width: 100%; */
                width: 18rem;
            }
        }
        .right {
            width: 40%;
        }
    }
    @media (max-width: 1220px) {
        .left {
            .businessName {
                width: 70%;
            }
        }
        .right {
            width: 40%;
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 2.8rem;

        .left {
            .businessName {
                width: 100%;
            }
        }
        .right {
            width: auto;
            .position1,
            .position2 {
                font-size: calc(0.6rem + 0.4vw);
                /* font-weight: 200; */
                /* letter-spacing: 0.1rem; */
            }
            .position1 {
                padding-top: 1rem;
                margin-bottom: 0.6rem;
            }
        }
    }
`

export default ResumeBlock;