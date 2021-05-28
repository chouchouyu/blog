module.exports = {
  title: '丑丑鱼的潘多拉',
  description: '每一天并不是简单的重复,将在此处留下记录',
  port: '7777',
  base: "/blog/",
  head: [
    ['link', {rel: 'icon', href: '/img/logo.png'}],//地址栏图标
    ['link', {rel: 'stylesheet', href: '/css/style.css'}],
    ['script', {chartset: 'utf-8', src: '/js/main.js'}]
],
  markdown: {
      lineNumbers: true
  },
  themeConfig: {
      nav: require("./nav.js"),
      sidebar: require("./sidebar.js"),
      collapsable:true,
      sidebarDepth: 3,
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