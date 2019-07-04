import React from 'react'
import styled from 'styled-components'

import LinkLogo from '../components/partials/logo'
import Hamburger from '../components/partials/hamburger'

const Header = () => (
  <StyledHeader>
    <Hamburger type={'hamburger'}></Hamburger>
    <HeaderWrapper>
      <StyledHome>
        <LinkLogo />
      </StyledHome>
    </HeaderWrapper>
  </StyledHeader>
)

export default Header

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 3rem;
  @media (min-width: 600px) {
    justify-content: flex-end;
  }
  @media (min-width: 1000px) {
    max-width: 800px;
    margin-left: 8vw;
  }
  @media (min-width: 1200px) {
    margin: auto;
    max-width: 1000px;
  }
`

// STYLES
const StyledHome = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`

const StyledHeader = styled.div`
  height: 3rem;
  background-color: ${({theme}) => theme.colors.white};
  width: 100vw;
  position: fixed;
  top: 0;
  padding: 0 0 0 4rem;
  z-index: 2;
  box-shadow: 0px 0px 20px 0px ${({theme}) => theme.colors.whiteDark};
  @media (min-width: 1200px) {
    padding: 0 5rem;
    padding: 0;
  }
`
