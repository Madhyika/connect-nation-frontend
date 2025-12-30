<script setup lang="ts">
import AchievementsSection from "./sections/AchievementsSection.vue";
import BannerSection from "../../components/PagesBanner.vue";
import HowWeWorkSection from "./sections/HowWeWorkSection.vue";
import ServicesSection from "./sections/ServicesSection.vue";
import BusinessSection from "./../Home/sections/BusinessSection.vue";
import ClientStoriesSection from "./../Home/sections/ClientsStoriesSection.vue";
import FAQSection from "../Home/sections/FAQSection.vue";
import GetInTouchSection from "../Home/sections/GetInTouchSection.vue";
import PagesBanner from "../../components/PagesBanner.vue";
</script>

<template>
  <PagesBanner title="Our Services" />
  <AchievementsSection />
  <ServicesSection />
  <HowWeWorkSection />
  <BusinessSection />
  <ClientStoriesSection />
  <FAQSection />
  <GetInTouchSection />
</template>
