<script setup lang="ts">
import SectionHeading from "../../../components/SectionHeading.vue";
</script>

<template>
  <section class="relative bg-[#FAFAFA] overflow-hidden">
    <div class="container mx-auto">
      <div class="flex flex-col w-1/2 h-full justify-start items-start gap-26">
        <div class="w-full flex flex-col gap-5">
          <SectionHeading
            span1="Driving Growth Through <br>"
            span2="Unified Marketing"
          />
          <p class="paragraph-20 paragraph-dark pr-6">
            At Connect Nation, we combine data-driven strategy with creative
            execution to launch brands and campaigns that make an impact.
          </p>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 gap-5">
          <div
            class="flex items-end justify-start min-w-[294px] h-[240px] rounded-[8px] bg-white/60 z-10 shadow-[0_4px_6px_-2px_rgba(16,24,40,0.03),0_12px_16px_-4px_rgba(16,24,40,0.08)] opacity-100"
          >
            <div class="p-4 flex flex-col gap-3">
              <h3
                class="font-outfit font-semibold text-[40px] leading-[100%] tracking-[-0.02em]"
              >
                100+
              </h3>
              <p class="paragraph-16 paragraph-dark">Successful Projects</p>
            </div>
          </div>

          <div
            class="flex items-end justify-start min-w-[294px] h-[240px] rounded-[8px] bg-white/60 z-10 shadow-[0_4px_6px_-2px_rgba(16,24,40,0.03),0_12px_16px_-4px_rgba(16,24,40,0.08)] opacity-100"
          >
            <div class="p-4 flex flex-col gap-3">
              <h3
                class="font-outfit font-semibold text-[40px] leading-[100%] tracking-[-0.02em]"
              >
                20+
              </h3>
              <p class="paragraph-16 paragraph-dark">Team Members</p>
            </div>
          </div>
          <div
            class="flex items-end justify-start min-w-[294px] h-[240px] rounded-[8px] bg-white/60 z-10 shadow-[0_4px_6px_-2px_rgba(16,24,40,0.03),0_12px_16px_-4px_rgba(16,24,40,0.08)] opacity-100"
          >
            <div class="p-4 flex flex-col gap-3">
              <img
                class="w-5 h-5"
                src="../../../assets/img/icons/Philosophy.svg"
                alt=""
              />
              <h3
                class="font-outfit uppercase font-semibold text-[24px] leading-[100%] tracking-[-0.02em]"
              >
                philosophy
              </h3>
              <p class="font-inter font-normal text-[14px] leading-23 paragraph-dark ">
                We believe in marketing that’s both beautiful and effective
              </p>
            </div>
          </div>
          <div
            class="flex items-end justify-start min-w-[294px] h-[240px] rounded-[8px] bg-white/60 z-10 shadow-[0_4px_6px_-2px_rgba(16,24,40,0.03),0_12px_16px_-4px_rgba(16,24,40,0.08)] opacity-100"
          >
            <div class="p-4 flex flex-col gap-3">
              <img
                class="w-5 h-5"
                src="../../../assets/img/icons/IdeaBulb.svg"
                alt=""
              />
              <h3
                class="font-outfit uppercase font-semibold text-[24px] leading-[100%] tracking-[-0.02em]"
              >
                approach
              </h3>
              <p class="text-[14px] paragraph-dark">
                We partner closely with you to design, execute, and optimize
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute w-[744px] h-[1284px] top-0 left-0 right-0 bottom-0">
      <img
        src="../../../assets/img/decor/ellipse.svg"
        class="w-full h-full"
        alt=""
      />
    </div>
    <div
      class="absolute w-[997px] h-[932px] right-0 left-200 top-26 bottom-0 opacity-35"
    >
      <img
        class="w-full h-full -z-10] scale-x-[-1]"
        src="../../../assets/img/decor/pyramid.png"
        alt=""
      />
    </div>

    <!-- <div class="absolute top-0 right-0 left-0 bottom-0">
      <img src="../../../assets/img/home/marketing.png" alt="" />
    </div> -->
  </section>
</template>
