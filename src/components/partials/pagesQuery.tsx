import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

import PageList from './pageList'

const PagesQuery = () => (
  <StaticQuery
    query={graphql`{
      blog {
          blogPages {
            id 
            title
            slug
            icon {
              url
            }
          }
        }
      }
    `}
    render={({blog: {blogPages}}) => (
      <>
        <PageList pages={blogPages} />
      </>
    )}
  />
)

export default PagesQuery
