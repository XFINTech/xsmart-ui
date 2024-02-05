import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/guide/',
    alias: '/',
    name: 'Home',
    component: () => import('xsmart-ui/docs/guide/quickstart.zh-CN.md'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
