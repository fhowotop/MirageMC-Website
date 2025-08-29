import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MirageMC",
  description: "Website And Docs",
  themeConfig: {
    logo: '/icon.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fhowotop/MirageMC-Website' }
    ],
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2025 MirageMC All Rights Reserved'
}
  }
})
