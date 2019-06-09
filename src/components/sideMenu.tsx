import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

import { showMenu as showMenuAction } from '../store/app';

import Overlay from './partials/darkOverlay'
import Hamburger from '../components/partials/hamburger'
import LinkLogo from '../components/partials/logo'
import PageList from '../components/partials/pageList'
import TagList from '../components/partials/tagList'
import SocialIcons from './partials/socialIcons'

class SideMenu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MenuContainer>
        <Overlay/>
        <Menu>
          <HamburgerWrapper>
            <Hamburger type='cross'/>
            <LinkLogo/>
          </HamburgerWrapper>
          <PageList/>
          <TagList/>
          <SocialIcons/>
        </Menu>
      </MenuContainer>
    )
  }
}

export default connect(
  state => ({ menuState: state.app.menuState }),
  dispatch => ({ showMenu: status => dispatch(showMenuAction(status)) }),
)(SideMenu);

const HamburgerWrapper = styled.div`
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid ${({theme}) => theme.colors.whiteDark};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const MenuContainer = styled.section`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100vw;
`
const Menu = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: 0px 0px 20px 0px ${({theme}) => theme.colors.white};
  @media (min-width: 480px) {
    width: 400px;
  }
`
