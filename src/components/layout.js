import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'markdown-to-jsx'
import Gist from 'react-gist'
import { StaticQuery, graphql } from 'gatsby'

import Header from "./header"
import "./layout.css"

const ScriptHandler = (props) => {
  // if the script is a gist override it with our react component.
  if (props.src && props.src.includes('gist.github.com')) {
    return <Gist id={props.src.split('/')[4].split('.')[0]}/>
  }
  return null
}

const Layout = ({ children }) => (
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
              <div key={post.id}>
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
              </div>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
