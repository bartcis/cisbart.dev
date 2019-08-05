import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { connect } from "react-redux"
import { showMenu as showMenuAction } from "../../../store/app"

import muliBlack2 from "../../../fonts/muli-black-webfont.woff2"
import muliBlack from "../../../fonts/muli-black-webfont.woff"

class Tag extends Component {
  render() {
    return (
      <StyledTag
        to={this.props.target}
        onClick={() => this.props.showMenu("false")}
        dangerouslySetInnerHTML={{ __html: this.props.target }}
      />
    )
  }
}

export default connect(
  state => ({ menuState: state.app.menuState }),
  dispatch => ({ showMenu: status => dispatch(showMenuAction(status)) })
)(Tag)

const StyledTag = styled(Link)`
  @font-face {
    font-family: "muliBlack";
    src: url(${muliBlack2}) format("woff2"), url(${muliBlack}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
  max-height: 1.75rem;
  margin: 0.25rem;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  padding: 0.25rem 0.5rem;
  border-radius: 1.5rem;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  font-family: "muliBlack";
  font-size: 0.8rem;
  @media (min-width: 600px) {
    margin: 0.25rem;
    padding: 0.25rem 1rem;
  }
  :hover {
    color: ${({ theme }) => theme.colors.turquoise};
    border: 1px solid ${({ theme }) => theme.colors.turquoise};
    box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.turquoiseDark};
  }
`
