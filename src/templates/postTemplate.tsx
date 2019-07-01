import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import { Link, graphql } from 'gatsby'
import Markdown from 'markdown-to-jsx'
import styled, { createGlobalStyle } from 'styled-components'
import Gist from 'react-gist'

import SEO from '../components/seo'
import { theme } from '../components/utils/theme'
import Header from '../components/header'
import SideMenu from '../components/sideMenu'
import Wrapper from '../components/partials/common/wrapper'
import BlogFooter from '../components/footer'
import Tag from '../components/partials/common/tag'
import H1 from '../components/partials/common/h1'
import H2 from '../components/partials/common/h2'
import AuthorBox from '../components/partials/authorBox'
import muliRegular2 from '../fonts/muli-regular-webfont.woff2'
import muliRegular from '../fonts/muli-regular-webfont.woff'
import muliBlack2 from '../fonts/muli-black-webfont.woff2'
import muliBlack from '../fonts/muli-black-webfont.woff'
import muliLight2 from '../fonts/muli-light-webfont.woff2'
import muliLight from '../fonts/muli-light-webfont.woff'
import muliBold2 from '../fonts/muli-bold-webfont.woff2'
import muliBold from '../fonts/muli-bold-webfont.woff'

interface Props {
  isSmall: boolean,
  theme: {
    colors: {
      blue: string,
      whiteDark: string,
      black: string
    },
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a, h1, h2 {
    @font-face {
      font-family: 'muliBlack';
      src: url(${muliBlack2}) format('woff2'),
        url(${muliBlack}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
    font-family: 'muliBlack';
  }

  h1, h2, h3, h4, p {
    color: ${({theme}: Props) => theme.colors.black};
  }

  h3, p, span {
    @font-face {
      font-family: 'muliRegular';
      src: url(${muliRegular2}) format('woff2'),
        url(${muliRegular}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
    font-family: 'muliRegular';
  }

  a {
    text-decoration: none;
    color: ${({theme}: Props) => theme.colors.turquoiseDark};
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    :hover {
      color: ${({theme}: Props) => theme.colors.turquoise};
    }
  }

  strong {
    @font-face {
      font-family: 'muliBold';
      src: url(${muliBold2}) format('woff2'),
        url(${muliBold}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
    font-family: muliBold;
  }

  blockquote {
    background-color: ${({theme}: Props) => theme.colors.whiteDark};
    margin: 1rem;
    padding: .5rem 1rem;
    border-radius: 15px;
    box-shadow: 10px 10px 20px ${({theme}) => theme.colors.grey};
  }

  h4 {
    @font-face {
      font-family: 'muliLight';
      src: url(${muliLight2}) format('woff2'),
        url(${muliLight}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
    font-family: 'muliLight';
    margin: .5rem 0;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.25rem;
  }
`;

const ScriptHandler = (props) => {
  if (props.src && props.src.includes('gist.github.com')) {
    return <Gist id={props.src.split('/')[4].split('.')[0]}/>
  }
  return null
}

class PostTemplate extends Component {
  constructor() {
    super()
    this.currentPost;
    this.similarArticles = []
  }
  discus() {
    var disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = this.props.data.blog.blogPosts[0].slug;
      };

      (function() {
      var d = document, s = d.createElement('script');
      s.src = 'https://cisbart-dev.disqus.com/embed.js';
      s.setAttribute('data-timestamp', + new Date());
      (d.head || d.body).appendChild(s);
      })();
  }

  filterData() {
    const current = this.props.pageContext.id;
    const allPosts = this.props.data.blog.blogPosts;
    let currentTags;

    allPosts.map(a => {
      if (a.id === current) {
        this.currentPost = a;
        currentTags = a.tags;
      }
    });

    allPosts.map(a => {
      if (this.similarArticles.length < 4) {
        if (a.tags.includes(currentTags[0]) && a.id !== current) {
          this.similarArticles.push(a)
        }
      }
    });
  }

  componentWillMount() {
    this.filterData();
  }

  componentDidMount() {
    this.discus();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <SEO title={this.currentPost.title} keywords={this.currentPost.slug} description={this.currentPost.description}/>
          <GlobalStyle/>
          <Header/>
          <SideMenu/>
          <HeroImage style={{ backgroundImage: `url(${this.currentPost.heroImage.url})` }}/>
          <Wrapper>
            <Heading>{this.currentPost.title}</Heading>
            <FlexWrapper>
              <h2>Published: {this.currentPost.createdAt.slice(0, 10).split('-').join('/')}</h2>
              <TagContainer>
                {this.currentPost.tags.map(tag => (
                  <Tag key={tag} target={tag.toLowerCase()}/>
                ))}
              </TagContainer>
            </FlexWrapper>
            <StyledMarkdown>
              {this.currentPost.description.markdown}
            </StyledMarkdown>
            <StyledMarkdown options={{
                overrides: {
                  script: {
                    component: ScriptHandler
                  },
                  Gist: Gist,
                },
              }}>
              {this.currentPost.content[0]}
            </StyledMarkdown>
            <AuthorBox/>
            <SimilarArticles>
              <H2>Similar Articles:</H2>
              {this.similarArticles.map(post => (
                <div key={post.id}>
                  <Link dangerouslySetInnerHTML={{ __html: post.title }} to={post.slug}/>
                </div>
              ))}
            </SimilarArticles>
            <div id="disqus_thread"></div>
            <BlogFooter/>
          </Wrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query {
    blog {
      blogPosts {
        createdAt
        id
        title
        description {
          markdown
        }
        tags
        slug
        heroImage {
          url
        }
        content
      }
    }
  }
`

const SimilarArticles = styled.div`
  margin: 2rem 0;
  div {
    margin: 1rem 0;
  }
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  z-index: 1;
  justify-content: center;
`;

const FlexWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  margin: 0;
  @media (min-width: 600px) {
    margin: 1rem 0;
  }
  h2 {
    font-size: 1rem;
  }
`

const HeroImage = styled.div`
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 300px;
  box-shadow: 0px 0px 20px 0px ${({theme}) => theme.colors.whiteDark};
  @media (min-width: 600px) {
    height: 400px;
  }
`

const Heading = styled(H1)`
  text-align: center;
  z-index: 1;
  align-self: flex-end;
  margin: 2rem 0 0;
  @media (min-width: 600px) {
    margin: 2rem 0;
  }
`
const StyledMarkdown = styled(Markdown)`
  font-size: 1rem;
  line-height: 1.6;
  @media (min-width: 600px) {
    font-size: 1.1rem;
  }
  p, span {
    font-size: 1rem;
    @media (min-width: 600px) {
      font-size: 1.1rem;
    }
  }

  img {
    width: 100%;
    box-shadow: 15px 15px 30px ${({theme}) => theme.colors.grey};
    margin: 1rem auto;
  }
`
