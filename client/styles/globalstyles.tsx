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
    width: 100%;
    height: 100vh;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  a {
    color: ${({ theme }) => theme.dark};
    text-decoration: none;
  }
`;

export default GlobalStyle;
