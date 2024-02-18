<script setup>
// import MenuLink from './MenuLink.vue';
// import siteConfig from '#/site.config';
defineProps({
  lang: String,
});
</script>

<template>
  <div class="xsmart-doc-menu">
    <div class="xsmart-doc-menu-nav__group">
      <div class="xsmart-doc-menu-nav__title"></div>
      <div class="xsmart-doc-menu-nav__item"></div>
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
  padding: 20px;
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
</style>
