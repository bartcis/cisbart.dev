import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { showMenu as showMenuAction } from "../store/app"

import Overlay from "./partials/darkOverlay"
import Hamburger from "../components/partials/hamburger"
import LinkLogo from "../components/partials/logo"
import PagesQuery from "../components/partials/pagesQuery"
import TagList from "../components/partials/tagList"
import SocialIcons from "./partials/socialIcons"

const mapStateToProps = state => ({
  menuState: state.app.menuState,
})

class SideMenu extends Component {
  render() {
    const menu = (
      <MenuContainer
        pose={this.props.menuState === "true" ? "visible" : "hidden"}
      >
        <Overlay />
        <Menu>
          <HamburgerWrapper>
            <Hamburger type="cross" />
            <LinkLogo />
          </HamburgerWrapper>
          <PagesQuery />
          <TagList />
          <SocialIcons />
        </Menu>
      </MenuContainer>
    )

    return <>{this.props.menuState === "true" ? menu : ""}</>
  }
}

export default connect(
  mapStateToProps,
  dispatch => ({ showMenu: status => dispatch(showMenuAction(status)) })
)(SideMenu)

// STYLES

const HamburgerWrapper = styled.div`
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.whiteDark};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const MenuContainer = styled.section`
  position: fixed;
  z-index: 3;
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
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.colors.white};
  @media (min-width: 600px) {
    width: 350px;
  }
`
