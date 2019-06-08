import muliLight2 from '../../fonts/muli-light-webfont.woff2';
import muliLight from '../../fonts/muli-light-webfont.woff';

import styled from 'styled-components';

const MuliLight = styled.p`
    @font-face {
        font-family: 'muliLight';
        src: url(${muliLight2}) format('woff2'),
            url(${muliLight}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'muliLight';
    -webkit-font-smooth: antialiased;
    -moz-font-smooth: antialiased;
`;

export default MuliLight
