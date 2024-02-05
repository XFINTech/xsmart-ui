import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('xsmart-ui/docs/guide/home.zh-CN.md'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
