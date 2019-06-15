import React, { ReactNode } from 'react'
import Markdown from 'markdown-to-jsx'
import Gist from 'react-gist'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import SideMenu from './sideMenu'
import AuthorBox from './partials/authorBox'
import Wrapper from './partials/common/wrapper'
import ArticleBox from './partials/articleBox'

interface Props {
  children: ReactNode,
  props: any,
  src: string,
}

const Layout = ({ children }: Props) => (
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
          <div>
            {blogPosts.map(post => (
                <ArticleBox key={post.id} title={post.title}
                  description={post.description.markdown}
                  date={post.createdAt.slice(0, 10).split('-').join('/')}
                  tag1={post.tags[0]}
                  tag2={post.tags[1]}
                  tag3={post.tags[2]}
                  image={post.heroImage.url}
                  link = {post.slug}
                />
            ))}
          </div>
        </Wrapper>

          {console.log(blogPosts)}
      </>
    )}
  />
)

export default Layout
