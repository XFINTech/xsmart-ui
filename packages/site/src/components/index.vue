<script setup>
import Header from './Header.vue';
defineProps({
  darkModeClass: String,
});
</script>

<template>
  <div class="xsmart-doc">
    <Header msg="XSmart UI" />
    <div class="xsmart-doc-container">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
