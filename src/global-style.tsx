'use client';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        background-color: #12111f;
        margin: 0;
    }

    h1, h2, h3, p, label, a {
        color: #b4c9b6;
        margin: 0;
    }

    a {
        text-decoration: none;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        list-style-type: none;
    }
`;

export default GlobalStyles;
