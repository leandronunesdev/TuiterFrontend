import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.font.family}, Arial, sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: ${({ theme }) => theme.font.sizes.h1};
    font-weight: bold;
  }
  h2 {
    font-size: ${({ theme }) => theme.font.sizes.h2};
    font-weight: bold;
  }
  h3 {
    font-size: ${({ theme }) => theme.font.sizes.h3};
    font-weight: bold;
  }
  p, span, li, input, textarea, button {
    font-size: ${({ theme }) => theme.font.sizes.body};
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  ul, ol {
    list-style: none;
  }
`;
