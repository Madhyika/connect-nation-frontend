<template>
  <div class="relative min-h-screen w-full">
    <img
      src="../../../assets/img/home/banner.png"
      alt=""
      class="absolute inset-0 h-full w-full object-cover"
    />

    <div class="absolute inset-0 bg-black/50"></div>

    <div
      class="container relative mx-auto flex min-h-screen flex-wrap content-end"
    >
      <div
        class="flex flex-col lg:flex-row w-full justify-end lg:justify-between items-center lg:pt-32 lg:pb-16"
      >
        <div
          class="container mx-auto flex flex-col justify-center lg:justify-between gap-5 sm:gap-6 md:gap-7 lf:gap-8 text-white"
        >
          <div class="flex flex-col gap-5 md:gap-8 px-6 sm:px-0">
            <span
              class="font-outfit font-medium tracking-[-0.02em] text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] lg:text-[54px] lg:leading-[60px]"
            >
              Adelaide Web Design & SEO Agency for Growing Businesses
            </span>

            <span
              class="font-inter font-light tracking-[0.02em] text-[14px] leading-[22px] sm:text-[16px] sm:leading-[25px] lg:text-[18px] lg:leading-[28px]"
            >
              Connect Nation delivers expert digital marketing in Adelaide, from
              web design and SEO to video production, photography, and targeted
              advertising. Everything your business needs to succeed online,
              under one roof.
            </span>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
            <ButtonPrimaryDark label="Get Started" to="/" />
            <ButtonSecondaryLight label="Learn More About Company" to="/" />
          </div>
        </div>

        <div class="p-12">
          <div
            class="flex flex-col gap-3 rounded-lg bg-white/25 p-6 backdrop-blur-sm"
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

            <img
              src="../../../assets/img/home/HomeBannerWork.png"
              alt=""
              class="max-h-[165px] max-w-[292px]"
            />

            <ButtonSecondaryDark label="SEE OUR WORK" to="/" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonPrimaryDark from "../../../components/buttons/ButtonPrimaryDark.vue";
import ButtonSecondaryDark from "../../../components/buttons/ButtonSecondaryDark.vue";
import ButtonSecondaryLight from "../../../components/buttons/ButtonSecondaryLight.vue";
</script>
