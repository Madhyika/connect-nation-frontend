<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed, markRaw } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import TestLayout from "./layouts/TestLayout.vue"; // Import all layouts here

const route = useRoute();

const layouts = {
  DefaultLayout,
  TestLayout,
};

const layout = computed(() => {
  return layouts[route.meta.layout] || DefaultLayout;
});
</script>
