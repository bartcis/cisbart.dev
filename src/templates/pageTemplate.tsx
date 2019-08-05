import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import { graphql } from "gatsby"
import Markdown from "markdown-to-jsx"
import styled, { createGlobalStyle } from "styled-components"
import SEO from "../components/seo"
import { theme } from "../components/utils/theme"
import Header from "../components/header"
import SideMenu from "../components/sideMenu"
import Wrapper from "../components/partials/common/wrapper"
import BlogFooter from "../components/footer"
import H1 from "../components/partials/common/h1"
import muliRegular2 from "../fonts/muli-regular-webfont.woff2"
import muliRegular from "../fonts/muli-regular-webfont.woff"
import muliBlack2 from "../fonts/muli-black-webfont.woff2"
import muliBlack from "../fonts/muli-black-webfont.woff"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  blockquote {
    background-color: ${({ theme }: Props) => theme.colors.whiteDark};
    margin: 1rem;
    padding: .5rem 1rem;
    border-radius: 15px;
    box-shadow: 10px 10px 20px ${({ theme }) => theme.colors.grey};
  }
`

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.blog.blogPages[0]
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <SEO
            title={currentPage.title}
            keywords={currentPage.slug}
            description={currentPage.description}
          />
          <Header />
          <SideMenu />
          <Wrapper isGapped>
            <Heading>{currentPage.title}</Heading>
            <StyledMarkdown>{currentPage.content}</StyledMarkdown>
            <BlogFooter />
          </Wrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: ID!) {
    blog {
      blogPages(where: { id: $id }) {
        title
        content
        slug
        createdAt
        description
      }
    }
  }
`
const Heading = styled(H1)`
  text-align: center;
`
const StyledMarkdown = styled(Markdown)`
  @font-face {
    font-family: "muliBlack";
    src: url(${muliBlack2}) format("woff2"), url(${muliBlack}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "muliRegular";
    src: url(${muliRegular2}) format("woff2"),
      url(${muliRegular}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
  margin: 1rem 0;
  line-height: 1.6;
  h2 {
    font-size: 1.25rem;
    font-family: "muliBlack";
    @media (min-width: 600px) {
      font-size: 1.5rem;
    }
  }
  h3 {
    font-size: 1rem;
    font-family: "muliBlack";
    @media (min-width: 600px) {
      font-size: 1.25rem;
    }
  }
  p {
    font-size: 1rem;
    font-family: "muliRegular";
  }
  a {
    text-decoration: none;
    font-family: "muliBlack";
    color: ${({ theme }: Props) => theme.colors.turquoiseDark};
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      color: ${({ theme }: Props) => theme.colors.turquoise};
    }
  }
  img {
    width: 100%;
    box-shadow: 15px 15px 30px ${({ theme }) => theme.colors.grey};
    margin: 1rem auto;
  }
`
