<template>
  <div class="relative min-h-screen w-full">
    <!-- Desktop Banner -->
    <img
      v-if="!isMobile"
      :src="`/banner/${props.imageSrc || 'Banner2.webp'}`"
      :alt="`${title} Banner`"
      class="absolute inset-0 h-full w-full object-cover"
    />

    <!-- Mobile Banner -->
    <img
      v-else
      :src="`/banner/${props.mobileImageSrc || 'BannerM2.webp'}`"
      :alt="altText"
      class="absolute inset-0 h-full w-full object-cover"
    />

    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content -->
    <div
      class="container relative mx-auto flex min-h-screen flex-wrap content-end"
    >
      <h1
        class="font-outfit font-semibold text-white uppercase text-[36px] leading-[100%] tracking-[-0.02em] sm:text-[96px] sm:leading-[100%] sm:tracking-[-0.02em] absolute bottom-6 left-4 sm:static sm:pb-32"
      >
        {{ title }}
      </h1>

      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  imageSrc: { type: String },
  mobileImageSrc: { type: String },
  title: { type: String, required: true },
  altText: { type: String, default: "Banner Image" },
});

const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 640;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>
