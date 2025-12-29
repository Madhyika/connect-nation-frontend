<script setup lang="ts">
import SectionHeading from "../../../components/SectionHeading.vue";
import PhilosophyIcon from "../../../assets/img/icons/Philosophy.svg";
import IdeaBulbIcon from "../../../assets/img/icons/IdeaBulb.svg";

const stats = [
  {
    title: "100+",
    text: "Successful Projects",
  },
  {
    title: "20+",
    text: "Team Members",
  },
];

const infoCards = [
  {
    icon: PhilosophyIcon,
    title: "philosophy",
    text: "We believe in marketing that’s both beautiful and effective",
  },
  {
    icon: IdeaBulbIcon,
    title: "approach",
    text: "We partner closely with you to design, execute, and optimize",
  },
];
</script>

<template>
  <section class="relative overflow-hidden bg-[#FAFAFA]">
    <div class="container mx-auto">
      <div class="flex h-full w-1/2 flex-col items-start justify-start gap-26">
        <div class="flex w-full flex-col gap-5">
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
            v-for="item in stats"
            :key="item.title"
            class="z-10 flex h-[240px] min-w-[294px] items-end justify-start rounded-[8px] bg-white/60 opacity-100 shadow-[0_4px_6px_-2px_rgba(16,24,40,0.03),0_12px_16px_-4px_rgba(16,24,40,0.08)]"
          >
            <div class="flex flex-col gap-3 p-4">
              <h3
                class="font-outfit text-[40px] font-semibold leading-[100%] tracking-[-0.02em]"
              >
                {{ item.title }}
              </h3>
              <p class="paragraph-16 paragraph-dark">{{ item.text }}</p>
            </div>
          </div>

          <div
            v-for="card in infoCards"
            :key="card.title"
            class="z-10 flex h-[240px] min-w-[294px] items-end justify-start rounded-[8px] bg-white/60 opacity-100 shadow-[0_4px_6px_-2px_rgba(16,24,40,0.03),0_12px_16px_-4px_rgba(16,24,40,0.08)]"
          >
            <div class="flex flex-col gap-3 p-4">
              <img :src="card.icon" class="h-5 w-5" alt="" />
              <h3
                class="font-outfit text-[24px] font-semibold uppercase leading-[100%] tracking-[-0.02em]"
              >
                {{ card.title }}
              </h3>
              <p class="paragraph-dark text-[14px]">
                {{ card.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 h-[1284px] w-[744px]">
      <img
        src="../../../assets/img/decor/ellipse.svg"
        class="h-full w-full"
        alt=""
      />
    </div>

    <div
      class="absolute bottom-0 left-200 right-0 top-26 h-[932px] w-[997px] opacity-35"
    >
      <img
        src="../../../assets/img/decor/pyramid.png"
        class="h-full w-full scale-x-[-1]"
        alt=""
      />
    </div>
  </section>
</template>
