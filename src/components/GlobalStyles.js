import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    &::-webkit-scrollbar {
      width: .5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
    }
    &::-webkit-scrollbar-track {
    background: #fff;
  }
  }

  body {
    font-family: "Montserrat", sans-serif;
    width: 100%;
    color: #333;
  }

  h2 {
    font-size: 3rem;
    font-family: "Abril Fatface", cursive;
    font-weight: lighter;
    color: #333;
  }

  h3 {
    font-size: 1.3rem;
    padding: 1.5rem 0;
    color: #333;
  }
  p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
  }

  a {
    text-decoration: none;
  }
  img {
    display: block;
  }
  input {
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }
`;

export default GlobalStyles;
