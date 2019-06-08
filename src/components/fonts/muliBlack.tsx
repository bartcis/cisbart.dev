import muliBlack2 from '../../fonts/muli-black-webfont.woff2';
import muliBlack from '../../fonts/muli-black-webfont.woff';

import styled from 'styled-components';

const MuliBlack = styled.p`
    @font-face {
        font-family: 'muliBlack';
        src: url(${muliBlack2}) format('woff2'),
            url(${muliBlack}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'muliBlack';
    -webkit-font-smooth: antialiased;
    -moz-font-smooth: antialiased;
`;

export default MuliBlack
