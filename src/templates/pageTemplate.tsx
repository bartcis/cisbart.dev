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
const Heading = styled.h1`
  text-align: center;
`
const StyledMarkdown = styled(Markdown)`
margin: 1rem;
  p {
    display: flex;
  }
  img {
    max-width: 200px;
    box-shadow: 15px 15px 30px ${({theme}) => theme.colors.grey};
    margin: 1rem auto;
    @media (min-width: 480px) {
      max-width: 700px;
    }
  }
`
