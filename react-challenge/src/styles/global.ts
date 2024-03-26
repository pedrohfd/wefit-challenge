import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Open Sans", sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.slate[500]};
  }
`
