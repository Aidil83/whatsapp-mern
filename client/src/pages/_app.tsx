import { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../redux/configureStore";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
