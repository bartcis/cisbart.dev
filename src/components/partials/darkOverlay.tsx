import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { showMenu as showMenuAction } from "../../store/app"

const mapStateToProps = state => ({
  menuState: state.app.menuState,
})

class Overlay extends Component {
  render() {
    return (
      <>
        {this.props.menuState === "true" ? (
          <Opacity onClick={() => this.props.showMenu("false")} />
        ) : (
          ""
        )}
      </>
    )
  }
}

export default connect(
  mapStateToProps,
  dispatch => ({ showMenu: status => dispatch(showMenuAction(status)) })
)(Overlay)

const Opacity = styled.div`
  position: absolute;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.blackOpacity};
  top: 0;
  right: 0;
  width: 100vw;
`
