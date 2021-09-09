if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = {
  siteMetadata: {
    title: 'Caspar Health',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/markdowns`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'caspar-website',
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    {      
      resolve: `gatsby-plugin-google-fonts`,
      options: {
      fonts: [
        `Open Sans pro\:300,400,500,600,700`
      ],
        display: 'swap'
      },
    },
  ],
}
