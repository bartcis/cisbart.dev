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
          <LinkLogo/>
          <SearchBar/>
        </Wrapper>
      </StyledHeader>
    )
  }
}

const StyledHeader: any = styled.header`
  height: 5rem;
  background-color: ${({theme}: Props) => theme.colors.white};
  width: 100vw;
  position: fixed;
  top: 0;
  box-shadow: 0px 0px 20px 0px ${({theme}) => theme.colors.white};
`
