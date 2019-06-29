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
  width: 2rem;
  height: 2rem;
  position: absolute;
  cursor: pointer;
  top: .5rem;
  left: 1rem;
  padding: .6rem .4rem;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-sizing: border-box;
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
  top: .925rem;
  left: .4rem;
  width: 1.25rem;
  background-color: ${({theme}) => theme.colors.black};
  height: 3px;
  transform: ${(props) => props.isRight ? 'rotate(-45deg)' : 'rotate(45deg)'};
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const BarFull = styled.div`
  width: 1.25rem;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  background-color: ${({theme}) => theme.colors.black};
  height: 2px;
  margin: auto;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const BarEmpty = styled.div`
  width: 1rem;
  height: 3px;
`;
