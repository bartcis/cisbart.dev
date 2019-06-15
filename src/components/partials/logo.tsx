import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { showMenu as showMenuAction } from '../../store/app';

class LinkLogo extends Component {
  render() {
    return (
      <StyledLink to='/' onClick={() => this.props.showMenu('false')}>
        Home
      </StyledLink>
    )
  }
}

export default connect(
  state => ({ menuState: state.app.menuState }),
  dispatch => ({ showMenu: (status) => dispatch(showMenuAction(status))}),
)(LinkLogo);

const StyledLink = styled(Link)`
  font-family: 'muliLight';
  font-size: 1.25rem;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: color .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: ${({theme}) => theme.colors.turquoise};
  }
`;
