<script setup>
import { useRoute } from 'vue-router';
import MenuLink from './MenuLink.vue';
import { ref, watch } from 'vue';
import siteConfig from '#/site.config';

const route = useRoute();
const currentMenu = ref([]); // 使用ref创建一个响应式的引用

// 监听路由变化，更新菜单数据
watch(
  () => route.path,
  (newPath) => {
    const basePath = newPath.split('/')[1];
    const key = `/${basePath}/`;
    currentMenu.value = siteConfig.menus[key] || [];
    console.log('currentMenu', currentMenu.value);
  },
  { immediate: true }
);
</script>

<template>
  <div class="xsmart-doc-menu">
    <div
      class="xsmart-doc-menu-nav__group"
      v-for="(group, index) in currentMenu"
      :key="index"
    >
      <div class="xsmart-doc-menu-nav__title">{{ group.title }}</div>
      <div
        class="xsmart-doc-menu-nav__item"
        v-for="item in group.children"
        :key="item.path"
      >
        <MenuLink :item="item" :base="group.base" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.xsmart-doc-menu {
  position: fixed;
  top: calc(20px + var(--xsmart-doc-header-height));
  left: 20px;
  bottom: 20px;
  width: var(--xsmart-doc-menu-width);
  box-sizing: border-box;
  padding: 10px;
  border-radius: var(--xsmart-doc-radius);
  background-color: rgba(233, 233, 233, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgb(0 0 0 / 4%);
  z-index: var(--xsmart-doc-menu-zIndex);

  @media (min-width: 1360px) {
    left: 50%;
    margin-left: calc(-1 * var(--xsmart-doc-layout-max-width) / 2);
  }
}

.xsmart-doc-menu-nav__title {
  font-size: var(--xsmart-doc-fontsize-large);
  font-weight: bold;
  padding: 10px;
}

.xsmart-doc-menu-nav__item {
  padding: 5px 0px;
  & .xsmart-doc__link {
    display: block;
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background-color: var(--xsmart-doc-blue-1);
      color: var(--xsmart-doc-white);
    }
    &.active {
      background-color: var(--xsmart-doc-blue-1);
      color: var(--xsmart-doc-white);
    }
  }
}
</style>
