import styled from 'styled-components';

import muliBlack2 from '../../../fonts/muli-black-webfont.woff2';
import muliBlack from '../../../fonts/muli-black-webfont.woff';
import muliRegular2 from '../../../fonts/muli-regular-webfont.woff2';
import muliRegular from '../../../fonts/muli-regular-webfont.woff';

interface Props {
  isSmall: boolean,
  isBold: boolean,
}

const Text = styled.p`
  @font-face {
    font-family: 'muliBlack';
    src: url(${muliBlack2}) format('woff2'),
        url(${muliBlack}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'muliRegular';
    src: url(${muliRegular2}) format('woff2'),
        url(${muliRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-size: ${(props: Props) => props.isSmall ? '1rem' : '1.25rem'};
  font-family: ${(props: Props) => props.isBold ? 'muliBlack' : 'muliRegular'};
  color: ${({theme}) => theme.colors.black};
  -webkit-font-smooth: antialiased;
  -moz-font-smooth: antialiased;
`;

export default Text;
