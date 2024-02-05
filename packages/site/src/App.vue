<script setup>
import XSmartDoc from './components/index.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const lang = computed(() => {
  return route.meta.lang || 'en';
});
</script>

<template>
  <XSmartDoc :lang="lang">
    <router-view />
  </XSmartDoc>
</template>

<style scoped></style>
