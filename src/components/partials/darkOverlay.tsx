import React from 'react';
import styled from 'styled-components';

const Opacity = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.blackOpacity};
  top: 0;
  right: 0;
`;

const Overlay = () => (
  <Opacity/>
)

export default Overlay;
