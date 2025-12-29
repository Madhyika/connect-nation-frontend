<script setup>
import { reactive } from "vue";
import SectionHeading from "../../../components/SectionHeading.vue";
import WhatWeDoneImg from "../../../assets/img/home/whatwedone.jpg";

const repeatedCards = reactive([
  {
    id: 1,
    title: "Excellence",
    expanded: false,
    description:
      "We deliver nothing but the highest quality work that exceeds expectations.",
    image: WhatWeDoneImg,
  },
  {
    id: 2,
    title: "Results-Driven",
    expanded: false,
    description:
      "We deliver nothing but the highest quality work that exceeds expectations.",
    image: WhatWeDoneImg,
  },
  {
    id: 3,
    title: "Client-Focused",
    expanded: false,
    description:
      "We prioritize client needs and deliver solutions that create real value.",
    image: WhatWeDoneImg,
  },
  {
    id: 4,
    title: "Local Expertise",
    expanded: false,
    description:
      "We understand the local market and craft strategies that resonate.",
    image: WhatWeDoneImg,
  },
]);

function toggleCard(index) {
  repeatedCards.forEach((card, i) => {
    card.expanded = i === index ? !card.expanded : false;
  });
}
</script>

<template>
  <section>
    <div class="grid grid-cols-2 container mx-auto gap-8">
      <div>
        <div class="flex flex-col gap-8.5">
          <SectionHeading span1="What We" span2="Stand" />
          <p class="paragraph-20 paragraph-dark">
            We bring ideas to life through video, design, websites, and
            marketing campaigns and also the projects we've crafted to help
            businesses grow through creative content and smart strategy.
          </p>
        </div>
        <div class="relative overflow-hidden scale-120 mt-6">
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
            <div class="p-5 ">
              <p
                class="flex gap-2.5 items-center font-inter font-medium text-[15px] transition-colors duration-500"
                :class="item.expanded ? 'text-[#56BEB7]' : 'text-black'"
              >
                <span
                  class="block w-2 h-2 transition-colors duration-500"
                  :class="item.expanded ? 'bg-[#56BEB7]' : 'bg-black'"
                ></span>
                V-0{{ index + 1 }}
              </p>
            </div>

            <div
              class="grid transition-all duration-500 ease-in-out"
              :style="{ gridTemplateRows: item.expanded ? '1fr' : '0fr' }"
            >
              <div class="overflow-hidden">
                <div class="flex w-full justify-center ">
                  <img
                    class="w-53 h-30 object-cover"
                    :src="item.image"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div
              class="grid grid-cols-2 items-start p-5 transition-colors duration-500"
              :class="item.expanded ? 'bg-[#F2F4F7]' : 'bg-white'"
            >
              <p
                class="font-outfit font-semibold text-[24px] uppercase transition-colors duration-500"
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
