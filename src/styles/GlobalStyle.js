import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const GlobalStyles = createGlobalStyle`
  ${reset}
* {
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
html{
    overflow-y:scroll;
    overflow-x:hidden;
}
input {
    border-style: none;
    cursor: pointer;
  }
a {
    text-decoration: none;
  }
button {
    border-style: none;
    cursor: pointer;
  }

  `;
export default GlobalStyles;
