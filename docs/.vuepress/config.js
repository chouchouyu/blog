module.exports = {
  title: '文档CMS网站',
  description: '网站文档管理中心',
  dest: './dist',
  port: '7777',
  head: [
    ['link', {rel: 'icon', href: '/img/logo.png'}],
    ['link', {rel: 'stylesheet', href: '/css/style.css'}],
    ['script', {chartset: 'utf-8', src: '/js/main.js'}]
],
  markdown: {
      lineNumbers: true
  },
  themeConfig: {
      nav: require("./nav.js"),
      sidebar: require("./sidebar.js"),
      sidebarDepth: 2,
      lastUpdated: 'Last Updated',
      searchMaxSuggestoins: 10,
      serviceWorker: {
          updatePopup: {
              message: "有新的内容.",
              buttonText: '更新'
          }
      },
      editLinks: true,
      editLinkText: '在 GitHub 上编辑此页 ！'
  }
}