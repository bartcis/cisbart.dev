import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby'

const PageList = () => (
  <StaticQuery
    query={graphql`{
        blog {
          blogPages {
            id 
            title
            icon {
              url
            }
          }
        }
      }
    `}
    render={({blog: {blogPages}}) => (
      <>
        <ListContainer>
          {blogPages.map(page => (
            <Page key={page.id} to={page.title}>
              <Icon src={page.icon.url}/>
              <h2 dangerouslySetInnerHTML={{ __html: page.title }}></h2>
            </Page>
          ))
          }
        </ListContainer>
      </>
    )}
  />
)

const ListContainer = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.colors.whiteDark};
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
`;

const Page = styled(Link)`
  padding: .5rem 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  h2 {
    transition: color .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      color: ${({theme}) => theme.colors.grey};
    }
  }
`;

export default PageList;
