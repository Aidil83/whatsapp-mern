import { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../redux/configureStore";
import theme from "../styles/theme";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
