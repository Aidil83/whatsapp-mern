import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

interface Props {
  theme: ThemeType;
}

const GlobalStyle = createGlobalStyle<Props>`
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
    color: ${({ theme }) => theme.dark};
    text-decoration: none;
  }
`;

export default GlobalStyle;
