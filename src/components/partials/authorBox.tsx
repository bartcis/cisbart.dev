import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby'

import AuthorImage from '../image/author'
import Text from './common/text'
import H2 from './common/h2'

const AuthorBox = () => (
  <Container to='/about'>
    <Description>
      <H2>Bartek Cis</H2>
      <Text isSmall>I'm a JavaScript Developer. I like JS world. I adore clean design and love to write articles for my blogs :)</Text>
    </Description>
    <AuthorImage/>
  </Container>
)

const Description = styled.div`
  margin-right: 0;
  width: calc(100% - 150px);
  line-height: 1.5;
  p {
    display: none;
    @media (min-width: 600px) {
      display: block;
    }
  }
  @media (min-width: 600px) {
    margin-right: 1rem;
  }
`;

const Container = styled(Link)`
  display: none;
  text-decoration: none;
  justify-content: space-between;
  margin: 2rem 0;
  flex-wrap: wrap-reverse;
  align-items: center;
  background-color: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors.whiteDark};
  border-radius: 75px;
  padding-left: 2rem;
  box-shadow: none;
  transition: box-shadow 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media (min-width: 600px) {
    display: flex;
    padding-left: 5rem;
    flex-wrap: nowrap;
  }
  :hover {
    box-shadow: 15px 10px 15px ${({theme}) => theme.colors.grey};
  }
`;

export default AuthorBox;
