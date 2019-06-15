import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
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
    
    <Img css={css`
        box-shadow: 0px 3px 15px 0px ${({theme}) => theme.colors.whiteDark};
        width: 150px;
        height: 150px;
        border-radius: 100px;
      `}
      fluid={data.placeholderImage.childImageSharp.fluid} />
    }
  />
)
export default AuthorImage
