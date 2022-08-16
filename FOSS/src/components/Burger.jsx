import { useSelector, useDispatch } from "react-redux";
import { toggleNav } from "../reducers/navReducer";
import styled from "styled-components";


const Burger = () => {
    const dispatch = useDispatch();
    const { navOpen } = useSelector((store) => store.nav);

    const activeStyle = {
        transform: `scale(1.1400000000000001) rotate(180deg)`, 
    }

    return (
        <StyledBurger style={navOpen ? activeStyle : null} onClick={() => dispatch(toggleNav())}>
            <div className={navOpen ? "active" : "burgerDot"} />
            <div className={navOpen ? "active" : "burgerDot"} />
        </StyledBurger>
    )
}

const StyledBurger = styled('div')`
    opacity: 0;
    pointer-events: none;

    @media(max-width: 580px) {
        /* border: 1px solid white; */
        opacity: 1;
        pointer-events: all;
        position: fixed;
        top: calc(var(--top) - 22px);
        right: 4%;
        transition: all 0.56s;
        width: 42px;
        height: 42px;
        border-radius: 100%;
        z-index: 9;
        cursor: pointer;
        .burgerDot,
        .active {
            width: 44px;
            height: 1px; 
            position: absolute;
            background: white; 
            right: 0;
            margin: auto;
            left: 0;
            border-radius: 1px;
            transition: all 0.88s cubic-bezier(0.4, 0, 0.3, 0.9);
            top: calc(50% - ((3.5px)) + -1px);
            &:nth-of-type(1) {
                top: calc(50% - ((3.5px)) + -2px);
                width: 22px
            }
            &:nth-of-type(2) {    
                top: calc(50% - ((3.5px)) + 6px);
                width: 12px
            }
        }
        .active {
            width: 5px; 
            height: 1px; 
            position: absolute;
            background: white; 
            right: 0;
            margin: auto;
            left: 0;
            border-radius: 5px;
            transition: all 0.61s cubic-bezier(0.7, 0.1, 0.4, 1.7);
            width:22;top: calc(50% - ((10.5px)) + -3px);
            &:nth-of-type(1) {
            transform: rotate(225deg);
            top: calc(50% - (1.5px))!important;
            width: 22px !important;
            }

            &:nth-of-type(2) {
            transform: rotate(-225deg);
            top: calc(50% - (1.5px))!important;
            width: 22px !important;
            }
        }
    }
`

export default Burger;