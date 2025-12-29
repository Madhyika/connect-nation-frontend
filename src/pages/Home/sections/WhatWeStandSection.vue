<template>
  <section>
    <div class="grid grid-cols-2 container mx-auto">
      <div>
        <div class="flex flex-col gap-8.5">
          <SectionHeading span1="What We" span2="Stand" />
          <p class="paragraph-20 paragraph-dark">
            We bring ideas to life through video, design, websites, and
            marketing campaigns and also the projects we've crafted to help
            businesses grow through creative content and smart strategy.
          </p>
        </div>

        <div class="relative overflow-hidden scale-120">
          <img
            class="w-133 filter grayscale opacity-70"
            src="../../../assets/img/decor/GlobeHands.png"
            alt=""
          />
          <img
            class="opacity-30 absolute left-0 bottom-0 translate-y-[42%] xl:-translate-x-[9%]"
            src="../../../assets/img/logo/logo.png"
            alt=""
          />
        </div>
      </div>

      <div class="flex flex-col">
        <div
          class="flex flex-col gap-4 border-[0.7px] border-black border-l-2 border-l-[#56BEB7]"
        >
          <p
            class="flex pl-8 pt-8 gap-2.5 justify-start items-center font-inter font-medium text-[15px] leading-[100%] tracking-[0.03em] text-[#56BEB7]"
          >
            <span class="block w-2 h-2 bg-[#56BEB7]"></span> V-01
          </p>

          <div class="flex w-full justify-center items-center">
            <img
              class="w-53 h-30"
              src="../../../assets/img/home/whatwedone.jpg"
              alt=""
            />
          </div>

          <div
            class="grid grid-cols-2 jutify-between item-center bg-[#F2F4F7] py-4 px-8"
          >
            <p
              class="font-outfit font-medium text-[24px] leading-[100%] tracking-[-0.01em] uppercase text-[#56BEB7]"
            >
              Excellence
            </p>
            <p class="paragraph-16 paragraph-dark">
              We deliver nothing but the highest quality work that exceeds
              expectations.
            </p>
          </div>
        </div>

        <div
          v-for="(item, index) in repeatedCards"
          :key="index"
          class="flex flex-col py-7.5 px-8 gap-12 border-[0.7px] border-black"
        >
          <p
            class="flex gap-2.5 justify-start items-center font-inter font-medium text-[15px] leading-[100%] tracking-[0.03em] text-black"
          >
            <span class="block w-2 h-2 bg-black"></span> V-0{{ index + 2 }}
          </p>

          <p
            class="font-outfit font-semibold text-[24px] leading-[100%] tracking-[-0.01em] uppercase text-black"
          >
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import SectionHeading from "../../../components/SectionHeading.vue";

const repeatedCards = [
  { title: "Results-Driven" },
  { title: "Client-Focused" },
  { title: "Local Expertise" },
];
</script>
