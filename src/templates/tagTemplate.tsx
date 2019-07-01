import React, {Component} from 'react'
import { graphql } from 'gatsby'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import Header from '../components/header'
import SideMenu from '../components/sideMenu'
import Wrapper from '../components/partials/common/wrapper'
import H2 from '../components/partials/common/h2'
import ArticleBox from '../components/partials/articleBox'
import BlogFooter from '../components/footer'
import { theme } from '../components/utils/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

class TagTemplate extends Component {
  constructor() {
    super()
    this.postsToRender = [];
  }

  componentWillMount() {
    const currentTag = this.props.pathContext.id;
    const posts = this.props.data.blog.blogPosts;
  
    posts.map(a => {
      a.tags.map(b => {
        if (b.toLowerCase() === currentTag) {
          this.postsToRender.push(a);
        }
      })
    });
  }

  render() {

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle/>
          <Header/>
          <SideMenu/>
          <Wrapper isGapped>
              <H2>
                {this.props.pathContext.id}
              </H2>
              <ArticleWrapper>
                {this.postsToRender.map(post => (
                    <ArticleBox key={post.id} title={post.title}
                      description={post.description.markdown}
                      date={post.createdAt.slice(0, 10).split('-').join('/')}
                      tag1={post.tags[0]}
                      tag2={post.tags[1]}
                      tag3={post.tags[2]}
                      image={post.heroImage.url}
                      link = {post.slug.toLowerCase()}
                    />
                ))}
              </ArticleWrapper>
            <BlogFooter/>
          </Wrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default TagTemplate

export const tagQuery = graphql`{
  blog {
    blogPosts {
      id
      slug
      tags
      title
      createdAt
      description {
        markdown
      }
      heroImage {
        url
      }
    }
  }
}
`

const ArticleWrapper = styled.div`
  min-height: 70vh;
`;
