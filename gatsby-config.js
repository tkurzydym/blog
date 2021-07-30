module.exports = {
  siteMetadata: {
    title: `Tobis Dev Blog`,
    description: `Personal blog for documentation of my projects as developer`,
    author: `@tkurzydym`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
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
        name: `markdown-pages`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tkurzydym-blog`,
        short_name: `blog`,
        start_url: `/`,
        background_color: `#87CEFA`,
        theme_color: `#87CEFA`,
        display: `minimal-ui`,
        icon: 'favicons/favicon-32x32.png',
        icons: [
            {
              src: '/favicons/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: '/favicons/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/favicons/favicon-16x16.png',
              sizes: '16x16',
              type: 'image/png'
            },
            {
              src: '/favicons/favicon-32x32.png',
              sizes: '32x32',
              type: 'image/png'
            },
            {
              src: '/favicons/apple-touch-icon.png',
              sizes: '180x180',
              type: 'image/png'
            }
        ],
        theme_color_in_head: false
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-fontawesome-css`,
  ],
}