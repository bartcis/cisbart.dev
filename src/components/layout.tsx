import React, { ReactNode } from 'react'
import Markdown from 'markdown-to-jsx'
import Gist from 'react-gist'
import { StaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'

import Header from './header'

interface Props {
  children: ReactNode,
  props: any,
  src: string,
}

const ScriptHandler = (props:Props) => {
  if (props.src && props.src.includes('gist.github.com')) {
    return <Gist id={props.src.split('/')[4].split('.')[0]}/>
  }
  return null
}

const Layout = ({ children }: Props) => (
  <StaticQuery
  query={graphql`{
        blog {
          blogPosts {
            title
            description {
              markdown
            }
            id
            heroImage {
              url
            }
            content
          }
        }
      }
    `}
    render={({blog: {blogPosts}}) => (
      <>
        <Header/>
          {console.log(blogPosts)}
        
          <main>{children}</main>
          
          <div>
            {blogPosts.map(post => (
              <Container key={post.id}>
                <p>{post.title}</p>
                <p>{post.description.markdown}</p>
                <img src={post.heroImage.url}/>
                <Markdown options={{
                  overrides: {
                    script: {
                      component: ScriptHandler
                    },
                    Gist: Gist,
                  },
                }}
                >
                  {post.content[0]}
                </Markdown>
              </Container>
            )
            )}
          </div>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
      </>
    )}
  />
)

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: purple;
`
export default Layout
