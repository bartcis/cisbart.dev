import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Tag from './common/tag'
import { css } from '@emotion/core';

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
          <h2 className="content__title">{this.props.title}</h2>
          <p className="content__subtitle">{this.props.description}</p>
        </div>
        <div className="info">
          <div className="info__date">{this.props.date}</div>
          {this.props.tag1 ? <Tag to={this.props.tag1} dangerouslySetInnerHTML={{ __html: this.props.tag1 }}/> : ''}     
          {this.props.tag2 ? <Tag to={this.props.tag2} dangerouslySetInnerHTML={{ __html: this.props.tag2 }}/> : ''}     
          {this.props.tag3 ? <Tag to={this.props.tag3} dangerouslySetInnerHTML={{ __html: this.props.tag3 }}/> : ''}     
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
  box-shadow: 0px 3px 15px 0px ${({theme}) => theme.colors.whiteDark};
  overflow: hidden;
  text-decoration: none;
  height: 200px;
  position: relative;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    box-shadow: 5px 10px 10px ${({theme}) => theme.colors.grey};
    .image {
      width: 200px;
    }
    .content {
      width: calc(100% - 400px);
      &__title {
        transform: translateY(-15px);
      }
      &__subtitle {
        transform: translateY(-25px);
        opacity: 1;
      }
    }
  }
  .image {
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 250px;
    border-radius: 100px;
  }
  .content {
    padding: 1rem 2rem;
    width: calc(100% - 450px);
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    &__title {
      transform: translateY(25px);
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &__subtitle {
      transform: translateY(0px);
      opacity: 0;
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
  .info {
    width: 200px;
    height: 100%;
    box-shadow: 0px 3px 15px 0px ${({theme}) => theme.colors.whiteDark};
    border-radius: 100px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    position: absolute;
    right: 0;
    &__date {
      width: 100%;
    }
  }
`;

export default ArticleBox
