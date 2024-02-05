export default {
  title: 'XSmart UI',
  description: 'UI Components for fintech based on Vue.js 3',
  locales: [
    ['en-US', '🇺🇸 English'],
    ['zh-CN', '🇨🇳 简体中文'],
  ],
  nav: [
    { text: 'Guide', link: '/guide/' },
    { text: 'Components', link: '/components/' },
    { text: 'GitHub', link: 'https://github.com/uSMARTFE/xsmart-ui' },
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
  site: {
    defaultLocale: 'en-US',
    darkModeClass: 'xsmart-doc-theme-dark',
    lightModeClass: 'xsmart-doc-theme-light',
  },
};
