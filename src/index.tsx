import React from "react";
import ReactDOM from "react-dom";

import App from "./app";
import GlobalStyle from "./styles";
import GlobalFonts from "./styles/fonts";

import "./index.css";

ReactDOM.render(
  <div>
    <GlobalStyle />
    <GlobalFonts />
    <App />
  </div>,
  document.getElementById("root")
); 
