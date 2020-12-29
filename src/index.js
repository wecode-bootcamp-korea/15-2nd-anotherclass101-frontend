import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./Router";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  // 전역 스타일
`;

ReactDOM.render(
  <Provider>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
