module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `PODDB`,
    description: ``,
    author: `@PODDB`,
    siteUrl: `https://poddb.io`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-plugin-styled-components`,
  ],
}
