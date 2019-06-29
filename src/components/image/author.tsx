import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const AuthorImage = () => (
  <StaticQuery
    query = {graphql`
      query {
        placeholderImage: file(relativePath: { eq: "o_mnie_min.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render = {data => 
    
    <Img style={{
        boxShadow: `0px 3px 15px 0px ${({theme}) => theme.colors.whiteDark}`,
        width: '120px',
        height: '120px',
        borderRadius: '100px'
      }}
      fluid={data.placeholderImage.childImageSharp.fluid} />
    }
  />
)
export default AuthorImage
