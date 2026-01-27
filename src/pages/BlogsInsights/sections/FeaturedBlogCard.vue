<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ButtonBlog from "../../../components/buttons/ButtonBlog.vue";

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
    class="blog-card bg-white cursor-pointer transition-all duration-300"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @click="goToBlog"
  >
    <!-- Image -->
    <div class="overflow-hidden">
      <img
        :src="`/blogs/` + blog.image"
        :alt="`Blog image: ${blog.title}`"
        class="w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] object-cover transition-transform duration-300"
        :class="isHovered ? 'scale-105' : 'scale-100'"
      />
    </div>

    <!-- Content -->
    <div class="px-4 sm:px-5 py-5 sm:py-6 space-y-2">
      <div
        class="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4 text-sm"
      >
        <!-- Category -->
        <span class="font-semibold text-sm sm:text-base text-[#98A2B3]">
          {{ blog.category }}
        </span>

        <!-- Meta -->
        <span
          class="sm:ml-auto flex flex-wrap items-center gap-2 sm:gap-3 text-[#475467] text-xs sm:text-sm"
        >
          <!-- Time -->
          <span class="flex items-center gap-1">
            <img
              src="/src/assets/img/icons/Time.svg"
              alt="time"
              class="w-3.5 h-3.5 sm:w-4 sm:h-4"
            />
            {{ blog.readTime }} Mins Read
          </span>

          <span class="hidden sm:inline">|</span>

          <!-- Date -->
          <span class="flex items-center gap-1">
            <img
              src="/src/assets/img/icons/Calender.svg"
              alt="calendar"
              class="w-3.5 h-3.5 sm:w-4 sm:h-4"
            />
            {{ blog.date }}
          </span>
        </span>
      </div>

      <!-- Title Button -->
      <ButtonBlog
        :label="blog.title"
        :to="`/blogs/${blog.slug}`"
        :active="isHovered"
      />

      <!-- Description -->
      <p
        class="text-gray-500 text-sm sm:text-[17px] leading-[20px] sm:leading-[23px]"
      >
        {{ blog.description }}
      </p>
    </div>
  </article>
</template>
