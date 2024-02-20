import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "软件设计实践",
  description: "北大软件设计实践课程主页",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '大作业文档', link: 'https://pku-software.github.io/project-doc/' }
    ],

    sidebar: [
      {
        text: '课程文档',
        items: [
          { text: '24春课程文档', link: '/24spring/' },
        ]
      },
      { text: '大作业文档', link: 'https://pku-software.github.io/project-doc/' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pku-software/pku-software.github.io' }
    ]
  }
})
