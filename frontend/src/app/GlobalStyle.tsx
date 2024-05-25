'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  }
  header, main, footer {
    margin: auto;
    width: 90%;
    @media (min-width: 830px){
      width: 70%;
      
    }
  }
`;

export function GlobalStyleContainer({ children }: React.PropsWithChildren) {
    return (
        <>
            <GlobalStyle />

            {children}
        </>
    );
}

export default GlobalStyle;
