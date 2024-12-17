import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'vstartscomponentlibrary 文档', // 文档标题
  description: '这是 vstartscomponentlibrary 组件库的官方文档', // 描述
  themeConfig: {
    logo: '/logo.png', // 文档站点的 logo 图片
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components' },
      { text: '文档', link: '/getting-started' },
    ],
    sidebar: {
      '/': [
        {
          text: '介绍',
          items: [{ text: '快速开始', link: '/getting-started' }],
        },
        {
          text: '组件',
          items: [{ text: 'Button', link: '/components/button' }],
        },
      ],
    },
  },
})
