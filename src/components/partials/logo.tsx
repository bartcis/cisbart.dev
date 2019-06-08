import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';

import logo from '../../images/logo.svg';

const Logo = styled.div`
  width: 150px;
  height: 40px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
`;

const LinkLogo = () => (
  <Link to='/'>
    <Logo></Logo>
  </Link>
)

export default LinkLogo;
