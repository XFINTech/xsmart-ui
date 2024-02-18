<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <div class="xsmart-doc-menu">
    <div class="xsmart-doc-menu-container">
      <div class="xsmart-doc-menu-logo">
        <span>Logo</span>
      </div>
      <div class="xsmart-doc-menu-nav">
        <div class="xsmart-doc-menu-nav-item">
          <router-link
            to="/en"
            class="xsmart-doc__link"
            :class="{ active: $route.path === '/en' }"
            >Home</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.xsmart-doc-menu {
  position: fixed;
  top: var(--xsmart-doc-header-height);
  left: 0;
  bottom: 0;
  width: 200px;
  box-sizing: border-box;
  padding: 20px;
  background-color: var(--xsmart-doc-menu-bg-color);
  z-index: var(--xsmart-doc-menu-zIndex);
}
</style>
