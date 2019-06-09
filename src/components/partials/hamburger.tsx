import React, { Component } from 'react'
import styled from 'styled-components'

// interface Props {
//   type: string,
//   props: any,
//   icon: string,
// }

export default class Hamburger extends Component {
  render() {
    const hamburger = (
      <Container>
        <BarFull></BarFull>
        <BarEmpty></BarEmpty>
        <BarFull></BarFull>
        <BarEmpty></BarEmpty>
        <BarFull></BarFull>
      </Container>
    )
    const cross = (
      <Container>
        <BarRotated></BarRotated>
        <BarRotated isRight></BarRotated>
      </Container>
    )
    return (
      <>
        {this.props.type === 'hamburger' ? hamburger : cross}
      </>
    )
  }
}

const Container = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  cursor: pointer;
  top: 1rem;
  left: 1rem;
  padding: .8rem .5rem .6rem;
  transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    background-color: ${({theme}) => theme.colors.whiteDark};
    border-radius: 1.5rem;
  }
`

const BarRotated = styled.div`
  position: absolute;
  top: 1.4rem;
  left: .6rem;
  width: 30px;
  background-color: ${({theme}) => theme.colors.black};
  height: 4px;
  transform: ${(props) => props.isRight ? 'rotate(-45deg)' : 'rotate(45deg)'};
`;

const BarFull = styled.div`
  width: 2rem;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  background-color: ${({theme}) => theme.colors.black};
  height: 4px;
`;

const BarEmpty = styled.div`
  width: 1rem;
  height: 6px;
`;
