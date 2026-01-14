<script setup lang="ts">
import { blogs } from "../../../../stores/blog";
import BlogCard from "./BlogCard.vue";
import { ref, computed, nextTick } from "vue";

const blogsPerPage = 9;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(blogs.length / blogsPerPage));

const paginatedBlogs = computed<Blog[]>(() => {
  const start = (currentPage.value - 1) * blogsPerPage;
  return blogs.slice(start, start + blogsPerPage);
});

const visiblePages = computed(() => {
  const pages: (number | string)[] = [];
  if (totalPages.value <= 5) {
    for (let i = 1; i <= totalPages.value; i++) pages.push(i);
  } else {
    pages.push(1, 2);
    pages.push("...");
    pages.push(totalPages.value - 1, totalPages.value);
  }
  return pages;
});

const sectionRef = ref<HTMLElement | null>(null);

function scrollToSectionTop() {
  sectionRef.value?.scrollIntoView({ behavior: "smooth" });
}

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    nextTick(scrollToSectionTop);
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
    nextTick(scrollToSectionTop);
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    nextTick(scrollToSectionTop);
  }
}

function pageButtonClass(page: number) {
  return [
    "px-4 py-2 text-sm border-r last:border-r-0",
    currentPage.value === page
      ? "text-gray-900 font-medium bg-gray-100"
      : "text-gray-600 hover:bg-gray-50",
  ];
}
</script>

<template>
  <section class="container mx-auto py-12">
    <h2 ref="sectionRef" class="mb-8 text-3xl font-medium text-[#0C111D]">
      Latest Blogs
    </h2>
    <transition-group
      name="fade-slide"
      tag="div"
      class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      <BlogCard v-for="blog in paginatedBlogs" :key="blog.id" :blog="blog" />
    </transition-group>
    <div ref="paginationRef" class="mt-10 flex justify-center">
      <div
        class="flex items-center rounded-lg border border-gray-300 overflow-hidden bg-white"
      >
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="flex items-center gap-2 px-4 py-2 text-sm border-r text-[#344054] disabled:text-[#344054] disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <img
            src="/src/assets/img/icons/page-arrow.svg"
            alt="Previous"
            class="w-4 h-4 rotate-180"
          />
          <span>Previous</span>
        </button>
        <template v-for="(page, index) in visiblePages" :key="index">
          <span v-if="page === '...'" class="px-4 py-2 text-gray-500 border-r">
            ...
          </span>
          <button v-else @click="goToPage(page)" :class="pageButtonClass(page)">
            {{ page }}
          </button>
        </template>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="flex items-center gap-2 px-4 py-2 text-sm border-l text-[#344054] disabled:text-[#344054] disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <span>Next</span>
          <img
            src="/src/assets/img/icons/page-arrow.svg"
            alt="Next"
            class="w-4 h-4"
          />
        </button>
      </div>
    </div>
  </section>
</template>
<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
