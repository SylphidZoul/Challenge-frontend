import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, main, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    position: relative;
    min-height: 100vh;
    line-height: 1;
    background-image: url("https://www.transparenttextures.com/patterns/cubes.png"),
    linear-gradient(135deg, rgba(${colors.rgbSecBlue}, 1) 33%, rgba(${colors.rgbMainBlue}, 1) 66%);
  }

  ol, ul {
    list-style: none;
  }
`
export default GlobalStyle
