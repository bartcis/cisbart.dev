import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { showMenu as showMenuAction } from '../../store/app';

class Hamburger extends Component {
  render() {
    const hamburger = (
      <Container onClick={() => this.props.showMenu('true')}>
        <BarFull className='logo'></BarFull>
        <BarEmpty></BarEmpty>
        <BarFull className='logo'></BarFull>
        <BarEmpty></BarEmpty>
        <BarFull className='logo'></BarFull>
      </Container>
    )
    const cross = (
      <Container onClick={() => this.props.showMenu('false')}>
        <BarRotated className='logo'></BarRotated>
        <BarRotated className='logo' isRight></BarRotated>
      </Container>
    )
    return (
      <>
        {this.props.type === 'hamburger' ? hamburger : cross}
      </>
    )
  }
}

export default connect(
  state => ({ menuState: state.app.menuState }),
  dispatch => ({ showMenu: (status) => dispatch(showMenuAction(status))}),
)(Hamburger);

// STYLES

const Container = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  cursor: pointer;
  top: 1rem;
  left: 1rem;
  padding: 1rem .5rem .6rem;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background-color: ${({theme}) => theme.colors.whiteDark};
    border-radius: 1.5rem;
    .logo {
      background-color: ${({theme}) => theme.colors.turquoise};
    }
  }
`

const BarRotated = styled.div`
  position: absolute;
  top: 1.4rem;
  left: .8rem;
  width: 1.5rem;
  background-color: ${({theme}) => theme.colors.black};
  height: 3px;
  transform: ${(props) => props.isRight ? 'rotate(-45deg)' : 'rotate(45deg)'};
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const BarFull = styled.div`
  width: 1.5rem;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  background-color: ${({theme}) => theme.colors.black};
  height: 3px;
  margin: auto;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const BarEmpty = styled.div`
  width: 1rem;
  height: 3.5px;
`;
