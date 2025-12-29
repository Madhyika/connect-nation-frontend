<template>
  <div class="relative min-h-screen w-full">
    <!-- hero banner image -->
    <img
      class="absolute inset-0 w-full h-full object-cover"
      src="../../../assets/img/home/banner.png"
      alt=""
    />

    <!-- blur overlay -->
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <!-- main ontent -->
    <div
      class="relative container min-h-screen mx-auto flex flex-wrap content-end"
    >
      <div class="flex gap-32 py-32 w-full">
        <!-- left content -->
        <div class="flex flex-col justify-end text-white gap-5">
          <span
            class="font-medium text-[54px] leading-[60px] tracking-[-0.02em] font-outfit"
          >
            Adelaide’s Trusted Web & SEO Services for Business Growth
          </span>

          <span
            class="font-light text-[18px] leading-[28px] tracking-[0.02em] font-inter"
          >
            Connect Nation powers Adelaide business growth expert ads, videos,
            photography, web design, site management, SEO, and full-funnel
            marketing
          </span>

          <div class="flex gap-12 items-center">
            <ButtonPrimaryDark label="Get Started" to="/" />
            <ButtonSecondaryLight label="Learn More About Company" to="/" />
          </div>
        </div>

        <!-- right content -->
        <div class="p-12">
          <div
            class="flex flex-col gap-3 bg-white/25 backdrop-blur-[2px] p-6 rounded-lg"
          >
            <div class="flex justify-between items-center max-h-12">
              <img
                class="h-full w-12 scale-180"
                src="../../../assets/img/logo/logo.png"
                alt=""
              />
              <img
                class="w-6"
                src="../../../assets/img/icons/DotsHorizontal.svg"
                alt=""
              />
            </div>

            <img
              class="max-w-[292px] max-h-[165px]"
              src="../../../assets/img/home/HomeBannerWork.png"
              alt=""
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
