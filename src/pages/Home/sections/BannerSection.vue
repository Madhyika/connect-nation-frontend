<template>
  <div class="relative min-h-screen w-full">
    <div class="absolute inset-0 overflow-hidden">
      <img
        src="../../../assets/img/home/banner.png"
        alt=""
        class="h-full w-full object-cover scale-150"
      />
    </div>

    <div
      class="absolute inset-0 bg-black/50 "
    ></div>

    <div
      class="container relative mx-auto flex min-h-screen flex-wrap content-end sm:py-12"
    >
      <div
        class="flex flex-col lg:flex-row w-full justify-end lg:justify-between items-center lg:pt-32 lg:pb-16 mt-[180px] lg:mt-0 md:mb-0 mb-10 gap-12 lg:gap-0"
      >
        <div class="flex flex-col gap-5 sm:gap-6 md:gap-7 lf:gap-8 text-white">
          <div
            class="flex flex-col gap-3 sm:gap-5 md:gap-8 md:max-w-[775px] mx-auto"
          >
            <!-- Heading container -->
            <span
              class="font-outfit font-medium tracking-[-0.02em] md:text-[28px] text-[24px] leading-[36px] sm:text-[32px] sm:leading-[40px] md:text-[40px] md:leading-[48px] lg:text-[54px] lg:leading-[60px] text-left sm:text-left"
            >
              Adelaide’s Trusted
              <span class="text-[#56BEB7]">Web Design & SEO</span>
              for Business Growth
            </span>

            <!-- Description container -->
            <span
              class="font-inter font-light tracking-[0.02em] text-[14px] leading-[22px] sm:text-[16px] sm:leading-[25px] lg:text-[18px] lg:leading-[28px] max-w-[554px] text-left sm:text-left"
            >
              Connect Nation delivers expert digital marketing in Adelaide, from
              web design and SEO to video production, photography, and targeted
              advertising. Everything your business needs to succeed online,
              under one roof.
            </span>
          </div>

          <div class="flex flex-col sm:flex-row items-left gap-6 sm:gap-12">
            <a
              href="https://cal.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonPrimaryDark label="Book a consultation" />
            </a>

            <ButtonSecondaryLight
              label="Learn More About Company"
              to="/about-us"
            />
          </div>
        </div>

        <div class="">
          <div
            class="flex flex-col gap-3 rounded-lg bg-white/25 p-5 backdrop-blur-sm"
          >
            <div class="flex max-h-12 items-center justify-between">
              <img
                src="../../../assets/img/logo/logo.png"
                alt=""
                class="h-full max-w-12 scale-150"
              />
              <img
                src="../../../assets/img/icons/DotsHorizontal.svg"
                alt=""
                class="w-6"
              />
            </div>
            <div class="relative h-[165px] w-[292px] overflow-hidden">
              <transition-group
                name="slide"
                tag="div"
                class="relative h-full w-full"
              >
                <img
                  v-for="(img, index) in [images[currentIndex]]"
                  :key="img"
                  :src="img"
                  class="absolute inset-0 h-full w-full object-cover"
                  alt=""
                />
              </transition-group>
            </div>

            <ButtonSecondaryDark label="SEE OUR WORK" to="/work" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import ButtonPrimaryDark from "../../../components/buttons/ButtonPrimaryDark.vue";
import ButtonSecondaryDark from "../../../components/buttons/ButtonSecondaryDark.vue";
import ButtonSecondaryLight from "../../../components/buttons/ButtonSecondaryLight.vue";

import carousel1 from "../../../assets/img/home/carousel/carousel1.png";
import carousel2 from "../../../assets/img/home/carousel/carousel2.png";
import carousel3 from "../../../assets/img/home/carousel/carousel3.png";
import carousel4 from "../../../assets/img/home/carousel/carousel4.png";
import carousel5 from "../../../assets/img/home/carousel/carousel5.png";
import carousel6 from "../../../assets/img/home/carousel/carousel6.png";

const images = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
];

const currentIndex = ref(0);
let interval;

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 2000); // change slide every 3s
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s ease-in-out;
  will-change: transform;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
