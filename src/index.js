import React from "react";
import ReactDOM from "react-dom";

import theme from "./theme";
import { ThemeProvider } from "styled-components";
import "./index.css";

import App from "./App";


ReactDOM.render(
<ThemeProvider theme={theme}>
<App />
</ThemeProvider>
, document.getElementById("root"));
