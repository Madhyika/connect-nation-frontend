<script setup>
import { reactive, onMounted } from "vue";
import SectionHeading from "../../../components/headings/SectionHeading.vue";
import ExcellenceImg from "../../../assets/img/home/WhatWeStand/excellence.png";
import ResultsDrivenImg from "../../../assets/img/home/WhatWeStand/results.png";
import ClientFocusedImg from "../../../assets/img/home/WhatWeStand/client.png";
import LocalExpertiseImg from "../../../assets/img/home/WhatWeStand/local.png";

const repeatedCards = reactive([
  {
    id: 1,
    title: "Excellence",
    expanded: true,
    description:
      "Delivering top-quality digital work that exceeds expectations for Adelaide businesses.",
    image: ExcellenceImg,
  },
  {
    id: 2,
    title: "Results-Driven",
    expanded: false,
    description:
      "Smart strategies and real results that grow your Adelaide business effectively.",
    image: ResultsDrivenImg,
  },
  {
    id: 3,
    title: "Client-Focused",
    expanded: false,
    description:
      "Working closely with Adelaide businesses, understanding your goals and delivering custom solutions.",
    image: ClientFocusedImg,
  },
  {
    id: 4,
    title: "Local Expertise",
    expanded: false,
    description:
      "Deep knowledge of Adelaide and South Australian markets, connecting local businesses with customers.",
    image: LocalExpertiseImg,
  },
]);

// onMounted(() => {
//   if (window.innerWidth < 768) {
//     repeatedCards.forEach((card) => {
//       card.expanded = true;
//     });
//   }
// });

function toggleCard(index) {
  if (window.innerWidth < 1) return;

  repeatedCards.forEach((card, i) => {
    card.expanded = i === index ? !card.expanded : false;
  });
}
</script>

<template>
  <section>
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 px-4 md:px-0"
    >
      <!-- LEFT COLUMN -->
      <div>
        <div
          class="flex flex-col gap-0 md:gap-8.5 text-left items-start justify-between"
        >
          <SectionHeading span1="What We" span2="Stand" />
          <div class="flex flex-col gap-5 md:gap-8 pt-2 md:pt-0 lg:pt-0">
            <p class="paragraph-20 paragraph-dark md:max-w-[520px] items-start">
              A blend of creativity, strategy, and integrity that shapes every
              Adelaide project we bring to life.
            </p>
          </div>
        </div>

        <!-- Decorative Images -->
        <div class="relative overflow-hidden mt-6 scale-120 hidden md:block">
          <img
            class="w-133 filter grayscale opacity-70"
            src="../../../assets/img/decor/GlobeHands.png"
            alt=""
          />
          <img
            class="absolute left-0 bottom-0 opacity-30 translate-y-[42%] xl:-translate-x-[9%]"
            src="../../../assets/img/logo/logo.png"
            alt=""
          />
        </div>
      </div>

      <!-- RIGHT COLUMN (CARDS) -->
      <div class="flex flex-col gap-4">
        <div
          v-for="(item, index) in repeatedCards"
          :key="item.id"
          class="flex flex-col cursor-pointer border-[0.7px] border-black bg-white transition-all duration-500"
          @click="toggleCard(index)"
        >
          <div
            class="flex flex-col gap-4 transition-all duration-500 border-l-0 hover:border-l-2 hover:border-l-[#56BEB7]"
            :class="
              item.expanded
                ? 'border-l-2 border-l-[#56BEB7]'
                : 'border-l-0 border-l-transparent'
            "
          >
            <!-- INDEX -->
            <div class="p-5">
              <p
                class="flex gap-2.5 items-center font-inter font-medium text-[14px] md:text-[15px] transition-colors duration-500"
                :class="item.expanded ? 'text-[#56BEB7]' : 'text-black'"
              >
                <span
                  class="block w-2 h-2 transition-colors duration-500"
                  :class="item.expanded ? 'bg-[#56BEB7]' : 'bg-black'"
                ></span>
                V-0{{ index + 1 }}
              </p>
            </div>

            <!-- IMAGE (ACCORDION) -->
            <div
              class="grid transition-all duration-500 ease-in-out"
              :style="{ gridTemplateRows: item.expanded ? '1fr' : '0fr' }"
            >
              <div class="overflow-hidden">
                <div class="flex w-full justify-center">
                  <img
                    class="w-[180px] md:w-53 h-auto md:h-30 object-cover"
                    :src="item.image"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <!-- TITLE + DESCRIPTION -->
            <div
              class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 items-start p-5 transition-colors duration-500"
              :class="item.expanded ? 'bg-[#F2F4F7]' : 'bg-white'"
            >
              <p
                class="font-outfit font-semibold text-[20px] md:text-[24px] uppercase transition-colors duration-500"
                :class="item.expanded ? 'text-[#56BEB7]' : 'text-black'"
              >
                {{ item.title }}
              </p>

              <div
                class="grid transition-all duration-500 ease-in-out"
                :style="{ gridTemplateRows: item.expanded ? '1fr' : '0fr' }"
              >
                <p class="paragraph-16 overflow-hidden">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
