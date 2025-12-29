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
      <div class="flex w-full gap-32 py-32">
        <div class="flex flex-col justify-end gap-5 text-white">
          <span
            class="font-outfit text-[54px] font-medium leading-[60px] tracking-[-0.02em]"
          >
            Adelaide’s Trusted Web & SEO Services for Business Growth
          </span>

          <span
            class="font-inter text-[18px] font-light leading-[28px] tracking-[0.02em]"
          >
            Connect Nation powers Adelaide business growth expert ads, videos,
            photography, web design, site management, SEO, and full-funnel
            marketing
          </span>

          <div class="flex items-center gap-12">
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
                class="h-full w-12 scale-150"
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
import ButtonPrimaryDark from "../../../components/ButtonPrimaryDark.vue";
import ButtonSecondaryDark from "../../../components/ButtonSecondaryDark.vue";
import ButtonSecondaryLight from "../../../components/ButtonSecondaryLight.vue";
</script>
