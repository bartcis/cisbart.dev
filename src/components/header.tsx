import React, { Component } from 'react'
import styled from 'styled-components'

import Wrapper from './partials/common/wrapper'
import LinkLogo from '../components/partials/logo'
import SearchBar from '../components/partials/searchBar'
import Hamburger from '../components/partials/hamburger'

interface Props {
  theme: {
    colors: {
      white: string,
    },
  }
  props: any,
}

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Hamburger type={'hamburger'}></Hamburger>
        <Wrapper isFlex>
          <SearchBar/>
          <StyledHome>
            <LinkLogo/>
          </StyledHome>
        </Wrapper>
      </StyledHeader>
    )
  }
}

// STYLES
const StyledHome = styled.div`
  display: none;
  @media (min-width: 600px) {
    display: block;
  }
`

const StyledHeader: any = styled.div`
  height: 5rem;
  background-color: ${({theme}: Props) => theme.colors.white};
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
