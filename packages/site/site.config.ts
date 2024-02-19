export default {
  title: 'XSmart UI',
  description: 'UI Components for fintech based on Vue.js 3',
  locales: [
    ['en-US', '🇺🇸 English'],
    ['zh-CN', '🇨🇳 简体中文'],
  ],
  nav: [
    { text: 'Guide', link: '/guide/home/' },
    { text: 'Components', link: '/components/button/' },
    { text: 'GitHub', link: 'https://github.com/uSMARTFE/xsmart-ui' },
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
            title: 'Button',
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
