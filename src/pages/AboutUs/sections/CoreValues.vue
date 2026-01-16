<template>
  <section class="py-24 bg-[#FAFAFA]">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
      <!-- LEFT CONTENT -->
      <div class="flex flex-col gap-6 max-w-[488px]">
        <SectionHeading span1="Core Values That<br>" span2="Drive Our Work" />

        <p class="paragraph-20 paragraph-dark">
          Our core values keep us focused on quality, innovation, and measurable
          growth, guiding how we build solutions that truly make an impact.
        </p>
      </div>

      <!-- RIGHT GRID -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div
          v-for="(value, index) in values"
          :key="index"
          class="relative bg-[#EEF2F6] rounded-2xl p-8 min-h-[300px] overflow-hidden"
        >
          <!-- TEXT -->
          <div class="flex flex-col gap-3 max-w-[260px]">
            <h3
              class="font-outfit font-bold text-[22px] leading-[100%] tracking-normal uppercase text-gray-900"
            >
              {{ value.title }}
            </h3>

            <p
              class="font-inter font-medium text-[16px] leading-[24px] tracking-normal text-gray-500"
            >
              {{ value.description }}
            </p>
          </div>

          <!-- ICON (BOTTOM RIGHT) -->
          <img
            :src="value.icon"
            :alt="value.title"
            class="absolute bottom-6 right-6 w-[140px] h-[140px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "../../../components/headings/SectionHeading.vue";

import collaborateIcon from "/src/assets/img/aboutUs/collaborate.svg";
import authenticIcon from "/src/assets/img/aboutUs/authenticc.svg";
import passionateIcon from "/src/assets/img/aboutUs/star.svg";
import innovativeIcon from "/src/assets/img/aboutUs/innovative..svg";

const values = [
  {
    title: "Collaborate",
    description: "We work closely together to achieve the best results.",
    icon: collaborateIcon,
  },
  {
    title: "Authentic",
    description: "We stay honest, transparent, and true to our values.",
    icon: authenticIcon,
  },
  {
    title: "Passionate",
    description: "We care deeply about the work we create.",
    icon: passionateIcon,
  },
  {
    title: "Innovative",
    description: "We constantly explore new ideas and better solutions.",
    icon: innovativeIcon,
  },
];
</script>
