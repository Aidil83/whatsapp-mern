import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import GlobalStyle from "../styles/globalstyles";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default MyApp;
