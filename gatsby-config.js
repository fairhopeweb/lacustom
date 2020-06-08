'use strict';
const path = require("path")
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
{
  resolve: 'gatsby-source-prismic-graphql',
  options: {
    repositoryName: 'bep-fwc-pro',
    pages: {
      type: 'Page',
      match: '/:uid',
      path: '/',
      component: require.resolve('./src/templates/page.js')
    }
    
  },
},

    `gatsby-plugin-react-helmet`,
    {
      resolve: '@builder.io/gatsby',
      options: {
        /** TODO: update this with your API key! */
        publicAPIKey: '01a1197ee4334a64b7d8c39964046f21pYgdcAnAtgn',
        // to allow editing on local host
        custom404Dev: path.resolve('src/pages/404.tsx'),
        templates: {
          // Render every `page` model as a new page using the /page.tsx template
          // based on the URL provided in Builder.io
          page: path.resolve('src/templates/page.tsx')
        }
      },
    },   
   { resolve: `gatsby-source-filesystem`,
             options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },

  `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
