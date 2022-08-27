import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
       /* --col1: #C79167; */
       --col1: #4FE0B6; // Default Green
       /* --col1: #F5D2A9; // Web Inspirations Green */
       /* --col1: #E6CDC5; // mix-blend-mode: difference; basically a grey color as a result from visiting the projects page*/
       /* --col1: #7C90D0; // I don't know ...  a faded blue */
       --col2: #223843;
       /* --col2: #15253C; */
       --left: 5%;
       --right: 6.8%;
       --top: 6rem;
       --btnWidth: calc(4rem + 2vw);
       --topBody: 26%;
       --leftBody: 18%;
       --leftMobile: 10%;
       --opaque: 0.08;
       --semiOpaque: 0.2;
       --test: 1px solid #ffffff22;
    }  
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
    }
    *::selection {
        background: #4FE0B6ee;
        color: var(--col2);
    }
    body {
        background: #313131;
        color: #fff;
        overflow: ${(props) =>
          props.loading || props.scrollLock ? "hidden" : "default"};
    }
    section {
        position: relative;
        width: 100vw;
        height: 100vh;
        min-height: 52rem;
        background: var(--col2);
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
    /* a:focus,
    button:focus {
        opacity: 1 !important;
        outline: none;
        color: var(--col1);
    } */


    // Rubberband Animation. Used for Resume Button & Website Buttons on each project page.
    @keyframes collapseIn {
        0% {
            width: 100%;
        }
        40% {
            width: 40%;
        }
        60% {
            width: 56%;
        }
        100% {
            width: 50%;
        }
    }
    @keyframes collapseOut {
        0% {
            width: 50%;
        }
        40% {
            width: 110%;
        }
        60% {
            width: 94%;
        }
        100% {
            width: 100%;
        }
    }

    // Title blur/fade animation. Used on all pages.
    @keyframes blurIn {
        to {
            opacity: 1;
            filter: blur(0px);
        }
    }
    @keyframes dashGrow {
        to {
            width: 100%;
        }
    }

    // Text fade. Used on all pages.
    @keyframes fade {
        to {
        opacity: 1;
        filter: blur(0px);
        pointer-events: all;
        }
    }


    @media(max-width: 1440px) {
        :root {
            --left: 8%;
            --right: 8%;        
        }
    }
    @media(max-width: 1220px) {
        section {
            &:nth-of-type(2) {
                height: 120vh;
                min-height: 64rem;
            }
        }
    }
    @media(max-width: 480px) {
        section {
            height: 86vh;
            &:nth-of-type(2) {
                height: 120vh;
            }
        }
    }
`;

export default GlobalStyles;
