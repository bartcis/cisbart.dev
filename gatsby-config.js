module.exports = {
  pathPrefix: `/cisbart.dev`,
  siteMetadata: {
    title: `Bartek Cis - JS Developer`,
    description: `This is blog of JavaScript Developer. I hope you'll enjoy. Read, like, share!`,
    author: `@bartcis`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    // `gatsby-plugin-offline`,
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
  ],
}
