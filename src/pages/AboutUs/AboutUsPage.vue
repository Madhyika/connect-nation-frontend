<script setup lang="ts">
import PagesBanner from "../../components/PagesBanner.vue";
import BusinessSection from "../Home/sections/BusinessSection.vue";
import OurTeamSection from "../Home/sections/OurTeamSection.vue";
import ClientGrid from "./sections/ClientGrid.vue";
import OurCreative from "./sections/OurCreative.vue";
</script>

<template>
  <PagesBanner title="About Us" imageSrc="AboutUsBanner.png" />
  <img
    src="/src/assets/img/other/about-us-1.svg"
    alt="About Us Image"
    class="w-full h-auto"
  />
  <ClientGrid />
  <img
    src="/src/assets/img/other/about-us-4.svg"
    alt="About Us Image"
    class="w-full h-auto"
  />
  <OurTeamSection />
  <OurCreative />
  <img
    src="/src/assets/img/other/about-us-6.svg"
    alt="About Us Image"
    class="w-full h-auto"
  />
  <BusinessSection />
</template>
