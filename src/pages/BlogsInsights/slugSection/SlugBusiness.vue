<template>
  <div
    class="relative w-full h-full rounded-[20px] shadow-[0_32px_64px_-12px_rgba(16,24,40,0.14)] overflow-hidden"
  >
    <!-- Background Image -->
    <img
      :src="Mash"
      alt="Mash Background"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- Overlay Content -->
    <div
      class="flex flex-col justify-center items-center gap-4 text-center px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-14 md:py-16 lg:py-20"
    >
      <h1
        class="font-outfit font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[38px] md:leading-[45px] lg:leading-[50px] tracking-[0%] uppercase text-[#0c111d] z-10"
      >
        {{ content.title }}
      </h1>
      <p
        class="font-inter font-normal text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] leading-[28px] sm:leading-[30px] md:leading-[33px] lg:leading-[36px] tracking-[0.03em] text-[#182230] z-10 max-w-3xl"
      >
        {{ content.sub_title }}
      </p>
      <a
        href="https://cal.com/sarin-tamang-o5zp1z/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonPrimaryLight
          :label="content.button_label"
      /></a>
    </div>
  </div>
</template>

<script setup>
import Mash from "../../../assets/img/blog/Mash.png";
import ButtonPrimaryLight from "../../../components/buttons/ButtonPrimaryLight.vue";

const props = defineProps({
  content: Object,
});
</script>
