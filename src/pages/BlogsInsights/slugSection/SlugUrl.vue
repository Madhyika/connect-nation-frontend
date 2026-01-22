<template>
  <div
    v-if="slug"
    class="flex items-center gap-2 text-[#344054] text-[16px] leading-[100%] tracking-[0.02em] font-inter pt-26 md:pt-16"
  >
    <p>Blogs</p>
    <img class="w-4 h-4 filter invert" :src="RightArrow" alt="Arrow" />
    <p>{{ slug }}</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
  slug: String,
});

// onMounted(() => {
//   console.log(props.slug);
// });
import RightArrow from "../../../assets/img/icons/chevron-right.svg";
</script>
