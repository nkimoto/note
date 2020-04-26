const path = require('path')

module.exports = {
  //serviceWorker: true,
  host: 'localhost',
  title: "Data Science note",
  theme: path.resolve(__dirname, '../../'),
  themeConfig: {
    author: 'kimoton',
    description: "My note in learning programming language R, Python etc...",
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    nav: [
      { text: "About", link: "/about/" },
    ],
    sidebarDepth: 3,
    sidebar: {
      '/config/': [
        '',
        'front-matter',
        'palette'
      ],
    },
    smoothScroll: true,
  },
  head: [
     ['link', { rel: 'icon', type: 'image/jpeg', href: '/kimoton.jpeg' }],
  ],
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
