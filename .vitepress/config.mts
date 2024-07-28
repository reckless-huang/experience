import { defineConfig } from 'vitepress'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Devops Experience",
  description: "Devops Experience",
  head: [['link', { rel: 'icon', href: '/k8s.png' }]],
  srcDir: './docs',
  themeConfig: {
    logo: '/k8s.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Kubernetes', link: '/kubernetes' },
      { text: 'Linux', link: '/linux' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/reckless-huang/experience/' }
    ]
  },
  vite: {
    plugins: [
        AutoSidebar({
          path: './docs/',
          ignoreList: ['public']
        })
    ]
  }
})
