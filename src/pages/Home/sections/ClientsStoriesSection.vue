<template>
  <section class="relative overflow-hidden py-24" :style="backgroundStyle">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 px-6">
      <!-- LEFT -->
      <SectionHeading
        span1="clients<br />"
        span2='<span style="color: #EAECF0;">Success Stories</span>'
      />

      <!-- RIGHT -->
      <div class="flex flex-col gap-10">
        <p
          class="font-inter text-[18px] leading-[30px] text-gray-600 max-w-[520px]"
        >
          Real feedback from Adelaide clients we've partnered with: honest
          results, genuine feedback, and lasting impact.
        </p>

        <!-- Testimonial Card -->
        <div class="flex flex-col gap-8 max-w-[560px]">
          <!-- Logo + Rating -->
          <div class="flex items-center justify-between">
            <img :src="active.logo" alt="Company logo" class="h-[28px]" />

            <div class="flex gap-1">
              <img
                v-for="n in active.rating"
                :key="n"
                src="/src/assets/img/icons/GoldStar.svg"
                class="w-[18px]"
              />
            </div>
          </div>

          <!-- Feedback -->
          <p
            class="font-inter italic font-medium text-[20px] leading-[34px] text-gray-900"
          >
            “{{ active.feedback }}”
          </p>

          <!-- Author -->
          <div class="flex flex-col gap-1">
            <p class="font-outfit font-medium text-[20px] text-gray-900">
              {{ active.name }}
            </p>
            <p class="font-inter text-[16px] text-gray-500">
              {{ active.position }}
            </p>
          </div>
        </div>

        <!-- Navigation -->
        <div class="flex gap-3 mt-6 justify-end">
          <button
            @click="prev"
            class="w-[40px] h-[40px] rounded-md border border-gray-200 bg-[#D0D5DD] flex items-center justify-center hover:bg-gray-100 transition"
          >
            ‹
          </button>

          <button
            @click="next"
            class="w-[40px] h-[40px] rounded-md bg-black text-white flex items-center justify-center hover:opacity-90 transition"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import bgImage from "../../../assets/img/other/client-success-bg.png";
import SectionHeading from "../../../components/headings/SectionHeading.vue";

import danpheLogo from "../../../assets/img/logo/clients/danphe.svg";
import mcquelLogo from "../../../assets/img/logo/clients/mcquel.svg";

const testimonials = [
  {
    logo: danpheLogo,
    rating: 5,
    feedback:
      "Great team, smooth process. Our patients love the new website. Worth every penny.",
    name: "Suseno Ekten",
    position: "Founder & Director",
  },
  {
    logo: mcquelLogo,
    rating: 5,
    feedback:
      "They nailed it. Our new website connects nurses with jobs perfectly. Highly recommend.",
    name: "Mitchell Matemayi",
    position: "Business Development Officer ",
  },
];

const index = ref(0);

const active = computed(() => testimonials[index.value]);

function next() {
  index.value = (index.value + 1) % testimonials.length;
}

function prev() {
  index.value = (index.value - 1 + testimonials.length) % testimonials.length;
}

const backgroundStyle = {
  background: `
    linear-gradient(
      45deg,
      rgba(57,160,255,0.06) 0%,
      rgba(143,255,133,0.06) 100%
    ),
    url(${bgImage})
  `,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left bottom",
};
</script>
