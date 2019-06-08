import React, { RefObject, Component } from 'react'
import styled from 'styled-components'

import muliRegular2 from '../../fonts/muli-regular-webfont.woff2'
import muliRegular from '../../fonts/muli-regular-webfont.woff'
import searchIcon from '../../images/icon-search.svg'

export default class SearchBar extends Component {
  searchRef: RefObject<HTMLInputElement> = React.createRef()

  render() {
    return (
      <Form>
        <Input placeholder="Search" type="text" ref={this.searchRef}/>
        <Icon></Icon>
      </Form>
    )
  }
}


const Input = styled.input`
  @font-face {
    font-family: 'muliRegular';
    src: url(${muliRegular2}) format('woff2'),
      url(${muliRegular}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  height: 3rem;
  width: 100%;
  border: 1px solid ${({theme}) => theme.colors.whiteDark};
  border-radius: 5px;
  padding: 1rem;
  font-size: 1rem;
  color: ${({theme}) => theme.colors.grey};
  font-family: 'muliRegular';
  ::placeholder {
    font-family: 'muliRegular';
    -webkit-font-smooth: antialiased;
    -moz-font-smooth: antialiased;
  }
`

const Form = styled.form`
  position: relative;
  width: 300px;
`

const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: .5rem;
  top: .5rem;
  cursor: pointer;
`
