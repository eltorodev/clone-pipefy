import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --dark: rgb(11, 10, 13);
    --dark-light: rgb(17, 17, 22);
    --white: rgb(255, 255, 255);
    --white-light: rgb(236, 241, 248);
    --blue: rgb(59, 91, 253);
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased !important;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    background-color: var(--dark);
    color: var(--white-light);
  }

  ul {
    list-style: none;
  }
`;
