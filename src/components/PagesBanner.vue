<template>
  <div class="relative min-h-screen w-full">
    <img
      :src="imageSrc"
      :alt="altText"
      class="absolute inset-0 h-full w-full object-cover"
    />

    <div class="absolute inset-0 bg-black/50"></div>

    <div
      class="container relative mx-auto flex min-h-screen flex-wrap content-end"
    >
      <h1
        class="font-outfit font-semibold text-[96px] leading-[100%] tracking-[-0.02em] text-white uppercase pb-32"
      >
        {{ title }}
      </h1>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    default: BannerImage,
  },
  title: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: "Banner Image",
  },
});
import BannerImage from "../assets/img/other/Banner2.png";
</script>

<style scoped></style>
