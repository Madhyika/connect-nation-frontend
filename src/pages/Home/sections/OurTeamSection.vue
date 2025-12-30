<template>
  <section class="container mx-auto py-10">
    <div class="flex flex-col gap-12">
      <div class="grid grid-cols-2 justify-between">
        <SectionHeading span1="What We <br>" span2="Created" />
        <div class="flex flex-col gap-10">
          <p class="paragraph-20 paragraph-dark">
            We bring ideas to life through video, design, websites, and
            marketing campaigns and also the projects we've crafted to help
            businesses grow through creative content and smart strategy.
          </p>
          <div class="w-full h-full flex justify-end items-center">
            <div class="flex gap-5">
              <button
                @click="scrollLeft"
                class="cursor-pointer group w-[44px] h-[44px] rounded-sm bg-[#EAECF0] flex justify-center items-center hover:bg-black transition-colors duration-300 ease-in-out"
              >
                <img
                  src="../../../assets/img/icons/LeftArrow.svg"
                  alt=""
                  class="transition-all duration-300 ease-in-out group-hover:invert"
                />
              </button>
              <button
                @click="scrollRight"
                class="cursor-pointer group w-[44px] h-[44px] rounded-sm bg-[#EAECF0] flex justify-center items-center hover:bg-black transition-colors duration-300 ease-in-out"
              >
                <img
                  src="../../../assets/img/icons/RightArrow.svg"
                  alt=""
                  class="filter invert transition-all duration-300 ease-in-out group-hover:invert-0"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref="carousel"
        class="flex gap-3 overflow-x-auto w-full h-[450px] relative scroll-smooth snap-x"
      >
        <div
          v-for="(member, index) in visibleTeam"
          :key="index"
          @mouseenter="activeIndex = index"
          class="relative overflow-hidden rounded-lg transition-all duration-700 ease-in-out cursor-pointer flex-[1] snap-start"
          :class="activeIndex === index ? 'flex-[3]' : 'bg-[#F2F4F7]'"
          :style="activeIndex === index ? activeGradient : ''"
        >
          <div
            class="p-6 flex flex-col gap-2 transition-opacity duration-500 delay-200"
            :class="activeIndex === index ? 'opacity-100' : 'opacity-0'"
          >
            <p
              class="font-inter font-medium text-[16px] leading-[100%] tracking-[0.05em] uppercase text-[#41468C] whitespace-nowrap"
            >
              {{ member.role }}
            </p>
            <p
              class="font-outfit font-medium text-[24px] leading-[100%] tracking-[0.02em] capitalize text-black whitespace-nowrap"
            >
              {{ member.name }}
            </p>
          </div>

          <img
            :src="member.image"
            alt="Team Member"
            class="absolute left-1/2 -translate-x-1/2 bottom-0 min-w-full object-cover filter grayscale transition-all duration-700 ease-in-out"
            :class="activeIndex === index ? 'top-[10%]' : 'top-[35%] h-full'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import SectionHeading from "../../../components/headings/SectionHeading.vue";

const activeIndex = ref(2);
const carousel = ref(null);

const activeGradient = {
  background: `linear-gradient(to bottom, rgba(86, 190, 183, 0.9), rgba(122, 204, 199, 0.9)),
               radial-gradient(circle at top right, rgba(55, 63, 164, 0.4) 0%, transparent 40%),
               radial-gradient(circle at bottom right, rgba(55, 63, 164, 0.4) 0%, transparent 40%)`,
  backgroundBlendMode: "overlay",
};

import member1 from "../../../assets/img/teamMembers/member1.png";
import member2 from "../../../assets/img/teamMembers/member2.png";
import member3 from "../../../assets/img/teamMembers/member3.png";
import member4 from "../../../assets/img/teamMembers/member4.png";
import member5 from "../../../assets/img/teamMembers/member5.png";
import member6 from "../../../assets/img/teamMembers/member6.png";

const team = [
  { name: "John Doe", role: "Designer", image: member1 },
  { name: "Jane Smith", role: "Developer", image: member2 },
  { name: "Rohit Rajput", role: "IT Analyst", image: member3 },
  { name: "Alex Carr", role: "Manager", image: member4 },
  { name: "Sara Wills", role: "Marketing", image: member5 },
  { name: "Tom Cook", role: "Strategist", image: member6 },
  { name: "John Doe", role: "Designer", image: member1 },
  { name: "Jane Smith", role: "Developer", image: member2 },
  { name: "Rohit Rajput", role: "IT Analyst", image: member3 },
  { name: "Alex Carr", role: "Manager", image: member4 },
];

const visibleTeam = ref(team.slice(0, 6));
let startIndex = 0;

const scrollLeft = () => {
  if (startIndex > 0) {
    startIndex -= 1;
    visibleTeam.value = team.slice(startIndex, startIndex + 6);
    activeIndex.value = Math.min(activeIndex.value, 5);
  }
};

const scrollRight = () => {
  if (startIndex + 6 < team.length) {
    startIndex += 1;
    visibleTeam.value = team.slice(startIndex, startIndex + 6);
    activeIndex.value = Math.min(activeIndex.value, 5);
  }
};
</script>
