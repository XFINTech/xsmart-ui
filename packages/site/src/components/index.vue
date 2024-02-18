<script setup>
import Header from './Header.vue';
import Menu from './Menu.vue';
</script>

<template>
  <div class="xsmart-doc">
    <Header />
    <div class="xsmart-doc-container">
      <Menu />
      <div class="xsmart-doc-content">
        <slot />
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
</style>
