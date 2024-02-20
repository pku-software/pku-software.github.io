import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "软件设计实践",
  description: "北大软件设计实践课程主页",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '大作业文档',
        // link: 'https://pku-software.github.io/project-doc/'
        link: ''
      }
    ],

    sidebar: [
      {
        text: '24春课程文档',
        link: '/24spring/',
        items: [
          { text: '课程通知', link: '/24spring/notices' },
          {
            text: '在提问之前',
            items: [
              {
                text: '如何找到问题的答案',
                link: '/24spring/before_ask/how_to_find_answers'
              },
              {
                text: '写大作业时遇到了问题',
                link: 'https://pku-software.github.io/project-doc/preface/facing-problem.html'
              }
            ]
          },
          { text: '环境配置', link: '/24spring/env_setup' },
          { text: 'FAQ', link: '/24spring/faq' }
        ]
      },
      {
        text: '大作业文档',
        // link: 'https://pku-software.github.io/project-doc/'
        link: ''
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pku-software/pku-software.github.io' }
    ]
  }
})
