const path = require('path')

module.exports = {
  title: "bye~ bye~ bio",
  //serviceWorker: true,
  host: '127.0.0.1',
  theme: path.resolve(__dirname, '../../'),
  themeConfig: {
    author: 'kimoton',
    description: "My note of learning bioinformatics",
    docsDir: 'docs',
    nav: [
      { text: 'About', link: '/about.html' },
    ],
    sidebarDepth: 3,
    sidebar: {
      '/config/': [
        '',
        'front-matter',
        'palette'
      ],
    },
    footer: {
      contact: [
        {
          type: 'mail',
          link: 'mailto:kimoppy126@gmail.com',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/__kimoton',
        },
      ],
      copyright: [
        {
          text: 'Copyright © 2020 kimoton',
          link: '',
        },
      ],
    },
    newsletter: {
      endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/config/#feed
     */
    feed: {
      canonical_base: 'https://127.0.0.1:8080/',
    },
    smoothScroll: true,
    head: [
       ['link', { rel: 'icon', type: 'image/jpeg', href: '/kimoton.jpeg' }],
    ],
  },
  //plugins: [
  //  [
  //  '@vuepress/blog',
  //  {
  //    directories: [
  //      {
  //        // Unique ID of current classification
  //        id: 'post',
  //        // Target directory
  //        dirname: '_posts',
  //        // Path of the `entry page` (or `list page`)
  //       // path: '/',
  //      },
  //    ],
  //  },
  //  '@vuepress/medium-zoom'
  //  ]
  //],
};
