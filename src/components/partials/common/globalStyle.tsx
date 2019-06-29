import { createGlobalStyle } from 'styled-components';

import muliRegular2 from '../../../fonts/muli-regular-webfont.woff2'
import muliRegular from '../../../fonts/muli-regular-webfont.woff'
import muliBlack2 from '../../../fonts/muli-black-webfont.woff2'
import muliBlack from '../../../fonts/muli-black-webfont.woff'
import muliLight2 from '../../../fonts/muli-light-webfont.woff2'
import muliLight from '../../../fonts/muli-light-webfont.woff'
import muliBold2 from '../../../fonts/muli-bold-webfont.woff2'
import muliBold from '../../../fonts/muli-bold-webfont.woff'

interface Props {
  isSmall: boolean,
  theme: {
    colors: {
      blue: string,
      whiteDark: string,
      black: string
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
  }

  h1, h2, h3, h4, p {
    color: ${({theme}: Props) => theme.colors.black};
  }

  h3, p, span {
    @font-face {
      font-family: 'muliRegular';
      src: url(${muliRegular2}) format('woff2'),
        url(${muliRegular}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
    font-family: 'muliRegular';
  }

  a {
    text-decoration: none;
    color: ${({theme}: Props) => theme.colors.turquoiseDark};
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      color: ${({theme}: Props) => theme.colors.turquoise};
    }
  }

  strong {
    @font-face {
      font-family: 'muliBold';
      src: url(${muliBold2}) format('woff2'),
        url(${muliBold}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
    font-family: muliBold;
  }

  blockquote {
    background-color: ${({theme}: Props) => theme.colors.whiteDark};
    margin: 1rem;
    padding: .5rem 1rem;
    border-radius: 15px;
    box-shadow: 10px 10px 20px ${({theme}) => theme.colors.grey};
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

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.25rem;
  }
`;

export default GlobalStyle
