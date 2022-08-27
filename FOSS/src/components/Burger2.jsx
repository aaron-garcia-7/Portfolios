import { useSelector, useDispatch } from "react-redux";
import { toggleNav } from "../reducers/navReducer";
import styled from "styled-components";


const Burger = () => {
    const dispatch = useDispatch();
    const { navOpen } = useSelector((store) => store.nav);

    const activeStyle = {
        transform:`scale(1.06) rotate(180deg)`,
    }

    return (
        <StyledBurger style={navOpen ? activeStyle : null} onClick={() => dispatch(toggleNav())}>
            <div className={navOpen ? "active" : "burgerDot"} />
            <div className={navOpen ? "active" : "burgerDot"} />
            <div className={navOpen ? "active" : "burgerDot"} />
        </StyledBurger>
    )
}

const StyledBurger = styled('div')`
    display: none;

    @media(max-width: 580px) {
        display: block;
        position: fixed;
        top: calc(var(--top) - 16px);
        right: 4%;
        transition: all 0.4s;
        width: 42px;
        height: 42px;
        border-radius: 100%;
        z-index: 9;
        cursor: pointer;
        .burgerDot,
        .active {
            width: 5px; 
            height: 5px; 
            position: absolute;
            background: white; 
            right: 0;
            margin: auto;
            left: 0;
            border-radius: 5px;
            transition: all 0.41s cubic-bezier(0.7, 0.1, 0.4, 1.7);
            width:22;top: calc(50% - ((10.5px)) + -3px);
            &:nth-of-type(1) {
                top: calc(50% - ((10.5px)) + -3px);
                width: 5px
            }
            &:nth-of-type(2) {
                top: calc(50% - ((10.5px)) + 5px);
                width: 5px
            }
            &:nth-of-type(3) {
                top: calc(50% - ((10.5px)) + 13px);
                width: 5px
            }
        }
        .active {
            width: 5px; 
            height: 5px; 
            position: absolute;
            background: white; 
            right: 0;
            margin: auto;
            left: 0;
            border-radius: 5px;
            transition: all 0.41s cubic-bezier(0.7, 0.1, 0.4, 1.7);
            width:22;top: calc(50% - ((10.5px)) + -3px);
            &:nth-of-type(1) {
            transform: rotate(45deg);
            width: 22px !important;
            height: 3px;
            top: calc(50% - (2.5px))!important;
            }
            &:nth-of-type(2) {
            left: -10px !important;
            opacity: 0;
            }
            &:nth-of-type(3) {
            transform: rotate(-45deg);
            width: 22px!important;
            height: 3px;
            top: calc(50% - (2.5px))!important;
            }
        }
    }
`

export default Burger;