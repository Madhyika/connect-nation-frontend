<script setup lang="ts">
import BusinessSection from "../Home/sections/BusinessSection.vue";
import LatestBlogs from "./sections/LatestBlogs.vue";
import TrendingBlogs from "./sections/TrendingBlogs.vue";
</script>

<template>
  <img
    src="/src/assets/img/other/blogs-1.svg"
    alt="Clients Image"
    class="w-full h-auto mt-[96px]"
  />
  <TrendingBlogs />
  <LatestBlogs />
  <BusinessSection />
</template>
