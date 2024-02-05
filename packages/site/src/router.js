import { createRouter, createWebHashHistory } from 'vue-router';

// 目前先写死，后续可以通过自动扫描的方式获取
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
