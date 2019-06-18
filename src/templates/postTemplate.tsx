import React, { Component } from 'react'
// import Markdown from 'markdown-to-jsx'
// import Gist from 'react-gist'
// import { StaticQuery, graphql } from 'gatsby'
// import styled from 'styled-components'
// const ScriptHandler = (props:Props) => {
//   if (props.src && props.src.includes('gist.github.com')) {
//     return <Gist id={props.src.split('/')[4].split('.')[0]}/>
//   }
//   return null
// }

// const Layout = ({ children }: Props) => (
//   <StaticQuery
//   query={graphql`{
//         blog {
//           blogPosts {
//             title
//             description {
//               markdown
//             }
//             id
//             heroImage {
//               url
//             }
//             content
//             tags
//           }
//         }
//       }
//     `}
//     render={({blog: {blogPosts}}) => (
//       <>
//         <Header/>
//         <SideMenu/>
//         <Wrapper isGapped>
//           <AuthorBox/>
//           <ArticleBox title={'New Article'}
//             description={'All you need to know about it'}
//             date={'07/07/17'}
//             tag1={'JavaScript'}
//             tag2={'html'}
//             tag3={'css'}
//             image={'IMAGE'}
//             />
//         </Wrapper>

//           {console.log(blogPosts)}
        
//           <main>{children}</main>
          
//           <div>
//             {blogPosts.map(post => (
//               <Container key={post.id}>
//                 <p>{post.title}</p>
//                 <p>{post.description.markdown}</p>
//                 <img src={post.heroImage.url}/>
//                 {/* <Markdown options={{
//                   overrides: {
//                     script: {
//                       component: ScriptHandler
//                     },
//                     Gist: Gist,
//                   },
//                 }}
//                 >
//                   {post.content[0]}
//                 </Markdown> */}
//               </Container>
//             )
//             )}
//           </div>
//           <footer>
//             © {new Date().getFullYear()}, Built with
//             {` `}
//             <a href="https://www.gatsbyjs.org">Gatsby</a>
//           </footer>
//       </>
//     )}
//   />
// )

export default class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost;

    return (
      <>
        <h1>ABC</h1>
      </> 
    )
  }
}

// export const postQuery = graphql`
//   query currentPostQuery($id: String!) {
//     blogPost(id: { eq: $id }) {
//       id  
//       slug
//       title
//     }
//   }
// `
