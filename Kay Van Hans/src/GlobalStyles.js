import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {
        --light: #DDDDDD;
        --dark: #222831;
        --blue: #30475E;
        --red: #F05454;
        --bubble: ${(props) => (props.darkTheme ? "#1B2027" : "#d2d2d2")};
        --smartBg: ${(props) =>
          props.darkTheme ? "var(--dark)" : "var(--light)"};
        --smartBorder: ${(props) =>
          props.darkTheme ? "2px solid var(--light)" : "2px solid var(--dark)"};
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        /* font-family: 'Raleway', sans-serif; */
        color: ${(props) => (props.darkTheme ? "var(--light)" : "var(--dark)")};
        transition: color 0.4s ease;
    }

    body {
        background: ${(props) =>
          props.darkTheme ? "var(--dark)" : "var(--light)"};
          transition: background 0.6s ease;
    }

    section {
        position: relative;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    .a11y {
        display: none;
        opacity: 0;
        pointer-events: none;
    }

    .blueBtn {
        position: absolute;
        padding: 1rem 2rem;
        background: var(--blue);
        color: var(--light);
        font-size: calc(0.6rem + 0.6vw);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
    }

    @keyframes fade {
        to {
            opacity: 1;
        }
    }
    @keyframes trueFade {
        to {
            opacity: 1;
            pointer-events: all;
        }
    }

    @media (max-width: 1440px) {
    }
    @media (max-width: 1224px) {
    }
    @media (max-width: 1024px) {
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 520px) {
    }

`;

export default GlobalStyles;
