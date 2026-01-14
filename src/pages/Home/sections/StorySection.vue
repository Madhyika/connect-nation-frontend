<script setup lang="ts">
import SectionHeading from "../../../components/headings/SectionHeading.vue";
</script>

<template>
  <section class="container mx-auto flex flex-col gap-22">
    <div class="grid grid-cols-2 gap-32">
      <SectionHeading span1="The Story Behind<br>" span2="Connect Nation" />
      <p class="paragraph-20 paragraph-dark">
        Connect Nation began with one purpose: helping Adelaide and Australian
        businesses stand out in a fast-changing digital world through creative
        content and smart marketing solutions.
      </p>
    </div>

    <div class="grid grid-cols-2 gap-32 w-full h-full relative">
      <div class="relative w-full h-full flex items-center justify-end py-18">
        <div
          class="absolute z-30 top-[35%] left-0 bg-gradient-to-tr from-[#2B317F] to-[#56BEB7] h-[185px] rounded-[5px] flex flex-col items-start justify-center gap-3 p-8"
        >
          <img src="../../../assets/img/decor/histogram.svg" alt="" />
          <h1
            class="font-outfit font-semibold text-[32px] leading-[42px] tracking-[0.02em] text-white whitespace-nowrap"
          >
            Strategic growth
          </h1>
        </div>

        <div
          class="flex flex-col gap-6 z-20 top-0 left-0 bottom-0 right-0 w-[384px]"
        >
          <img
            class="rounded-[5px] w-[384px] h-[450px] object-cover"
            src="../../../assets/img/home/story1.png"
            alt=""
          />
          <p
            class="font-inter font-light text-[20px] leading-[30px] tracking-[0.02em] text-[#475467]"
          >
            Connect Nation grew from an Adelaide startup into a trusted digital
            partner for Australian brands.
          </p>
        </div>

        <div
          class="absolute z-10 top-0 left-[15%] w-[333px] h-[500px] p-[2px] bg-gradient-to-br from-[#56BEB7] to-[#2B317F]"
        >
          <div class="bg-white w-full h-full"></div>
        </div>
      </div>

      <div class="flex flex-col -translate-y-15 justify-center gap-4">
        <img
          class="w-18 scale-150"
          src="../../../assets/img/logo/logo.png"
          alt=""
        />
        <img
          class="w-[461px] h-[346px]"
          src="../../../assets/img/home/story2.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>
