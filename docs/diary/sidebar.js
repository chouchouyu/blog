const { title } = require("../.vuepress/config");

module.exports = [
  {
    title: "HTML",
    collapsable: true,
    children: [
      { title: "互联网基本原理", path: "/guide/notes/html/互联网基本原理" },
      { title: "基本标签", path: "/guide/notes/html/02-基本标签" },
      { title: "表单元素", path: "/guide/notes/html/11-表单" },
    ],
  },
  {
    title: "CSS",
    collapsable: true,
    children: [
      {
        title: "01-CSS基本样式和选择器",
        path: "/guide/notes/css/03-CSS基本样式和选择器",
      },
      { title: "02-CSS盒模型", path: "/guide/notes/css/04-盒模型" },
      { title: "03-行内盒模型", path: "/guide/notes/css/05-行内盒模型" },
      { title: "04-显示样式", path: "/guide/notes/css/06-显示样式" },
      { title: "05-背景样式", path: "/guide/notes/css/07-背景样式" },
      { title: "06-圆角渐变", path: "/guide/notes/css/08-圆角渐变" },
      { title: "07-浮动", path: "/guide/notes/css/09-浮动" },
      { title: "08-定位", path: "/guide/notes/css/10-定位" },
      {
        title: "09-css样式书写顺序和命名规范",
        path: "/guide/notes/css/css样式书写顺序和命名规范",
      },

      {
        title: "11-高级选择器和伪元素",
        path: "/guide/notes/css/13-高级选择器和伪元素",
      },
      { title: "12-动画样式", path: "/guide/notes/css/14-动画样式" },
      { title: "13-transform", path: "/guide/notes/css/15-transform" },
      {
        title: "14-3D盒阴影和遮罩",
        path: "/guide/notes/css/16-3d和盒阴影和遮罩",
      },
      { title: "15-弹性盒模型", path: "/guide/notes/css/17-弹性盒模型" },
      {
        title: "16-阿里图标 组件化 swiper",
        path: "/guide/notes/css/18-阿里图标 组件化 swiper",
      },
      { title: "17-响应式", path: "/guide/notes/css/19-响应式" },
      { title: "less", path: "/guide/notes/css/less" },
    ],
  },

  {
    title: "Javascipt",
    collapsable: true,
    children: [
      { title: "01-认识javaScript", path: "/guide/notes/js/01-认识javaScript" },
      {
        title: "02-变量与数据类型介绍",
        path: "/guide/notes/js/02-变量与数据类型介绍",
      },
      { title: "03-基础dom操作", path: "/guide/notes/js/03-基础dom操作" },
      { title: "04-表达式和操作符", path: "/guide/notes/js/04-表达式和操作符" },
      { title: "05-判断", path: "/guide/notes/js/05-判断" },
      { title: "06-循环", path: "/guide/notes/js/06-循环" },
      { title: "07-算法拓展", path: "/guide/notes/js/07-算法拓展" },
      { title: "08-函数", path: "/guide/notes/js/08-函数" },
      {
        title: "09-作用域,闭包,预解析",
        path: "/guide/notes/js/09-作用域,闭包,预解析",
      },
      { title: "10-数组", path: "/guide/notes/js/10-数组" },
      { title: "11-字符串", path: "/guide/notes/js/11-字符串" },
      { title: "12-类型转换", path: "/guide/notes/js/12-类型转换" },
      { title: "13-DOM进阶", path: "/guide/notes/js/13-DOM进阶" },
      { title: "14-dom事件与机制", path: "/guide/notes/js/14-dom事件与机制" },
      { title: "15-bom", path: "/guide/notes/js/15-bom" },
      { title: "16-面向对象", path: "/guide/notes/js/16-面向对象" },
      {
        title: "17-内置数学和时间对象",
        path: "/guide/notes/js/17-内置数学和时间对象",
      },
      {
        title: "18-各种距离宽高获取",
        path: "/guide/notes/js/18-各种距离宽高获取",
      },
      { title: "19-正则表达式", path: "/guide/notes/js/19-正则表达式" },
      { title: "20箭头函数", path: "/guide/notes/js/21-箭头函数" },
      { title: "21-解构赋值", path: "/guide/notes/js/22-解构赋值" },
      {
        title: "22-对象字面量增强和函数默认参数",
        path: "/guide/notes/js/23-对象字面量增强和函数默认参数",
      },
      {
        title: "23-剩余参数和展开运算符",
        path: "/guide/notes/js/24-剩余参数和展开运算符",
      },
      {
        title: "24-Set 和 Map数据结构和Symbol",
        path: "/guide/notes/js/25-Set 和 Map数据结构和Symbol",
      },
      {
        title: "25-遍历器和for-of循环",
        path: "/guide/notes/js/26-遍历器和for-of循环",
      },
      { title: "26-Promise", path: "/guide/notes/js/27-Promise" },
      { title: "27-Clsss类", path: "/guide/notes/js/28-Clsss类" },
      { title: "28-module模块", path: "/guide/notes/js/29-module模块" },
      { title: "29-Babel", path: "/guide/notes/js/30-Babel" },
      {
        title: "30-前后端通信和HTTP协议",
        path: "/guide/notes/js/31-前后端通信和HTTP协议",
      },
      { title: "31-本地存储", path: "/guide/notes/js/32-本地存储" },
      { title: "32-ajax", path: "/guide/notes/js/33-ajax" },
    ],
  },

  {
    title: "HTML&CSS练习",
    collapsable: true,
    children: [
      {
        title: "01-基本标签",
        path: "/guide/notes/htmlcsswork/01-基本标签",
      },
      {
        title: "02-列表标签",
        path: "/guide/notes/htmlcsswork/02-列表标签",
      },
    ],
  },
  {
    title: "Javascipt练习",
    collapsable: true,
    children: [
      {
        title: "01-认识javaScript",
        path: "/guide/notes/jswork/01-认识javascript",
      },
      {
        title: "02-变量与数据类型",
        path: "/guide/notes/jswork/02-变量与数据类型",
      },
      { title: "03-DOM", path: "/guide/notes/jswork/03-DOM" },
      {
        title: "04-表达式和操作符",
        path: "/guide/notes/jswork/04-表达式和操作符",
      },
      { title: "05-判断", path: "/guide/notes/jswork/05-判断" },
      { title: "06-循环", path: "/guide/notes/jswork/06-循环" },
      { title: "07-暂无" },
      { title: "08-函数", path: "/guide/notes/jswork/08-函数" },
      { title: "09-案例", path: "/guide/notes/jswork/09-案例" },
      { title: "10-数组", path: "/guide/notes/jswork/10-数组" },
      { title: "11-字符串", path: "/guide/notes/jswork/11-字符串" },
      { title: "12-DOM", path: "/guide/notes/jswork/12-DOM" },
      { title: "13-BOM", path: "/guide/notes/jswork/13-BOM" },
      { title: "14-面向对象", path: "/guide/notes/jswork/14-面向对象" },
      {
        title: "15-Js阶段测试组卷",
        path: "/guide/notes/jswork/15-Js阶段测试组卷",
      },
      {
        title: "16-模板字符串箭头函数变量声明",
        path: "/guide/notes/jswork/16-模板字符串箭头函数变量声明",
      },
      { title: "17-解构赋值", path: "/guide/notes/jswork/17-解构赋值" },
      {
        title: "18-对象字面量增强和函数默认参数",
        path: "/guide/notes/jswork/18-对象字面量增强和函数默认参数",
      },
      {
        title: "19-剩余参数和数组展开",
        path: "/guide/notes/jswork/19-剩余参数和数组展开",
      },
      { title: "20-Map Set", path: "/guide/notes/jswork/20-Map Set" },
      {
        title: "21-iterator和for...of循环",
        path: "/guide/notes/jswork/21-iterator和for...of循环",
      },
      {
        title: "22-Promise和class",
        path: "/guide/notes/jswork/22-Promise和class",
      },
      { title: "23-module", path: "/guide/notes/jswork/23-module" },
      { title: "24-ES6测评题目", path: "/guide/notes/jswork/24-ES6测评题目" },
      {
        title: "25-本地存储和http",
        path: "/guide/notes/jswork/25-本地存储和http",
      },
      { title: "26-ajax选择题", path: "/guide/notes/jswork/26-ajax选择题" },
    ],
  },
];
