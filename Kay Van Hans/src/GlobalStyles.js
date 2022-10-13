import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {
        --light: #DDDDDD;
        --dark: #222831;
        --blue: #30475E;
        --red: #F05454;
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

`;

export default GlobalStyles;
