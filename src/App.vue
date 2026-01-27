<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import TestLayout from "./layouts/TestLayout.vue";

const route = useRoute();

const layouts = {
  DefaultLayout,
  TestLayout,
};

const layout = computed(() => {
  return layouts[route.meta.layout] || DefaultLayout;
});

//meta handler
watch(
  () => route.meta,
  (meta) => {
    if (meta.title) document.title = meta.title;

    if (meta.description) {
      let desc = document.querySelector('meta[name="description"]');
      if (!desc) {
        desc = document.createElement("meta");
        desc.setAttribute("name", "description");
        document.head.appendChild(desc);
      }
      desc.setAttribute("content", meta.description);
    }

    if (meta.canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", meta.canonical);
    }
  },
  { immediate: true },
);
</script>
