import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'unplugin-vue-markdown/vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '#': path.resolve(__dirname, './'),
    },
  },
});
