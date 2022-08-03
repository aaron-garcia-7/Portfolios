import { useSelector } from "react-redux";
import styled from "styled-components";

const WorkBtn = () => {
    const { defaultLayout } = useSelector((store) => store.layout);

    let repositionBtn = {
        top: "7.2rem",
        right: "var(--right)",
    };
    return (
        <StyledWorkBtn style={defaultLayout ? null : repositionBtn}>
            <button className={defaultLayout ? "" : "reStyleBtn"}>Work</button>
        </StyledWorkBtn>
    )
}

const StyledWorkBtn = styled('div')`
    position: fixed;
    z-index: 3;
    top: var(--top);
    right: 8%;
    transform: translate(50%, -80%);
    width: var(--btnWidth);
    transition: 0.6s ease, width 0s;
    button {
        position: relative;
        font-size: calc(0.8rem + 0.4vw);
        font-weight: 200;
        background: transparent;
        border: none;
        color: white;
        cursor: pointer;
        transition: 0.6s ease, font 0s;
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 0rem;
            border: 1px solid white;
            border-radius: 50%;
            opacity: 0;
            transition: 0.3s ease;
        }
        &:hover {
            &::after {
                opacity: 1;
                padding: 2.4rem;
            }
        }
    }
    .reStyleBtn {
        font-size: calc(0.6rem + 0.4vw);
        font-weight: 300;   
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 0%;
            transform: translate(-400%, -50%);
            padding: 0;
            width: 0rem;
            height: 100%;
            border: 1px solid var(--col1);
            border-radius: 0;
            opacity: 0;
            transition: 0.3s ease;
        }
        &:hover {
            &::after {
                opacity: 1;
                padding: 0;
            }
        }
    }

    @media(max-width: 656px) {
        transition: 0s;
        button {
            transition: 0s;
        }
    }

`

export default WorkBtn;