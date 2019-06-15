import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Layout from '../components/layout'
import SEO from '../components/seo'
import { theme } from '../components/utils/theme';
import muliRegular2 from '../fonts/muli-regular-webfont.woff2'
import muliRegular from '../fonts/muli-regular-webfont.woff'
import muliBlack2 from '../fonts/muli-black-webfont.woff2'
import muliBlack from '../fonts/muli-black-webfont.woff'
import muliLight2 from '../fonts/muli-light-webfont.woff2'
import muliLight from '../fonts/muli-light-webfont.woff'

interface Props {
  theme: {
    colors: {
      blue: string,
      whiteDark: string,
    },
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a, h1, h2 {
    @font-face {
      font-family: 'muliBlack';
      src: url(${muliBlack2}) format('woff2'),
        url(${muliBlack}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
    font-family: 'muliBlack';
    color: ${({theme}: Props) => theme.colors.black};
  }
  h3, p {
    @font-face {
      font-family: 'muliRegular';
      src: url(${muliRegular2}) format('woff2'),
        url(${muliRegular}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
    font-family: 'muliRegular';
  }
  h4 {
    @font-face {
      font-family: 'muliLight';
      src: url(${muliLight2}) format('woff2'),
        url(${muliLight}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
    font-family: 'muliLight';
    margin: .5rem 0;
  }
`;

const IndexPage = () => ( 
  <ThemeProvider theme={theme}>
    <>
      <SEO title='Home Page' keywords={[`javascript`, `react`, `frontend`, `HTML CSS`]} />
      <GlobalStyle/>
      <Layout></Layout>
    </>
  </ThemeProvider>
)

export default IndexPage
