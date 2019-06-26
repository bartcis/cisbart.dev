import styled from 'styled-components';
import { Link } from 'gatsby'

import muliBlack2 from '../../../fonts/muli-black-webfont.woff2';
import muliBlack from '../../../fonts/muli-black-webfont.woff';

const Tag = styled(Link)`
  @font-face {
    font-family: 'muliBlack';
    src: url(${muliBlack2}) format('woff2'),
        url(${muliBlack}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  max-height: 2rem;
  margin: .25rem;
  text-decoration: none;
  border: 1px solid ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.black};
  padding: .25rem .5rem;
  border-radius: 1.5rem;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  font-family: 'muliBlack';
  @media (min-width: 480px) {
    margin: .5rem;
    padding: .25rem 1rem;
  }
  :hover {
    color: ${({theme}) => theme.colors.turquoise};
    border: 1px solid ${({theme}) => theme.colors.turquoise};
    box-shadow: 5px 5px 5px ${({theme}) => theme.colors.turquoiseDark};
  }
`;

export default Tag;
