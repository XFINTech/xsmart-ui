export default {
  title: 'XSmart UI',
  description: 'UI Components for fintech based on Vue.js 3',
  locales: [
    ['en-US', '🇺🇸 English'],
    ['zh-CN', '🇨🇳 简体中文'],
    ['zh-HK', '🇭🇰 繁體中文'],
    ['ja-JP', '🇯🇵 日本語'],
    ['ms-MY', '🇲🇾 Bahasa Malaysia'],
    ['th-TH', '🇹🇭 ภาษาไทย'],
  ],
  nav: [
    { text: '首页', link: '/' },
    { text: '文档', link: '/guide/home/' },
    { text: '组件', link: '/components/button/' },
  ],
  menus: {
    '/guide/': [
      {
        title: '开发指南',
        base: '/guide/',
        children: [
          {
            path: '/home/',
            title: '介绍',
          },
          {
            path: '/quickstart/',
            title: '快速上手',
          },
        ],
      },
    ],
    '/components/': [
      {
        title: '基础组件',
        children: [
          {
            path: '/components/button/',
            title: 'Button 按钮',
          },
        ],
      },
    ],
  },
  site: {
    defaultLocale: 'en-US',
    darkModeClass: 'xsmart-doc-theme-dark',
    lightModeClass: 'xsmart-doc-theme-light',
  },
};
