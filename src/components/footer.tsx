import React from 'react';
import styled from 'styled-components'

const BlogFooter = () => (
  <Footer>
    <p>© Copyright {new Date().getFullYear()} Bartek Cis</p>
  </Footer>
)

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  border-top: 1px solid ${({theme}) => theme.colors.whiteDark};
  color: ${({theme}) => theme.colors.grey};
  max-width: 600px;
  margin: 6rem auto 0;
  p {
    font-size: 1rem;
  }
`;

export default BlogFooter;
