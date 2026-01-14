<script setup>
import FeaturedBlogCard from "./FeaturedBlogCard.vue";
import SmallBlogCard from "./SmallBlogCard.vue";
import { blogs } from "../../../../stores/blog"; // import blog store
import { useRouter } from "vue-router";

const router = useRouter();

// Categories for filtering (optional)
const categories = [
  "All",
  "SEO",
  "Marketing",
  "Graphic Design",
  "Video Editing",
  "Development",
  "Advertisement",
];

// Pick the first blog as featured
const featuredBlog = blogs[0];

// The rest as side blogs
const sideBlogs = blogs.slice(1, 4);

// Navigate to blog detail page
function goToBlog(slug) {
  router.push(`/blog-insights/${slug}`);
}
</script>

<template>
  <section class="max-w-7xl mx-auto py-14">
    <!-- Category Pills -->
    <div class="flex items-center gap-3 mb-10 overflow-x-auto">
      <button
        v-for="cat in categories"
        :key="cat"
        class="px-4 py-2 rounded-full border border-gray-200 text-sm whitespace-nowrap hover:bg-gray-100"
      >
        {{ cat }}
      </button>

      <button class="ml-auto p-2 border rounded-full">›</button>
      <button class="p-2 border rounded-full">🔍</button>
    </div>

    <h2 class="text-2xl font-semibold mb-8">Trending Blogs</h2>

    <div class="grid grid-cols-2 gap-8">
      <!-- Left: Featured -->
      <div>
        <FeaturedBlogCard
          :blog="featuredBlog"
          @click="goToBlog(featuredBlog.slug)"
        />
      </div>

      <!-- Right: Side blogs -->
      <div class="space-y-6">
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
