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
        link: 'https://pku-software.github.io/project-doc/'
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
              // {
              //   text: '写大作业时遇到了问题',
              //   link: 'https://pku-software.github.io/project-doc/preface/facing-problem.html'
              // }
            ]
          },
          { text: '环境配置', link: 'https://pku-software.github.io/CppEnvSetup/' },
          { text: '中作业', 
            items: [
              {
                text: '中作业文档',
                link: '/24spring/middle_homework/document'
              },
              {
                text: 'Web API 文档',
                link: '/24spring/middle_homework/api'
              },
              {
                text: 'Git 基础',
                link: '/24spring/middle_homework/git'
              }
            ]  
          },
          {
            text: "知识相关问题",
            items: [
              {
                text: '从 C 到 C++',
                link: '/24spring/knowledge_related/from_c_to_cpp'
              },
              // {
              //   text: '类与对象初步',
              //   link: '/24spring/knowledge_related/class_and_object_intro'
              // },
            ]
          },
          { text: 'FAQ', link: '/24spring/faq' }
        ]
      },
      {
        text: '上机作业参考答案',
        link: 'https://pku-software.github.io/homework-answer/'
      },
      {
        text: '大作业文档',
        link: 'https://pku-software.github.io/project-doc/'
      },
      {
        text: '谷雨同学的 C++ 教程',
        link: 'https://learn-cpp.guyutongxue.site/'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pku-software/pku-software.github.io' }
    ]
  }
})
