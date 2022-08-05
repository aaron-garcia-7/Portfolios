import styled from "styled-components";

const SectionTitle = ({title}) => {
    return (
        <StyledSectionTitle>
            <h2 className="title">{title}</h2>
            <div className="dash" />
        </StyledSectionTitle>
    )
}

const StyledSectionTitle = styled('div')`
    /* border: 2px solid white; */
    position: absolute;
    top: var(--topBody);
    left: var(--leftBody);
    transform: translate(0%, -100%);
    .title {
        font-size: calc(1rem + 1vw);
        font-weight: 200;
        letter-spacing: 0.4vw;
    }
    .dash {
        width: 100%;
        height: 3px;
        background: var(--col1);
    }
`

export default SectionTitle;