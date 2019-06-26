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
          {this.props.tag1 ? <Tag to={this.props.tag1.toLowerCase()} dangerouslySetInnerHTML={{ __html: this.props.tag1 }}/> : ''}     
          {this.props.tag2 ? <Tag to={this.props.tag2.toLowerCase()} dangerouslySetInnerHTML={{ __html: this.props.tag2 }}/> : ''}     
          {this.props.tag3 ? <Tag to={this.props.tag3.toLowerCase()} dangerouslySetInnerHTML={{ __html: this.props.tag3 }}/> : ''}     
        </div>
      </Container>
    )
  }
}

const Container = styled(Link)`
  display: flex;
  /* flex-wrap: wrap; */
  margin: 3rem 1rem;
  width: 100%;
  border-radius: 100px;
  border: 1px solid ${({theme}) => theme.colors.whiteDark};
  box-shadow: none;
  overflow: hidden;
  text-decoration: none;
  height: 200px;
  position: relative;
  box-sizing: border-box;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    box-shadow: 15px 10px 15px ${({theme}) => theme.colors.grey};
    .content {
      &__title {
        transform: translateY(-15px);
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
    width: 200px;
    border-radius: 100px;
  }
  .content {
    padding: 1rem 2rem;
    width: calc(100% - 500px);
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    &__title {
      transform: translateY(25px);
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &__subtitle {
      transform: translateY(-25px);
      opacity: 0;
      transition: all 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
  .info {
    width: 220px;
    height: 100%;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    position: absolute;
    right: 0;
    box-sizing: border-box;
    &__date {
      width: 100%;
      margin: 0;
    }
  }
`;

export default ArticleBox
