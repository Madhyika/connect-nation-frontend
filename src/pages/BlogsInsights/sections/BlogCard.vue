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
        class="h-[260px] w-full object-cover transition-transform duration-300"
        :class="isHovered ? 'scale-105' : 'scale-100'"
      />
    </div>

    <!-- Content -->
    <div class="py-4 px-4 md:p-5 space-y-2">
      <div class="flex flex-col xl:flex-row items-left gap-2 mb-4 text-sm">
        <span class="font-semibold text-base text-[#56BEB7]">
          {{ blog.category }}
        </span>
        <div class="flex items-center gap-1 text-[#475467] text-sm w-full">
          <!-- Time -->
          <div class="flex items-center gap-1 whitespace-nowrap">
            <img
              src="/src/assets/img/icons/Time.svg"
              alt="time"
              class="w-4 h-4"
            />
            {{ blog.readTime }} Mins Read
          </div>

          <span>|</span>

          <!-- Date -->
          <div class="flex items-center gap-1 whitespace-nowrap">
            <img
              src="/src/assets/img/icons/Calender.svg"
              alt="calendar"
              class="w-4 h-4"
            />
            {{ blog.date }}
          </div>
        </div>
      </div>

      <ButtonBlog
        :label="blog.title"
        :to="`/blog-insights/${blog.slug}`"
        :active="isHovered"
      />

      <p class="text-base text-gray-500 leading-relaxed">
        {{ blog.description }}
      </p>
    </div>
  </article>
</template>
