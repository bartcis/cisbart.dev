import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Tag from './common/tag'
import Text from './common/text'
import H2 from './common/h2'

interface Props {
  theme: {
    colors: {
      blue: string,
      whiteDark: string,
    },
  }
}

class ArticleBox extends Component { 
  render() {
    return (
      <Container to={`/${this.props.link}`}>
        <div className="image" style={{ backgroundImage: `url(${this.props.image})` }}></div>
        <div className="content">
          <H2 className="content__title">{this.props.title}</H2>
          <Text isSmall className="content__subtitle">{this.props.description}</Text>
        </div>
        <div className="info">
          <Text isSmall className="info__date">{this.props.date}</Text>
          {this.props.tag1 ? <Tag target={this.props.tag1.toLowerCase()}/> : ''}
          {this.props.tag2 ? <Tag target={this.props.tag2.toLowerCase()}/> : ''}
          {this.props.tag3 ? <Tag target={this.props.tag3.toLowerCase()}/> : ''}
        </div>
      </Container>
    )
  }
}

const Container = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  border-radius: 100px;
  border: 1px solid ${({theme}) => theme.colors.whiteDark};
  box-shadow: none;
  overflow: hidden;
  text-decoration: none;
  height: 150px;
  position: relative;
  box-sizing: border-box;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media (min-width: 600px) {
    width: calc(100% - 2rem);
    margin: 1rem;
    margin: 3rem 0;
    flex-wrap: nowrap;
    width: 100%;
    padding: 0;
  }
  :hover {
    box-shadow: 15px 10px 15px ${({theme}) => theme.colors.grey};
    .content {
      &__title {
        @media (min-width: 800px) {
          transform: translateY(-3px);
        }
      }
      &__subtitle {
        opacity: 1;
      }
    }
  }
  .image {
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 150px;
    border-radius: 100px;
    display: none;
    @media (min-width: 600px) {
      display: block;
    }
  }
  .content {
    padding: .5rem 1rem;
    width: 90%;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    @media (min-width: 400px) {
      padding: 1rem;
    }
    @media (min-width: 600px) {
      width: calc(100% - 300px);
    }
    &__title {
      transform: translateY(0);
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
      margin: auto;
      text-align: center;
      @media (min-width: 600px) {
        transform: translateY(25px);
      }
    }
    &__subtitle {
      transform: translateY(-3px);
      opacity: 0;
      transition: all 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      display: none;
      @media (min-width: 800px) {
        display: block;
      }
    }
  }
  .info {
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: relative;
    right: 0;
    box-sizing: border-box;
    @media (min-width: 600px) {
      position: absolute;
      width: 150px;
      height: 100%;
      padding: 1rem;
    }
    &__date {
      width: 100%;
      margin: 0;
      display: none;
      @media (min-width: 600px) {
        display: block;
      }
    }
  }
`;

export default ArticleBox
