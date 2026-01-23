<template>
  <div
    v-if="title"
    class="flex items-center gap-2 text-[#344054] text-[16px] leading-[100%] tracking-[0.02em] font-inter pt-26 md:pt-16"
  >
    <p
      @click="goToBlog"
      class="cursor-pointer relative inline-block text-[#344054] font-inter text-[16px] leading-[100%] tracking-[0.02em] transition-colors duration-300 hover:text-[#41468C] group"
    >
      Blogs
      <span
        class="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#41468C] transition-all duration-300 group-hover:w-full"
      ></span>
    </p>
    <img class="w-4 h-4 filter invert" :src="RightArrow" alt="Arrow" />
    <p>{{ title }}</p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  title: String,
});
const router = useRouter();

function goToBlog() {
  router.push(`/blogs-insights`);
}
import RightArrow from "../../../assets/img/icons/chevron-right.svg";
</script>
