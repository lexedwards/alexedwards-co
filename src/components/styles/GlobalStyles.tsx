import { createGlobalStyle } from 'styled-components'

const theme = {
  neutral: {
    n50: `hsl(0,0%,94%)`,
    n100: `hsl(0,0%,89%)`,
    n200: `hsl(0,0%,78%)`,
    n300: `hsl(0,0%,67%)`,
    n400: `hsl(0,0%,56%)`,
    n500: `hsl(0,0%,46%)`,
    n600: `hsl(0,0%,36%)`,
    n700: `hsl(0,0%,27%)`,
    n800: `hsl(0,10%,19%)`,
    n900: `hsl(0,5%,10%)`,
  },
  fontSize: {
    sm: `1rem`,
    md: `1.25rem`,
    lg: `1.563rem`,
    xlg: `1.953rem`,
    xxlg: `2.441rem`,
    xxxlg: `3.052rem`
  }
}

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 1.25rem;
  @media(min-width: 40rem) {
    margin: 0;
  }
}
h1,h2,h3,h4,h5,h6 {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
}
p, p > a {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-size: 1rem;
}
pre {
  font-family: 'Source Code Pro', sans-serif;
}
a {
  text-decoration: none;
  color: hsl(199,88%,30%);
}
button, a.button {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-color: transparent;
  border-style: solid;
  border-width: 3px;
  cursor: pointer;
  width: max-content;
  :focus {
    outline: none;
    border-color: hsla(212,100%,63%,0.5);
  }
}
`

export default GlobalStyles
export { theme }