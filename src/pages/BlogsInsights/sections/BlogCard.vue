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
        :src="blog.image"
        class="h-[260px] w-full object-cover transition-transform duration-300"
        :class="isHovered ? 'scale-105' : 'scale-100'"
      />
    </div>

    <!-- Content -->
    <div class="px-3 py-4 md:p-5 space-y-2">
      <div class="flex items-left gap-1 md:gap-4 mb-4 text-sm">
        <span class="font-semibold text-base text-[#56BEB7]">
          {{ blog.category }}
        </span>
        <span class="ml-auto flex items-center gap-1 text-[#475467] text-sm">
          <!-- Time -->
          <span class="flex items-center gap-1">
            <img
              src="/src/assets/img/icons/Time.svg"
              alt="time"
              class="w-4 h-4"
            />
            {{ blog.readTime }} Mins Read
          </span>

          <span>|</span>

          <!-- Date -->
          <span class="flex items-center gap-1">
            <img
              src="/src/assets/img/icons/Calender.svg"
              alt="calendar"
              class="w-4 h-4"
            />
            {{ blog.date }}
          </span>
        </span>
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
