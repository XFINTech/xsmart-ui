<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  item: Object,
  base: String,
});

const route = useRoute();
const itemName = computed(() => {
  return props.item.title;
});

const joinPaths = (base, path) => {
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
  return normalizedBase + normalizedPath;
};

const path = computed(() => {
  return props.base ? joinPaths(props.base, props.item.path) : props.item.path;
});

const active = computed(() => {
  console.log('route.path', route.path);
  return route.path === path.value;
});
</script>

<template>
  <router-link
    v-if="item.path"
    class="xsmart-doc__link"
    :class="{ active }"
    :to="path"
    v-html="itemName"
  />
</template>

<style scoped lang="less"></style>
