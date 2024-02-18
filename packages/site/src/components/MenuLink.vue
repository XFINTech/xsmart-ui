<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  item: Object,
  base: String,
});

const route = useRoute();

const active = computed(() => {
  return route.path === props.item.path;
});

const itemName = computed(() => {
  return props.item.name;
});

const path = computed(() => {
  return `${props.base}${props.item.path}`;
});
</script>

<template>
  <router-link
    v-if="item.path"
    :class="{ active }"
    :to="path"
    v-html="itemName"
  />
  <a v-else-if="item.link" :href="item.link" v-html="itemName" />
  <a v-else v-html="itemName" />
</template>

<style scoped lang="less"></style>
