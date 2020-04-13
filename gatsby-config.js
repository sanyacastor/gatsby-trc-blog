
module.exports = {
  siteMetadata: {
    title: `Trackloblog`,
    description: `Треклокросс серия. Угар по все стране, от Питера до Омска.`,
    author: `@sanyscastor`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                text: {
                  classes: "blog-text",
                },
                fullWidthPic: {
                  classes: "fwp",
                },
                info: {
                  classes: "info",
                  title: "optional",
                },
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
      {
      resolve: "gatsby-plugin-firebase",
        options: {
          credentials: {
            apiKey: "AIzaSyChZD34h4R1yrpDLGjof2RnRLySUWzqqFg",
            authDomain: "trc19-a7d22.firebaseapp.com",
            databaseURL: "https://trc19-a7d22.firebaseio.com",
            projectId: "trc19-a7d22",
            storageBucket: "trc19-a7d22.appspot.com",
            messagingSenderId: "706630593121",
            appId: "1:706630593121:web:f1b41306036a8761"
          }
        }
      },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
