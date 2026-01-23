<script setup>
import { useRoute } from "vue-router";
import blogs from "./data/index.json";
import BlogCard from "./sections/BlogCard.vue";
import SlugUrl from "./slugSection/SlugUrl.vue";
import SlugBanner from "./slugSection/SlugBanner.vue";
import SlugDetails from "./slugSection/SlugDetails.vue";
import SlugAuthor from "./slugSection/SlugAuthor.vue";
import { findBySlug } from "../../utils/findBySlug";
import { ref, onMounted } from "vue";
const route = useRoute();
const slug = route.params.slug;
const blog = findBySlug(blogs, slug);

const details = ref(null);

onMounted(async () => {
  try {
    const module = await import(`./data/details/${slug}.json`);
    details.value = module.default;
  } catch (err) {
    console.error("Blog details not found for slug:", slug);
    details.value = null;
  }
});
</script>

<template>
  <section class="container mx-auto flex flex-col gap-14 px-6">
    <SlugUrl :title="blog.title" />
    <SlugBanner :blog="blog" />
    <div v-if="details">
      <SlugDetails :details="details" :blog="blog" />
    </div>
    <p v-else class="text-center text-red-500 text-lg mt-8">
      No blog details found for this blog.
    </p>
    <SlugAuthor />
  </section>
  <section class="container mx-auto px-4">
    <div>
      <h2 ref="sectionRef" class="mb-8 text-3xl font-medium text-[#0C111D]">
        Related Articles
      </h2>
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
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
