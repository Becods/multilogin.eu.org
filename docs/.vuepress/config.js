module.exports = {
  theme:"antdocs",
  title: "MultiLogin",
  description: "支持多Yggdrasil的外置登入插件",
  base: "/",
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/CaaMoe/MultiLogin",
    editLinks: false,
  },
};