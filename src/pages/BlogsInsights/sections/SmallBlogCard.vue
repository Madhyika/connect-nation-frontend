<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ButtonBlog from "../../../components/buttons/ButtonBlog.vue";
// import { blogs } from "../../../../stores/blog";

const props = defineProps({
  blog: Object,
});

const isHovered = ref(false);
const router = useRouter();

function goToBlog() {
  router.push(`/blog-insights/${props.blog.slug}`);
}
</script>

<template>
  <article
    class="flex flex-col sm:flex-row blog-card bg-white cursor-pointer transition-all duration-300"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @click="goToBlog"
  >
    <!-- Image -->
    <div
      class="overflow-hidden w-full sm:w-[170px] h-[200px] sm:h-auto flex-shrink-0"
    >
      <img
        :src="`/blogs/` + blog.image"
        alt=""
        class="w-full h-full object-cover transition-transform duration-300"
        :class="isHovered ? 'scale-105' : 'scale-100'"
      />
    </div>

    <!-- Content -->
    <div class="px-4 sm:px-5 py-4 flex flex-col justify-between">
      <div
        class="flex flex-col xl:flex-row items-start gap-2 sm:gap-4 mb-3 sm:mb-[18px] text-sm"
      >
        <!-- Category -->
        <span class="font-semibold text-sm sm:text-base text-[#56BEB7]">
          {{ blog.category }}
        </span>

        <!-- Meta -->
        <div
          class="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#475467]"
        >
          <!-- Time -->
          <div class="flex items-center gap-1">
            <img
              src="/src/assets/img/icons/Time.svg"
              alt="time"
              class="w-3.5 h-3.5 sm:w-4 sm:h-4"
            />
            {{ blog.readTime }} Mins Read
          </div>

          <span class="hidden sm:inline">|</span>

          <!-- Date -->
          <div class="flex items-center gap-1">
            <img
              src="/src/assets/img/icons/Calender.svg"
              alt="calendar"
              class="w-3.5 h-3.5 sm:w-4 sm:h-4"
            />
            {{ blog.date }}
          </div>
        </div>
      </div>

      <!-- Title -->
      <ButtonBlog
        :label="blog.title"
        :to="`/blog-insights/${blog.slug}`"
        :active="isHovered"
      />

      <!-- Description -->
      <div class="text-sm sm:text-base text-gray-500 leading-relaxed mt-1">
        {{ blog.description }}
      </div>
    </div>
  </article>
</template>
