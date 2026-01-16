<script setup>
import MemberImage from "/src/assets/img/teamMembers/member1.png";
import VideoImage from "/src/assets/img/aboutUs/video.png";
</script>

<template>
  <section class="bg-[#EEF7FC] py-20">
    <div
      class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
    >
      <!-- LEFT : CEO IMAGE + QUOTE -->
      <div
        class="flex flex-col items-start gap-6 md:gap-[24px] w-full md:w-[338px] opacity-100"
      >
        <!-- Image -->
        <div
          class="relative w-full max-w-[260px] md:max-w-[260px] h-[280px] md:h-[340px] overflow-hidden rounded-md mx-auto md:mx-0"
        >
          <img
            :src="MemberImage"
            alt="Team Member"
            class="absolute left-1/2 -translate-x-1/2 top-[20%] md:top-[15%] min-w-full object-cover"
          />
        </div>

        <!-- Text -->
        <p
          class="font-inter font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] tracking-[0.02em] text-[#475467] text-center md:text-left"
        >
          We believe in creating meaningful digital solutions for Adelaide and
          Australian businesses through innovation and excellence.
        </p>

        <!-- Name -->
        <p
          class="text-[13px] md:text-[14px] font-semibold text-[#0F172A] text-center md:text-left"
        >
          CEO, Sarin Tamang
        </p>
      </div>

      <!-- RIGHT : VIDEO + TEXT -->
      <div class="flex flex-col gap-8">
        <!-- Video Thumbnail -->
        <div class="relative overflow-hidden">
          <img
            :src="VideoImage"
            alt="Watch video"
            class="w-full h-auto object-cover"
          />
        </div>

        <!-- Description -->
        <p
          class="font-outfit font-medium text-[24px] leading-[34px] tracking-[0] text-[#334155] max-w-xl"
        >
          Our mission is to deliver thoughtful digital experiences that enable
          Adelaide businesses to stand out and succeed online.
        </p>

        <!-- Stats -->
        <div class="flex items-center gap-10 pt-4">
          <div>
            <h3 class="text-[28px] font-bold text-[#0F172A]">10+</h3>
            <p class="text-[12px] uppercase text-[#64748B]">Years Experience</p>
          </div>

          <div class="h-10 w-px bg-[#CBD5E1]" />

          <div>
            <h3 class="text-[28px] font-bold text-[#0F172A]">40+</h3>
            <p class="text-[12px] uppercase text-[#64748B]">Projects Realize</p>
          </div>

          <div class="h-10 w-px bg-[#CBD5E1]" />

          <div>
            <h3 class="text-[28px] font-bold text-[#0F172A]">24/7</h3>
            <p class="text-[12px] uppercase text-[#64748B]">Help Support</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
