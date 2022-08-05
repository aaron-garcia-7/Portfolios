import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
       --col1: #4FE0B6;
       --col2: #223843;
       --left: 5%;
       --right: 6.8%;
       --top: 6rem;
       --btnWidth: calc(4rem + 2vw);
       --topBody: 26%;
       --leftBody: 18%;
       --opaque: 0;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        /* cursor: none; */
    }
    *::selection {
        background: #4FE0B6ee;
        color: var(--col2);
    }
    body {
        background: var(--col2);
        color: #fff;
        overflow: ${(props) => (props.loading ? "hidden" : "default")};
    }
    section {
        position: relative;
        width: 100vw;
        height: 100vh;
        min-height: 36rem;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
    }

    @media(max-width: 1440px) {
        :root {
            --left: 8%;
            --right: 8%;        
        }
    }
    @media(max-width: 480px) {
        section {
            height: 86vh;
        }
    }
`;

export default GlobalStyles;
