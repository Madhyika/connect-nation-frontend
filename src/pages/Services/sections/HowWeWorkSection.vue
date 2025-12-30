<template>
  <section class="container mx-auto flex flex-col gap-24">
    <div class="grid grid-cols-2 items-start">
      <SectionHeading span1="How we" span2="work?" />
      <p class="paragraph-20 paragraph-dark">
        We deliver comprehensive digital solutions designed to drive business
        growth. We create impactful content and strategies that help brands
        stand out and succeed.
      </p>
    </div>
    <div class="w-full h-full">
      <img
        class="w-full h-full object-cover"
        src="../../../assets/img/other/gantt-chart.png"
        alt="Project Workflow Gantt Chart"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "../../../components/headings/SectionHeading.vue";
</script>
