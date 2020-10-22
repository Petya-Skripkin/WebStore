import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { colors } from "constants/.";

import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }

  body {
    background-color: ${colors.white};
  }
`;

export default globalStyles;
