<script setup></script>

<template>
  <div class="xsmart-doc-header">
    <div class="xsmart-doc-header-flex">
      <div class="xsmart-doc-header-logo">
        <img src="/usmart.jpeg" alt="XSmart UI" width="40" height="40" />
        <div class="xsmart-doc-header-title"></div>
      </div>
      <div class="xsmart-doc-header-nav">
        <router-link to="/" class="xsmart-doc__link">首页</router-link>
        <router-link to="/guide" class="xsmart-doc__link">文档</router-link>
        <router-link to="/components/button" class="xsmart-doc__link"
          >组件</router-link
        >
      </div>
    </div>
    <div class="xsmart-doc-header-action">
      <div class="action-item action-lang"></div>
      <div class="action-item action-dark"></div>
      <div class="action-item action-link"></div>
    </div>
  </div>
</template>

<style scoped lang="less">
.xsmart-doc-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
}
.xsmart-doc-header-flex {
  display: flex;
  align-items: center;
}

.xsmart-doc-header-nav {
  padding-left: 40px;
  display: flex;
  align-items: center;
  .xsmart-doc__link {
    color: var(--xsmart-doc-text-color);
    margin-right: 40px;
    font-weight: bold;
    &:hover {
      color: var(--xsmart-doc-link-color);
    }
    &:focus {
      color: var(--xsmart-doc-link-color);
    }
    &.active {
      color: var(--xsmart-doc-link-color);
    }
  }
}
</style>
