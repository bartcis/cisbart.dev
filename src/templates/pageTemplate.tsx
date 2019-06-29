import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { graphql } from 'gatsby';
import Markdown from 'markdown-to-jsx'
import styled from 'styled-components'

import GlobalStyle from '../components/partials/common/globalStyle'
import SEO from '../components/seo'
import { theme } from '../components/utils/theme';
import Header from '../components/header'
import SideMenu from '../components/sideMenu'
import Wrapper from '../components/partials/common/wrapper'
import BlogFooter from '../components/footer';
import H1 from '../components/partials/common/h1'

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.blog.blogPages[0];
    return (
      <ThemeProvider theme={theme}>
        <>
          <SEO title={currentPage.title} keywords={currentPage.slug} description={currentPage.description}/>
          <GlobalStyle/>
          <Header/>
          <SideMenu/>
          <Wrapper isGapped>
            <Heading>{currentPage.title}</Heading>
            <StyledMarkdown>
              {currentPage.content}
            </StyledMarkdown>
            <BlogFooter/>
          </Wrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query ($id: ID!) {
    blog {
      blogPages(where: {id: $id}) {
        title
        content
        slug
        createdAt
        description
      }
    }
  }
`
const Heading = styled(H1)`
  text-align: center;
`
const StyledMarkdown = styled(Markdown)`
  margin: 1rem 0;
  h2 {
    font-size: 1.25rem;
    @media (min-width: 600px) {
      font-size: 1.5rem;
    }
  }
  h3 {
    font-size: 1rem;
    @media (min-width: 600px) {
      font-size: 1.25rem;
    }
  }
  p {
    display: flex;
    font-size: 1rem;
    @media (min-width: 600px) {
      font-size: 1.1rem;
    }
  }
  img {
    max-width: 280px;
    box-shadow: 15px 15px 30px ${({theme}) => theme.colors.grey};
    margin: 1rem auto;
    @media (min-width: 600px) {
      max-width: 400px;
    }
    @media (min-width: 1000px) {
      max-width: 700px;
    }
  }
`
