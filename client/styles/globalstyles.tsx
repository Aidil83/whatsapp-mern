import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
