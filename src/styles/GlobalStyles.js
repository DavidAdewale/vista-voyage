import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
    --color-green-50: #fcfcfc;
    /* --color-green-100: #edf5f0; */
    --color-green-main: #93d756;
    --color-blue-200: #c3d0e5;
    --color-blue-300: #809bc7;
    --color-regular: #99e0ff;
    --color-blue-500: #3e4b60;
    --transition-3s: all 0.3s;
    --border-radius-lg: 1rem;
    --border-radius-sm: .5rem;
    --box-shadow: 2px 4px 23px 0px rgba(0, 0, 0, 0.05);
    --box-shadow-menu-lg: 36px 4px 60px 0px rgba(0, 0, 0, 0.25);
    --box-shadow-menu-sm: 36px 4px 60px 0px rgba(0, 0, 0, 0.15);
    &, &.light-mode{
    --color-white: #fff;
    --color-green-100: #edf5f0;
    --color-green-300: #d5dbd7;
    --color-blue-500: #3e4b60;
    --color-dark: #10141a;
    --color-blue-700: #1a2029;




    }

    &.dark-mode{
    --color-green-100: #10141a;
    --color-blue-500: #93d756;
    --color-dark: #fcfcfc;
    --color-white: #1a2029;
    --color-green-300: #1a2029;
    --color-blue-700: #fcfcfc;





    }
    }

    *,
    *::before,
    *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

    html {
    font-size: 62.5%;
    }

    body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    color: var(--color-dark);
    background-color: var(--color-green-100);
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
    transition: color 0.3s, background-color 0.3s;
    }
    @media only screen and (max-width: 37.5em) {
    body {
        font-size: 1.4rem;
    }
    }

    ::selection {
    background-color: var(--color-green-main);
    }

    @media only screen and (max-width: 56.25em) {
    h1 {
        font-size: 2rem;
    }
}

`;

export default GlobalStyles;
