<script setup></script>

<template>
  <div class="xsmart-doc-header">
    <div class="xsmart-doc-header-container">
      <div class="xsmart-doc-header-flex">
        <div class="xsmart-doc-header-logo">
          <img src="/usmart.png" alt="XSmart UI" width="40" height="40" />
          <div class="xsmart-doc-header-title">XSmart UI</div>
        </div>
        <div class="xsmart-doc-header-nav">
          <router-link to="/" class="xsmart-doc__link">首页</router-link>
          <router-link to="/guide" class="xsmart-doc__link">文档</router-link>
          <router-link to="/components/button" class="xsmart-doc__link">
            组件
          </router-link>
        </div>
      </div>
      <div class="xsmart-doc-header-action">
        <div class="action-item doc-header-action__lang">
          <div class="doc-dropdown__item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              class="i18n-icon"
              data-v-764effdf=""
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
                class="css-c4d79v"
              ></path>
            </svg>
            <div class="doc-dropdown__content">
              <div class="doc-dropdown__content-body">
                <div class="sublink">🇨🇳 中文</div>
                <div class="sublink">🇺🇸 English</div>
              </div>
            </div>
          </div>
        </div>
        <div class="action-item action-item__link">
          <a href="https://github.com/uSMARTFE/xsmart-ui" target="_blank">
            <img src="/github.svg" alt="github" width="20" height="20" />
          </a>
        </div>
      </div>
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
  box-sizing: border-box;
  padding: 0 20px;
  backdrop-filter: blur(10px);
  background-color: rgba(233, 233, 233, 0.5);
  z-index: var(--xsmart-doc-header-zIndex);
}

.xsmart-doc-header-logo {
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}

.xsmart-doc-header-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
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

.xsmart-doc-header-action {
  display: flex;
  align-items: center;
  & .action-item {
    padding: 0 10px;
  }
  & .action-item__link {
    cursor: pointer;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}

.doc-header-action__lang {
  .doc-dropdown__content {
    opacity: 1;
    list-style: none;
    position: absolute;
    min-width: 150px;
    background: transparent;
    top: 100%;
    right: 0;
    border-radius: 10px;
    backdrop-filter: blur(20px);
    transform: translateY(0px);
    transition: all 0.3s;
    border: 1px solid rgb(0 0 0 / 4%);
  }
  .doc-dropdown__content-body {
    padding: 10px;
    & .sublink {
      margin-bottom: 2px;
      padding: 5px;
      cursor: pointer;
      border-radius: 5px;
      &:hover {
        background-color: var(--xsmart-doc-blue-1);
        color: var(--xsmart-doc-white);
      }
    }
  }
  .doc-dropdown__item {
    position: relative;
    transition: opacity 0.3s;
    &:hover .doc-dropdown__content {
      opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    }
    &:not(:hover) .doc-dropdown__content {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-10px);
      pointer-events: none;
    }
  }
  .i18n-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:hover {
      fill: var(--xsmart-doc-link-color);
    }
  }
  .sublink {
    cursor: pointer;
    padding: 5px 0;
    &:hover {
      color: var(--xsmart-doc-link-color);
    }
  }
}
</style>
