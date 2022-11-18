import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  
  font-family: "Source Sans Pro";
}
button {
 cursor: pointer;
}
`;