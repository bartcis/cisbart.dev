import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import SideMenu from './sideMenu'
import AuthorBox from './partials/authorBox'
import Wrapper from './partials/common/wrapper'
import ArticleBox from './partials/articleBox'
import BlogFooter from './footer'

function fiterPosts (posts) {
  let render = [] 
  
  posts.reverse().map(a => {
    if (a.status === 'PUBLISHED') {
      render.push(a);
    }
  })

  return render;
};

const Layout = () => (
  <StaticQuery
  query={graphql`{
        blog {
          blogPosts {
            title
            slug
            description {
              markdown
            }
            id
            createdAt
            heroImage {
              url
            }
            tags
            status
          }
        }
      }
    `}
    render={({blog: {blogPosts}}) => (
      <>
        <Header/>
        <SideMenu/>
        <Wrapper isGapped>
          <AuthorBox/>
          <ArticleWrapper>
            {fiterPosts(blogPosts).map(post => (
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
    )}
  />
)

export default Layout

const ArticleWrapper = styled.div`
  min-height: 70vh;
  @media (min-width: 800px) {
    min-height: 55vh;
  }
`;
