import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径
// https://vitepress.dev/reference/site-config
import mark from 'markdown-it-mark'

export default defineConfig({
 //   base:"/sakib/",
    markdown: {
        config: (md) => {
            md.use(mark)
        },
        math: true
    },
  title: "SaKib - 公考知识库",
  description: "【公考知识库】SaKib- 考点详细解析，内容通俗易懂，精准查缺补漏，网站‌持续更新，提供实用工具，告别碎片化学习。",
    head: [
        ['link', { rel: 'icon', href: '/favicon-32x32.png' }] // 如果是 .png 就写 '/favicon.png'
    ],
  themeConfig: {

    logo: '/favicon-32x32.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '📚行测', items: [
          { text: '📊 资料分析', link: '/资料分析/index.md' },
          { text: '📖 言语理解', link: '/言语理解/index.md' },
          { text: '📏 数量关系', link: '/数量关系/index.md' },
          { text: '🎨 判断推理', link: '/判断推理/index.md' },
          { text: '👑 政治理论', link: '/政治理论/index.mds' },
          { text: '🅰 公基常识', link: '/公基常识/index.md' }
        ] },
      { text: '📜申论', link: '/申论/01什么是申论.md' }
    ],
    sidebar: { "/资料分析": set_sidebar("/资料分析"), "/言语理解": set_sidebar("/言语理解"), "/数量关系": set_sidebar("/数量关系")
        , "/判断推理": set_sidebar("/判断推理"), "/政治理论": set_sidebar("/政治理论"), "/公基常识": set_sidebar("/公基常识"),
        "/申论": set_sidebar("/申论")},
      // 设置搜索框的样式
      search: {
          provider: "local",
          options: {
              translations: {
                  button: {
                      buttonText: "搜索文档",
                      buttonAriaLabel: "搜索文档",
                  },
                  modal: {
                      noResultsText: "无法找到相关结果",
                      resetButtonTitle: "清除查询条件",
                      footer: {
                          selectText: "选择",
                          navigateText: "切换",
                      },
                  },
              },
          },
      },
/*
    sidebar: [
      {
        text: '资料分析',
        items: [
          { text: '开篇', link: '/markdown-examples' },
          { text: '结构阅读法', link: '/api-examples' }
        ]
      }
    ],
*/

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vsakib/sakib' }
    ],
    footer:{
      copyright:"Copyright © 2024-2025 SaKib"
    }
  }
})
