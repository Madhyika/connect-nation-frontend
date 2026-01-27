<template>
  <PagesBanner
    title="Contact Us"
    imageSrc="Banner3.webp"
    mobileImageSrc="BannerM3.webp"
  />
  <GetInTouchSection />
  <MapSection />
  <ConnectSection />
  <BusinessSection />
</template>
<script setup>
import GetInTouchSection from "../Home/sections/GetInTouchSection.vue";
import BusinessSection from "../Home/sections/BusinessSection.vue";
import PagesBanner from "../../components/PagesBanner.vue";
import MapSection from "./sections/MapSection.vue";
import ConnectSection from "./sections/ConnectSection.vue";
</script>
