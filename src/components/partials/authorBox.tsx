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
      <Text>I'm a JavaScript Developer. I like JS world. I adore clean design and love to write articles for my blogs :)</Text>
    </Description>
    <AuthorImage/>
  </Container>
)

const Description = styled.div`
  margin-right: 2rem;
  width: calc(100% - 182px);
  p {
    font-size: 1rem;
  }
`;

const Container = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  margin: 1rem;
  flex-wrap: wrap-reverse;
  align-items: center;
  background-color: #fff;
  border: 1px solid ${({theme}) => theme.colors.whiteDark};
  border-radius: 75px;
  padding-left: 5rem;
  box-shadow: none;
  transition: box-shadow 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
  :hover {
    box-shadow: 15px 10px 15px ${({theme}) => theme.colors.grey};
  }
`;

export default AuthorBox;
