module.exports = {
  theme:"antdocs",
  title: "MultiLogin",
  base: "/",
  markdown: {
    lineNumbers: false,
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'MultiLogin',
      description: '支持多Yggdrasil的外置登入插件'
    },
    '/en/': {
      lang: 'en-US',
      title: 'MultiLogin',
      description: 'A plugin that allows the server to support multiple Yggdrasil coexistenc'
    }
  },
  themeConfig: {
	search: false,
    smoothScroll: true,
    repo: "https://github.com/CaaMoe/MultiLogin",
    editLinks: false,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        lastUpdated: '上次更新',
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        lastUpdated: 'Last Updated',
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true],
	['@vuepress/nprogress', true],
  ],
  configureWebpack: () => {
    const NODE_ENV = process.env.NODE_ENV
    if(NODE_ENV === 'production'){
      return {
        output: {
          publicPath: 'https://cdn.jsdelivr.net/gh/BecodReyes/MultiLoginPage@gh-pages/'
        }
      }
    }
  }
};