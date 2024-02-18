<script setup>
import Header from './Header.vue';
import Menu from './Menu.vue';
defineProps({
  darkModeClass: String,
});
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
}
</style>
