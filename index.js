const removeMd = require('remove-markdown')
const path = require('path')
const pick = require('lodash/pick')

module.exports = themeConfig => {
  themeConfig = Object.assign(themeConfig, {
    nav: themeConfig.nav || [
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    summary: themeConfig.summary === undefined ? true : themeConfig.summary,
    summaryLength:
      typeof themeConfig.summaryLength === 'number'
        ? themeConfig.summaryLength
        : 200,
    pwa: !!themeConfig.pwa,
  })

  /**
   * Configure blog plugin
   */
  const defaultBlogPluginOptions = {
    directories:[
      {
        id: "en",
        dirname: "_posts",
        path: "/",
        itemPermalink: '/post/:year/:month/:day/:slug',
      },
    ],
      // {
      //   id: 'post',
      //   dirname: '_posts',
      //   path: '/',
      // },
    frontmatters: [
      {
        id: 'tag',
        keys: ['tags'],
        path: '/tag/',
        layout: 'Tags'
      },
    ],
    globalPagination: {
      lengthPerPage: 5,
    },
    comment: {
      // Which service you'd like to use
      service: 'vssue',
      platform: 'github',
      // The owner's name of repository to store the issues and comments.
      owner: 'nkimoto',
      // The name of repository to store the issues and comments.
      repo: 'note',
      labels: [':heart:Vssue', ':mailbox:Comments'],
      clientId: 'dfc4e159039d4362a255',
      clientSecret: 'f7d78384bea5981f20dcae317eaedc09e0068fef'
    },
    sitemap: {
      hostname: 'https://kimoton.com'
    },
  }

  let resolvedFeedOptions
  const isFeedEnabled = themeConfig.feed && themeConfig.feed.canonical_base
  if (isFeedEnabled) {
    const {
      rss = true,
      atom = false,
      json = false,
      ...feedOptions
    } = themeConfig.feed
    resolvedFeedOptions = Object.assign({}, feedOptions, {
      feeds: {
        rss2: { enable: rss },
        atom1: { enable: atom },
        json1: { enable: json },
      },
    })
  }

  const properties = [
    'directories',
    'frontmatters',
    'globalPagination',
    'sitemap',
    'comment',
    'newsletter',
  ]
  const themeConfigPluginOptions = {
    ...pick(themeConfig, properties),
    feed: resolvedFeedOptions,
  }
  const blogPluginOptions = Object.assign(
    {},
    defaultBlogPluginOptions,
    themeConfigPluginOptions
  )


  /*
   * Integrate plugins
   */

  const enableSmoothScroll = themeConfig.smoothScroll === true

  const plugins = [
    '@vuepress/plugin-nprogress',
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
    ['@vuepress/blog', blogPluginOptions],
    ['smooth-scroll', enableSmoothScroll],
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
    ['social-share',
      {
        networks: ['twitter', 'facebook', 'line', ],
        twitterUser: '_kimoton',
        fallbackImage: '/kimoton.jpeg',
        autoQuote: true,
        isPlain: false,
      },
    ]
  ]

  /**
   * Enable pwa
   */
  if (themeConfig.pwa) {
    plugins.push([
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ])
  }

  const config = {
    host: 'localhost',
    plugins,
    /**
     * App Level Enhancements (https://vuepress.vuejs.org/plugin/option-api.html#enhanceappfiles)
     */
    //enhanceAppFiles: path.resolve(__dirname, "enhanceAppFile.js"),
    define: {
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        ? themeConfig.paginationComponent
        : 'Pagination',
    },
    alias: {
      fonts: path.resolve(__dirname, 'fonts'),
    },
    /**
     * Generate summary.
     */
    extendPageData(pageCtx) {
      const strippedContent = pageCtx._strippedContent
      if (!strippedContent) {
        return
      }
      if (themeConfig.summary) {
        pageCtx.summary =
          removeMd(
            strippedContent
              .trim()
              .replace(/^#+\s+(.*)/, '')
              .slice(0, themeConfig.summaryLength)
          ) + ' ...'
        pageCtx.frontmatter.description = pageCtx.summary
      }
      if (pageCtx.frontmatter.summary) {
        pageCtx.frontmatter.description = pageCtx.frontmatter.summary
      }
    },
  }

  return config
}
