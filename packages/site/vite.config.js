import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'unplugin-vue-markdown/vite';
import hljs from 'highlight.js';
import path from 'path';

function markdownHighlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(str, { language: lang, ignoreIllegals: true })
        .value;
    } catch (__) {
      /* empty */
    }
  }

  return ''; // use external default escaping
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      markdownItOptions: {
        typographer: false,
        highlight: markdownHighlight,
      },
      wrapperClasses: 'xsmart-doc-markdown-body',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#': path.resolve(__dirname, './'),
    },
  },
});
