<template>
  <div
    v-if="details"
    class="flex flex-col xl:grid xl:grid-cols-6 xl:items-start gap-16"
  >
    <div class="flex flex-col gap-16 col-span-4">
      <div class="flex flex-col gap-4">
        <div
          class="flex flex-col md:flex-row md:justify-between justify-center items-center gap-6"
        >
          <div
            class="flex flex-col md:flex-row justify-center items-center gap-6"
          >
            <img
              :src="'/blogs/author/' + blog.author_image"
              alt="Author"
              class="w-[56px] h-[56px] rounded-full border border-[1.2px] object-cover"
            />
            <div
              class="flex flex-col justify-center md:items-start items-center gap-3"
            >
              <p
                class="font-outfit font-medium text-[20px] leading-[120%] text-[#3A3A3A]"
              >
                {{ blog.author }}
              </p>
              <ul
                class="flex flex-col md:flex-row justify-center items-center gap-3"
              >
                <li class="flex gap-2 items-center">
                  <img
                    :src="Clock"
                    alt="clock"
                    class="w-[14px] h-[14px] filter invert brightness-50"
                  />
                  <p
                    class="font-inter font-normal text-[14px] leading-[120%] text-[#667085]"
                  >
                    {{ blog.readTime }} Mins Read
                  </p>
                </li>
                <li class="flex gap-2 items-center">
                  <img
                    :src="Calender"
                    alt="calendar"
                    class="w-[14px] h-[14px] filter invert"
                  />
                  <p
                    class="font-inter font-normal text-[14px] leading-[120%] text-[#667085]"
                  >
                    Last updated: {{ blog.date }}
                  </p>
                </li>
                <li class="flex gap-2 items-center">
                  <img
                    :src="Views"
                    alt="views"
                    class="w-[14px] h-[14px] filter invert"
                  />
                  <p
                    class="font-inter font-normal text-[14px] leading-[120%] text-[#667085]"
                  >
                    {{ blog.views }}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="flex items-center gap-2 py-2.5 px-4.5 border border-[#D0D5DD] rounded-full cursor-pointer transition-all duration-300 hover:bg-[#F2F4F7] hover:border-[#41468C] hover:text-[#41468C]"
          >
            <div
              class="flex items-center pr-4 border-r border-[#D0D5DD] group-hover:border-[#41468C]"
            >
              <img
                :src="Share"
                alt="share"
                class="w-5 h-5 transition-colors duration-300 group-hover:text-[#41468C]"
              />
            </div>
            <p
              class="font-inter font-normal text-[16px] leading-[100%] transition-colors duration-300"
            >
              Share
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-6">
          <p
            v-for="(text, index) in details?.overview"
            :key="index"
            class="font-inter font-thin text-[18px] leading-[32px] tracking-[0.02em] text-[#101828]"
          >
            {{ text.p }}
          </p>
        </div>
      </div>

      <div
        v-if="details.details"
        v-for="(detail, index) in details.details"
        :key="index"
        class="flex flex-col gap-16"
      >
        <div
          v-if="detail.type === `highlights`"
          v-for="(highlight, indexHighlights) in detail.content"
          :key="indexHighlights"
          class="flex flex-col gap-8 rounded-[8px] border p-10"
          style="
            border: 1px solid #eaecf0;
            background: linear-gradient(
              270deg,
              rgba(116, 235, 213, 0.08) 0%,
              rgba(159, 172, 230, 0.08) 100%
            );
            backdrop-filter: blur(682.25146484375px);
          "
        >
          <div class="flex gap-4 items-center">
            <div
              class="rounded-full bg-[#EAEBF3] flex justify-center items-center w-[42px] h-[42px] p-3"
            >
              <img :src="Pin" class="w-[12px]" alt="pin" />
            </div>
            <p
              class="font-outfit font-normal text-[22px] leading-[100%] text-[#101828]"
            >
              {{ highlight.title }}
            </p>
          </div>

          <ul class="flex flex-col gap-[18px]">
            <li
              v-for="(point, index) in highlight.points"
              :key="index"
              class="flex gap-[10px]"
            >
              <div
                class="rounded-full bg-[#ECFDF3] w-[34px] h-[34px] p-2 flex justify-center items-center"
              >
                <img :src="Tick" alt="tick" class="w-[18px]" />
              </div>
              <p
                class="font-inter font-normal text-[18px] leading-[30px] tracking-[0.02em] text-[#101828]"
              >
                {{ point.p }}
              </p>
            </li>
          </ul>
        </div>
        <div
          v-if="detail.type === 'section'"
          v-for="(section, sectionIndex) in detail.content"
          :key="sectionIndex"
          :id="section.title"
          class="flex flex-col gap-6"
        >
          <h1
            class="font-outfit font-medium text-[36px] leading-[100%] text-[#101828]"
          >
            {{ section.title }}
          </h1>
          <div
            class="flex flex-col gap-6 font-inter font-normal text-[18px] leading-[32px] tracking-[0.02em] text-[#101828]"
          >
            <div v-for="(paragraph, i) in section.paragraph" :key="i">
              <p
                class="font-inter font-normal text-[18px] leading-[32px] tracking-[0.02em] text-[#101828]"
                v-html="paragraph.p"
              ></p>
            </div>

            <ol
              v-if="section.points"
              class="list-decimal list-outside pl-6 mt-4 flex flex-col gap-4"
            >
              <li v-for="(point, j) in section.points" :key="j">
                {{ point.p }}
              </li>
            </ol>
          </div>
        </div>
        <div v-if="detail.type === `banner`">
          <SlugBusiness :content="detail.content" />
        </div>
      </div>
    </div>

    <div
      class="flex flex-col w-full gap-8 col-span-2 max-w-[600px] xl:max-w-[1000px]"
    >
      <div class="flex flex-col gap-4">
        <p
          class="font-outfit font-semibold text-[18px] leading-[100%] text-[#41468C]"
        >
          Jump to section
        </p>
        <ul class="flex flex-col">
          <li
            v-for="(section, index) in sections"
            :key="index"
            @click="scrollToSection(section.title)"
            class="p-4 cursor-pointer rounded-lg hover:bg-[#F2F4F7]"
          >
            {{ section.title }}
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-4">
        <h1
          class="font-outfit font-semibold text-[18px] leading-[100%] text-[#41468C]"
        >
          Subscribe to our newsletter
        </h1>

        <div
          class="w-[331px] h-[44px] px-3 py-2 rounded-lg border border-[#D0D5DD] shadow-sm transition-all duration-200 focus-within:border-[#41468C] focus-within:ring-1 focus-within:ring-[#41468C]"
        >
          <input
            type="text"
            class="w-full h-full outline-none font-inter font-normal text-[16px] text-[#3A3A3A] placeholder:text-gray-400"
            placeholder="Enter your email"
          />
        </div>
        <div class="max-w-[330px]">
          <ButtonPackageDark
            label="Subscribe"
            to="/"
            class="w-full transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Clock from "../../../assets/img/icons/clock.svg";
import Calender from "../../../assets/img/icons/Calender.svg";
import Share from "../../../assets/img/icons/share.svg";
import Pin from "../../../assets/img/icons/pin.svg";
import Tick from "../../../assets/img/icons/tick.svg";
import Views from "../../../assets/img/icons/eye.svg";
import BusinessSection from "../../Home/sections/BusinessSection.vue";
import ButtonPackageDark from "../../../components/buttons/ButtonPackageDark.vue";
import SlugBusiness from "./SlugBusiness.vue";

import { ref, computed, onMounted } from "vue";
const sections = computed(() => {
  if (!props?.details?.details) return [];
  return props?.details.details
    .filter((d) => d?.type === "section")
    .flatMap((d) => d.content || []);
});

const props = defineProps({
  details: Object,
  blog: Object,
});

function scrollToSection(title) {
  const el = document.getElementById(title);
  if (el) {
    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
</script>
