<script setup>
import MemberImage from "/src/assets/img/teamMembers/Sarin.png";
import VideoImage from "/src/assets/img/aboutUs/video.png";

const stats = [
  {
    value: "10+",
    label: "YEARS EXPERIENCE",
  },
  {
    value: "40+",
    label: "PROJECTS REALIZE",
  },
  {
    value: "24/7",
    label: "HELP SUPPORT",
  },
];
</script>

<template>
  <section class="bg-[#EEF7FC] py-20">
    <div
      class="container mx-auto grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-10 items-center"
    >
      <!-- LEFT : CEO IMAGE + QUOTE -->
      <div
        class="flex flex-col items-center lg:items-start gap-[10px] md:gap-[24px] w-full lg:w-[338px] opacity-100 order-4 lg:order-1"
      >
        <!-- Image -->
        <div
          class="relative w-full md:max-w-[260px] h-[475px] overflow-hidden rounded-md mx-auto md:mx-0"
        >
          <img
            :src="MemberImage"
            alt="CEO, Sarin Tamang"
            class="absolute w-auto min-w-full min-h-full translate-x-[-5%] sm:translate-x-[12%] lg:translate-x-1 translate-y-[-10%] sm:translate-y-[-10%] lg:translate-y-[15%] object-cover transform scale-100"
          />
          <!-- Bottom gradient overlay -->
          <div
            class="absolute bottom-0 left-0 w-full h-24 md:h-20 bg-gradient-to-t from-[white] to-transparent pointer-events-none"
          ></div>
        </div>

        <!-- Text -->
        <p
          class="font-inter font-normal text-[18px] leading-[28px] tracking-[0.02em] text-[#475467] text-center lg:text-left"
        >
          We believe in creating meaningful digital solutions for Adelaide and
          Australian businesses through innovation and excellence.
        </p>
        <!-- Name -->
        <p
          class="font-outfit font-semibold text-[22px] leading-[1] tracking-[0] text-[#0C111D] text-center md:text-left"
        >
          CEO, Sarin Tamang
        </p>
      </div>

      <!-- RIGHT : VIDEO + TEXT -->
      <div class="flex flex-col md:gap-8 gap-5 order-1 lg:order-2">
        <!-- Mission Text -->
        <p
          class="font-outfit font-medium text-[16px] leading-[24px] tracking-[0] text-[#334155] max-w-full sm:max-w-xl order-1 lg:text-[24px] lg:leading-[34px]"
        >
          Our mission is to deliver thoughtful digital experiences that enable
          Adelaide businesses to stand out and succeed online.
        </p>

        <!-- Video Thumbnail -->
        <div class="relative overflow-hidden order-2">
          <img
            :src="VideoImage"
            alt="Watch video"
            class="w-full h-auto object-cover"
          />
        </div>

        <!-- Stats -->
        <div
          class="flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-10 order-3 relative"
        >
          <template v-for="(stat, index) in stats" :key="index">
            <div class="flex flex-col items-center gap-2">
              <h3
                class="font-outfit font-semibold text-[40px] leading-[1] tracking-[-0.02em] text-[#0F172A]"
              >
                {{ stat.value }}
              </h3>
              <p
                class="font-inter font-semibold text-[16px] leading-[1] tracking-[0.02em] text-[#9AA4B2]"
              >
                {{ stat.label }}
              </p>
            </div>

            <!-- Divider -->
            <div v-if="index !== stats.length - 1">
              <!-- Mobile: horizontal line -->
              <div class="md:hidden w-full h-[1px] bg-[#9AA4B2] my-4"></div>

              <!-- Desktop: vertical line -->
              <div
                class="hidden md:block w-[1px] h-[89px] bg-[#9AA4B2] mx-6 self-stretch"
              ></div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
