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
          <HeroImage style={{ backgroundImage: `url(${currentPost.heroImage.url})` }}>
            <FlexWrapper>
              <Heading>{currentPost.title}</Heading>
              <div className='bottom-wrapper'>
                <h2>Published: {currentPost.createdAt.slice(0, 10).split('-').join('/')}</h2>
                <TagContainer>
                    {currentPost.tags.map(tag => (
                      <Tag key={tag} to={tag.toLowerCase()} dangerouslySetInnerHTML={{ __html: tag }}/>
                    ))}
                </TagContainer>
              </div>
            </FlexWrapper>
          </HeroImage>
          <Wrapper>
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
`;

const FlexWrapper = styled(Wrapper)`
  display: flex;
  flex-wrap: wrap;
  .bottom-wrapper {
    align-self: flex-end;
    margin: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 1;
  }
`

const HeroImage = styled.div`
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 600px;
  max-height: 700px;
  box-shadow: 0px 0px 20px 0px ${({theme}) => theme.colors.whiteDark};
  :after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(255,255,255, .85);
  }
`

const Heading = styled.h1`
  text-align: center;
  z-index: 1;
  align-self: flex-end;
`
const StyledMarkdown = styled(Markdown)`
  margin: ${(props) => props.isDescription ? '3rem 1rem' : '1rem'};
  font-weight: ${(props) => props.isDescription ? '700' : '400'};
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
