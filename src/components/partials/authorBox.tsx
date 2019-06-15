import React from 'react';
import styled from 'styled-components'
import { Link } from 'gatsby'
import AuthorImage from '../image/author'


const AuthorBox = () => (
  <Container to='/about'>
    <Description>
      <h2>Bartek Cis</h2>
      <p>I'm a JavaScript Developer. I like JS world. I love clean design and writing articles for my blogs.</p>
    </Description>
    <AuthorImage/>
  </Container>
)

const Description = styled.div`
  margin-right: 2rem;
`;

const Container = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  margin: 1rem;
  flex-wrap: wrap-reverse;
  align-items: center;
  background-color: #fff;
  border-radius: 75px;
  padding-left: 5rem;
  box-shadow: 0px 3px 15px 0px ${({theme}) => theme.colors.whiteDark};
  transition: box-shadow 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    box-shadow: 5px 10px 10px ${({theme}) => theme.colors.grey};
  }
`;

export default AuthorBox;
