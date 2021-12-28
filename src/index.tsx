import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styled/theme";
import { GlobalStyle } from "./components/styled/global-style";
import { ContextProvider } from "./app/store/state";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

export const modalRoot = document.getElementById("modal");
