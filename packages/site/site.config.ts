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
          {
            path: '/home/',
            title: 'Introduction',
          },
          {
            path: '/quickstart/',
            title: 'Quickstart',
          },
        ],
      },
    ],
    '/components/': [
      {
        title: 'Basic Components',
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
