import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import { graphql } from 'gatsby'
import Markdown from 'markdown-to-jsx'
import styled from 'styled-components'
import Gist from 'react-gist'

import GlobalStyle from '../components/partials/common/globalStyle'
import SEO from '../components/seo'
import { theme } from '../components/utils/theme'
import Header from '../components/header'
import SideMenu from '../components/sideMenu'
import Wrapper from '../components/partials/common/wrapper'
import BlogFooter from '../components/footer'
import Tag from '../components/partials/common/tag'
import H1 from '../components/partials/common/h1'

const ScriptHandler = (props) => {
  if (props.src && props.src.includes('gist.github.com')) {
    return <Gist id={props.src.split('/')[4].split('.')[0]}/>
  }
  return null
}

class PostTemplate extends Component {
  render() {
    const currentPost = this.props.data.blog.blogPosts[0];

    return (
      <ThemeProvider theme={theme}>
        <>
          <SEO title={currentPost.title} keywords={currentPost.slug} description={currentPost.description}/>
          <GlobalStyle/>
          <Header/>
          <SideMenu/>
          <HeroImage style={{ backgroundImage: `url(${currentPost.heroImage.url})` }}/>
          <Wrapper>
            <Heading>{currentPost.title}</Heading>
            <FlexWrapper>
              <h2>Published: {currentPost.createdAt.slice(0, 10).split('-').join('/')}</h2>
              <TagContainer>
                {currentPost.tags.map(tag => (
                  <Tag key={tag} target={tag.toLowerCase()}/>
                ))}
              </TagContainer>
            </FlexWrapper>
            <StyledMarkdown isDescription>
              {currentPost.description.markdown}
            </StyledMarkdown>
            <StyledMarkdown options={{
                overrides: {
                  script: {
                    component: ScriptHandler
                  },
                  Gist: Gist,
                },
              }}>
              {currentPost.content[0]}
            </StyledMarkdown>
            <BlogFooter/>
          </Wrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query ($id: ID!) {
    blog {
      blogPosts(where: {id: $id}) {
        createdAt
        id
        title
        description {
          markdown
        }
        tags
        slug
        heroImage {
          url
        }
        content
      }
    }
  }
`
const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  z-index: 1;
  justify-content: center;
`;

const FlexWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  margin: 0;
  @media (min-width: 600px) {
    margin: 1rem 0;
  }
  h2 {
    font-size: 1rem;
  }
`

const HeroImage = styled.div`
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 300px;
  box-shadow: 0px 0px 20px 0px ${({theme}) => theme.colors.whiteDark};
  @media (min-width: 600px) {
    height: 400px;
  }
`

const Heading = styled(H1)`
  text-align: center;
  z-index: 1;
  align-self: flex-end;
  margin: 2rem 0 0;
  @media (min-width: 600px) {
    margin: 2rem 0;
  }
`
const StyledMarkdown = styled(Markdown)`
  font-weight: ${(props) => props.isDescription ? '700' : '400'};
  font-size: 1rem;
  @media (min-width: 600px) {
    font-size: 1.1rem;
  }
  p, span {
    font-size: 1rem;
    @media (min-width: 600px) {
      font-size: 1.1rem;
    }
  }

  img {
    width: 100%;
    box-shadow: 15px 15px 30px ${({theme}) => theme.colors.grey};
    margin: 1rem auto;
  }
`
