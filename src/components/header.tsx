import React, { Component } from 'react'
import styled from 'styled-components'

import Wrapper from './partials/common/wrapper'
import LinkLogo from '../components/partials/logo'
import SearchBar from '../components/partials/searchBar'
import Hamburger from '../components/partials/hamburger'

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Hamburger type={'hamburger'}></Hamburger>
        <HeaderWrapper isFlex>
          <SearchBar/>
          <StyledHome>
            <LinkLogo/>
          </StyledHome>
        </HeaderWrapper>
      </StyledHeader>
    )
  }
}

const HeaderWrapper = styled(Wrapper)`
  justify-content: center;
  @media (min-width: 700px) {
    justify-content: space-between;
  }
`

// STYLES
const StyledHome = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: block;
  }
`

const StyledHeader = styled.div`
  height: 5rem;
  background-color: ${({theme}) => theme.colors.white};
  width: 100vw;
  position: fixed;
  top: 0;
  padding: 0 5rem;
  z-index: 2;
  box-shadow: 0px 0px 20px 0px ${({theme}) => theme.colors.whiteDark};
  @media (min-width: 1200px) {
    padding: 0;
  }
`
