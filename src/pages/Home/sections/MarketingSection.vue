<script setup lang="ts">
import SectionHeading from "../../../components/headings/SectionHeading.vue";
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
      <div
        class="flex h-full xl:w-1/2 flex-col items-center justify-center md:items-start md:justify-start md:gap-26 gap-10"
      >
        <div class="flex w-full flex-col gap-5">
          <SectionHeading
            span1="Driving Growth Through <br>"
            span2="Unified Digital Marketing"
          />
          <p class="paragraph-20 paragraph-dark pr-6">
            At Connect Nation, we combine data-driven strategy with creative
            execution to launch Adelaide brands and campaigns that make an
            impact.
          </p>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 z-20">
          <!-- Stats Cards -->
          <div
            v-for="(item, index) in stats"
            :key="item.title"
            class="flex h-auto md:min-h-[200px] h-[170px] items-end rounded-[8px] bg-white/80 p-5 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-white"
          >
            <div class="flex flex-col gap-3">
              <h3
                class="font-outfit text-[32px] md:text-[40px] font-semibold leading-[100%] tracking-[-0.02em]"
              >
                {{ item.title }}
              </h3>
              <p class="paragraph-16 paragraph-dark">{{ item.text }}</p>
            </div>
          </div>

          <!-- Info Cards -->
          <div
            v-for="card in infoCards"
            :key="card.title"
            class="flex h-auto min-h-[200px] items-end rounded-[8px] bg-white/80 p-5 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-white cursor-pointer"
          >
            <div class="flex flex-col gap-3">
              <img :src="card.icon" class="h-5 w-5" :alt="` ${card.title}`" />
              <h3
                class="font-outfit text-[20px] md:text-[24px] font-semibold uppercase tracking-[-0.02em]"
              >
                {{ card.title }}
              </h3>
              <p class="text-[14px] paragraph-dark">
                {{ card.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Decorations (hidden on mobile) -->
    <div
      class="absolute inset-0 md:h-[1284px] w-[744px] bottom-0 right-0 opacity-50 md:block hidden"
    >
      <img
        src="../../../assets/img/decor/ellipse.svg"
        class="h-full w-full"
        alt="ellipse"
      />
    </div>

    <div
      class="absolute hidden md:block bottom-0 left-200 top-26 h-[932px] w-[997px] opacity-35"
    >
      <img
        src="../../../assets/img/decor/pyramid.png"
        class="h-full w-full scale-x-[-1]"
        alt="decorative pyramid"
      />
    </div>
  </section>
</template>
