<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import FeaturedBlogCard from "./FeaturedBlogCard.vue";
import SmallBlogCard from "./SmallBlogCard.vue";
import blogs from "../data/index.json";
import categories from "../data/category.json";

const router = useRouter();

/* Active category */
const activeCategory = ref("All");

/* Category container ref */
const scrollContainer = ref(null);

/* Scroll amount per click */
const scrollAmount = 150; // adjust as needed

/* Filtered blogs */
const filteredBlogs = computed(() => {
  if (activeCategory.value === "All") return blogs;
  return blogs.filter((blog) => blog.category === activeCategory.value);
});

/* Featured blog */
const featuredBlog = computed(() => filteredBlogs.value[0]);

/* Side blogs */
const sideBlogs = computed(() => filteredBlogs.value.slice(1, 4));

/* Navigate */
function goToBlog(slug) {
  router.push(`/blog-insights/${slug}`);
}

/* Scroll functions */
function scrollLeft() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  }
}

function scrollRight() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
}
</script>

<style>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>

<template>
  <section class="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-0">
    <!-- Category Pills -->
    <div class="flex gap-4 justify-between items-center">
      <!-- Scrollable Categories -->
      <div
        ref="scrollContainer"
        class="flex items-center py-3 gap-3 overflow-x-auto scrollbar-hide"
      >
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          class="px-4 cursor-pointer py-2 rounded-full border text-xs sm:text-sm whitespace-nowrap transition"
          :class="
            activeCategory === cat
              ? 'bg-[#56BEB7] text-white border-[#56BEB7]'
              : 'border-gray-200 hover:bg-gray-100'
          "
        >
          {{ cat }}
        </button>
      </div>

      <!-- Arrow & Search Buttons -->
      <div class="flex gap-2 items-center justify-center lg:d-none">
        <button
          @click="scrollLeft"
          class="p-2 border rounded-full shrink-0 transition-colors duration-300 hover:bg-gray-100 hover:border-gray-300"
        >
          ‹
        </button>
        <button
          @click="scrollRight"
          class="p-2 border rounded-full shrink-0 transition-colors duration-300 hover:bg-gray-100 hover:border-gray-300"
        >
          ›
        </button>
        <!-- <button
          class="p-2 border rounded-full shrink-0 transition-colors duration-300 hover:bg-gray-100 hover:border-gray-300"
        >
          🔍
        </button> -->
      </div>
    </div>

    <h2 class="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
      Trending Blogs
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      <!-- Left: Featured -->
      <div v-if="featuredBlog">
        <FeaturedBlogCard
          :blog="featuredBlog"
          @click="goToBlog(featuredBlog.slug)"
        />
      </div>
      <p v-else class="col-span-full text-center text-gray-500 text-lg py-4">
        No blogs in this category.
      </p>

      <!-- Right: Side blogs -->
      <div class="space-y-4 sm:space-y-6">
        <SmallBlogCard
          v-for="blog in sideBlogs"
          :key="blog.id"
          :blog="blog"
          @click="goToBlog(blog.slug)"
        />
      </div>
    </div>
  </section>
</template>
