import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import muliRegular2 from '../../fonts/muli-regular-webfont.woff2'
import muliRegular from '../../fonts/muli-regular-webfont.woff'
import searchIcon from '../../images/icon-search.svg'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div>
        <Form>
          <Input placeholder="Search"
            type="text"
            value={this.state.query}
            onChange={this.search}
          />
          <Icon></Icon>
        </Form>
        {/* <ul>
          {this.state.results.map(page => (
            <li key={page.id}>
              <Link to={"/" + page.path}>{page.title}</Link>
              {": " + page.tags.join(`,`)}
            </li>
          ))}
        </ul> */}
      </div>
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
  height: 2rem;
  width: 100%;
  border: 1px solid ${({theme}) => theme.colors.whiteDark};
  border-radius: 25px;
  padding: 1rem;
  font-size: .8rem;
  color: ${({theme}) => theme.colors.grey};
  font-family: 'muliRegular';
  box-sizing: border-box;
  ::placeholder {
    font-family: 'muliRegular';
    -webkit-font-smooth: antialiased;
    -moz-font-smooth: antialiased;
  }
`

const Form = styled.form`
  position: relative;
  width: 200px;
  margin-right: 3rem;
  @media (min-width: 600px) {
    width: 250px;
  }
`

const Icon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: .75rem;
  top: .5rem;
  cursor: pointer;
`
