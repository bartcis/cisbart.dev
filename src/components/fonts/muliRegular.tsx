import muliRegular2 from '../../fonts/muli-regular-webfont.woff2';
import muliRegular from '../../fonts/muli-regular-webfont.woff';

import styled from 'styled-components';

const MuliRegular = styled.p`
    @font-face {
        font-family: 'muliRegular';
        src: url(${muliRegular2}) format('woff2'),
            url(${muliRegular}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    font-family: 'muliRegular';
    -webkit-font-smooth: antialiased;
    -moz-font-smooth: antialiased;
`;

export default MuliRegular
