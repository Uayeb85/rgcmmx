// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss")


module.exports = {
  siteName: 'REGUCOM',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CO_SPACE, // required
        accessToken:  process.env.CO_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Blog',
        remark: {
          // remark options
        }
      }
    }
  ],
  templates:{
    ContentfulCrc: '/productos/head-end/:slug',
    ContentfulFibra:'/productos/fibras-opticas/:slug',
    ContentfulPost: '/post/:slug',
    Blog:[
      {
        path: "/blog/:title",
        component:"./src/templates/Blog.vue"
      }
    ]
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  }

}