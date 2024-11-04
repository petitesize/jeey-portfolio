import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // styled-reset 가져오기

const GlobalStyles = createGlobalStyle`
  ${reset}  // reset 적용

  /* Custom Global Styles */
  body {
    font-family: 'Montserrat', 'nanumSquareNeo', 'gmarket', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

 
  @media (max-width: 768px) {
    body {
      font-size: 14px;
      line-height: 1.4;
    }
  }
`;

export default GlobalStyles;
