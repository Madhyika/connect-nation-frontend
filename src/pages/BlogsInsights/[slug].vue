<script setup>
import { useRoute } from "vue-router";
import { blogs } from "../../../stores/blog";
import BlogCard from "./sections/BlogCard.vue";
const route = useRoute();
const slug = route.params.slug;

// Find blog by slug
const blog = blogs.find((b) => b.slug === slug);
</script>

<template>
  <div class="pt-[68px]">
    <img src="/src/assets/img/blog/detail/blog1.svg" alt="Back" />
  </div>
  <section class="px-[112px]">
    <div class="flex flex-col md:flex-row mt-[30px] mb-[41px]">
      <div class="flex-1">
        <img src="/src/assets/img/blog/detail/blog2.svg" alt="Back" />
      </div>
      <div class="md:sticky md:top-30 self-start flex-shrink-0 w-[388px]">
        <img src="/src/assets/img/blog/detail/sticky.svg" alt="Back" />
      </div>
    </div>

    <div class="py-[60px]">
      <img src="/src/assets/img/blog/detail/blog3.svg" alt="Back" />
    </div>
    <div>
      <h2 ref="sectionRef" class="mb-8 text-3xl font-medium text-[#0C111D]">
        Related Articles
      </h2>
      <div class="grid grid-cols-3 gap-8">
        <BlogCard
          v-for="(blog, index) in blogs.slice(0, 3)"
          :key="index"
          :blog="blog"
        />
      </div>
    </div>
  </section>
  <!-- <section class="container mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-4">{{ blog?.title }}</h1>
    <p class="text-gray-500">{{ blog?.description }}</p>
    <img :src="blog?.image" alt="" class="mt-4 w-full h-auto object-cover" />
    <div class="mt-6 prose" v-html="blog?.content"></div>
  </section> -->
</template>
