<template>
  <div class="relative min-h-screen w-full">
    <img
      :src="computedImageSrc"
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
import { ref, watchEffect } from "vue";
import BannerImage from "../assets/img/other/Banner2.png";

const props = defineProps({
  imageSrc: {
    type: String,
    default: "",
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
const computedImageSrc = ref(BannerImage);

watchEffect(async () => {
  if (props.imageSrc) {
    try {
      const image = await import(`../assets/img/other/${props.imageSrc}`);
      computedImageSrc.value = image.default;
    } catch (e) {
      computedImageSrc.value = props.imageSrc.startsWith("http")
        ? props.imageSrc
        : DefaultBanner;
    }
  } else {
    computedImageSrc.value = DefaultBanner;
  }
});
</script>

<style scoped></style>
