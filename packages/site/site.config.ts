export default {
  title: 'XSmart UI',
  description: 'A Vue.js 3.0 UI Toolkit for Web',
  locales: [
    ['en-US', '🇺🇸 English'],
    ['zh-CN', '🇨🇳 简体中文'],
  ],
  nav: [
    { text: 'Guide', link: '/guide/' },
    { text: 'Components', link: '/components/' },
    { text: 'GitHub', link: 'http' },
  ],
  menus: {
    '/guide/': [
      {
        title: 'Guide',
        children: [
          '/guide/',
          '/guide/getting-started',
          '/guide/installation',
          '/guide/usage',
        ],
      },
    ],
    '/components/': [
      {
        title: 'Components',
        children: [
          '/components/',
          '/components/button',
          '/components/input',
          '/components/layout',
        ],
      },
    ],
  },
};
