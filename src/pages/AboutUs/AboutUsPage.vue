<script setup lang="ts">
import PagesBanner from "../../components/PagesBanner.vue";
import BusinessSection from "../Home/sections/BusinessSection.vue";
import ClientsSection from "../Home/sections/ClientsSection.vue";
import OurTeamSection from "../Home/sections/OurTeamSection.vue";
import ClientGrid from "./sections/ClientGrid.vue";
import CoreValues from "./sections/CoreValues.vue";
import OurCreative from "./sections/OurCreative.vue";
import OurMission from "./sections/OurMission.vue";
</script>

<template>
  <PagesBanner
    title="About Us"
    imageSrc="AboutUsBanner.png"
    mobileImageSrc="AboutUsBannerM.png"
  />
  <OurMission />
  <ClientsSection />
  <!-- <ClientGrid /> -->
  <CoreValues />
  <OurTeamSection />
  <!-- <OurCreative /> -->
  <BusinessSection />
</template>
