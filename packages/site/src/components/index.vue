<script setup>
import Header from './Header.vue';
import Menu from './Menu.vue';

import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import siteConfig from '#/site.config';

const route = useRoute();
const currentMenu = ref([]);

const showMenu = ref(true);
// 监听路由变化，更新菜单数据
watch(
  () => route.path,
  (newPath) => {
    const basePath = newPath.split('/')[1];
    const key = `/${basePath}/`;
    currentMenu.value = siteConfig.menus[key] || [];
    showMenu.value = !['', 'index.html'].includes(basePath);
  },
  { immediate: true }
);
</script>

<template>
  <div class="xsmart-doc">
    <Header />
    <div class="xsmart-doc-container" :class="{ hasMenu: showMenu }">
      <Menu v-if="showMenu" />
      <div class="xsmart-doc-content">
        <div class="xsmart-doc-content__inner">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.xsmart-doc-container {
  position: relative;
  top: var(--xsmart-doc-header-height);
  max-width: var(--xsmart-doc-layout-max-width);
  width: 100%;
  margin: 0 auto;
}
.xsmart-doc-content {
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
}
.hasMenu .xsmart-doc-content {
  padding-left: calc(var(--xsmart-doc-menu-width) + 40px);
}
.xsmart-doc-content__inner {
  background-color: var(--xsmart-doc-white);
  padding: 20px 20px;
  border-radius: var(--xsmart-doc-radius);
}
</style>
