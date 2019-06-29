import React, { Component } from 'react'
import styled from 'styled-components'

import LinkLogo from '../components/partials/logo'
import SearchBar from '../components/partials/searchBar'
import Hamburger from '../components/partials/hamburger'

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Hamburger type={'hamburger'}></Hamburger>
        <HeaderWrapper>
          <SearchBar/>
          <StyledHome>
            <LinkLogo/>
          </StyledHome>
        </HeaderWrapper>
      </StyledHeader>
    )
  }
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 3rem;
  @media (min-width: 600px) {
    justify-content: space-between;
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
