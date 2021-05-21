import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}

const GlobalStyle = createGlobalStyle<Props>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  a {
    color: ${({ theme }) => theme.dark};
    text-decoration: none;
  }
  #__next {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
`;

export default GlobalStyle;
