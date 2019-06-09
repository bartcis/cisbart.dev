import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'

import Tag from './common/tag'

function processTags(tags) {
  let fullTagList = [];
  let tagList = [];
  let uniqueList = [];

  tags.map(array => {
    fullTagList.push(array.tags);
  });

  fullTagList.map(array => {
    for (let tag of array) {
      tagList.push(tag);
    }
  });

  tagList.sort().map((a, i) => {
    if (a !== tagList[i + 1]) {
      uniqueList.push(a.toLowerCase());
    }
  });

  return uniqueList;
}

const TagList = () => (
  <StaticQuery
    query={graphql`{
        blog {
          blogPosts {
            tags
          }
        }
      }
    `}
    render={({blog: {blogPosts}}) => (
      <>
        <TagContainer>
            {processTags(blogPosts).map(tag => (
              <Tag key={tag} to={tag} dangerouslySetInnerHTML={{ __html: tag }}/>
            ))}
        </TagContainer>
      </>
    )}
  />
)

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

export default TagList;
