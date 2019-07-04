require('dotenv').config({
  path: '.env.production',
})

const striptags = require("striptags")

const blogQuery = `{
  blog {
    blogPosts {
      title
      description {
        markdown
      }
      tags
      content
    }
  }
}
`

const queries = [
  {
    query: blogQuery,
    transformer: ({ data }) => {
      console.log(data.blog.blogPosts)
      return data.blog.blogPosts
    }
      // 1. Break each post into an array of searchable text chunks.
      // 2. return a flattened array of all indices
      // return data.allMarkdownRemark.nodes.reduce((indices, post) => {
      //   // 1. description (if it exists)
      //   // 2. Each paragraph

      //   const pChunks = striptags(post.html, [], "XXX_SPLIT_HERE_XXX").split(
      //     "XXX_SPLIT_HERE_XXX"
      //   )

      //   const chunks = pChunks.map(chnk => ({
      //     slug: post.fields.slug,
      //     date: post.frontmatter.date,
      //     title: post.frontmatter.title,
      //     excerpt: chnk,
      //   }))

      //   if (post.frontmatter.description) {
      //     chunks.push({
      //       slug: post.fields.slug,
      //       date: post.frontmatter.date,
      //       title: post.frontmatter.title,
      //       excerpt: post.frontmatter.excerpt,
      //     })
      //   }

      //   const filtered = chunks.filter(chnk => !!chnk.excerpt)

      //   return [...indices, ...filtered]
      // }, [])
  },
]

module.exports = {
  pathPrefix: `/cisbart.dev`,
  siteMetadata: {
    title: `Bartek Cis - JS Developer`,
    description: `This is blog of JavaScript Developer. I hope you'll enjoy. Read, like, share!`,
    author: `@bartcis`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bartek Cis - JS Developer`,
        short_name: `Bartek Cis JS`,
        start_url: `/`,
        background_color: `#EDF0EC`,
        theme_color: `#1F2B46`,
        display: `standalone`,
        icon: `src/images/pineapple_white.svg`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Blog`,
        fieldName: `blog`,
        url: `https://api-apeast.graphcms.com/v1/cjwm2voor0ufx01gpeyhvxq06/master`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
      },
    },
  ],
}
