const config = require('./src/data/config')

module.exports = {
  siteMetadata: {
    author: config.author,
    description: config.defaultDescription,
    siteUrl: config.url,
    skillData: config.skillData,
    title: config.defaultTitle,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: config.backgroundColor,
        display: 'minimal-ui',
        icon: './static/favicon/favicon-512.png',
        name: config.defaultTitle,
        short_name: 'starter',
        start_url: '/',
        theme_color: config.themeColor,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    'gatsby-plugin-offline',
  ],
}
