import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 16px;
    box-sizing: border-box;
   
  }

  body {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    overflow-y: scroll;
  }

  a,
  a:link,
  a:hover,
  a:focus {
    color: currentColor;
    text-decoration: none;
    cursor: pointer;
  }

  ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #dfdfdf;
    border-radius: 10px;
  }

  input:focus,
  input:hover,
  textarea:focus,
  select:focus {
    outline: none !important;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }

  input[type="number"] {
  -moz-appearance: textfield;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
