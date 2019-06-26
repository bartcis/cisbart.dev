import styled from 'styled-components';

import muliBlack2 from '../../../fonts/muli-black-webfont.woff2';
import muliBlack from '../../../fonts/muli-black-webfont.woff';

interface Props {
  isSmall: boolean,
}

const H2 = styled.h2`
  @font-face {
    font-family: 'muliBlack';
    src: url(${muliBlack2}) format('woff2'),
        url(${muliBlack}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-size: ${(props: Props) => props.isSmall ? '1.25rem' : '1.5rem'};
  font-family: muliBlack;
  color: ${({theme}) => theme.colors.black};
  -webkit-font-smooth: antialiased;
  -moz-font-smooth: antialiased;
`;

export default H2;
