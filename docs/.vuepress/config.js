const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const BASE_URL = IS_PROD ? '/vue-pandora/' : '/'
module.exports = {
  base: BASE_URL,
  title: 'Vue-pandora',
  description: 'A component library of custom secondary encapsulation about element-ui', //描述
  port: '4444',
  markdown: {
    lineNumber: false //
  },
  themeConfig: {
    nav: [
      // 添加导航栏
      {
        text: '首页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '使用',
        link: '/usage/'
      },
      {
        text: 'API',
        link: '/api/'
      },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [{ text: 'vue-pandora', link: 'https://github.com/yelingfeng/vue-pandora' }]
      }
    ],
    // 添加侧边栏
    sidebar: 'auto',
    sidebarDepth: 2
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        }
      }
    ]
  ]
}
