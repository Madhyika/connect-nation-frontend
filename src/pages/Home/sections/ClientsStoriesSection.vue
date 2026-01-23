<template>
  <section
    style="
      background:
        linear-gradient(0deg, #ffffff, #ffffff),
        linear-gradient(
          45deg,
          rgba(57, 160, 255, 0.08) 0%,
          rgba(143, 255, 133, 0.08) 100%
        );
    "
  >
    <div class="container flex flex-col gap-12">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <SectionHeading
          span1='clients <br class="desktop-br">'
          span2="Success Stories"
        />
        <p class="paragraph-20 paragraph-dark">
          Real feedback from Adelaide clients we've partnered with: honest
          results, genuine feedback, and lasting impact.
        </p>
      </div>

      <div
        class="relative w-full flex justify-center items-center "
      >
        <div
          class="relative w-full flex justify-center items-center h-[50vh] lg:h-[40vh] max-h-[500px] overflow-hidden"
        >
          <div
            v-for="(testimonial, i) in testimonials"
            :key="i"
            @click="navigate(i)"
            class="absolute max-w-[98%] sm:max-w-[60%] xl:max-w-[55%] h-full transition-all duration-500 ease-in-out cursor-pointer"
            :class="getPositionClass(i)"
          >
            <div
              class="rounded-lg  h-full md:py-14 px-7 py-7 md:px-24 flex flex-col justify-between"
              :class="
                i === index
                  ? 'shadow-xl opacity-100 scale-100 z-10'
                  : 'opacity-50 scale-90 z-0'
              "
              style="
                background: linear-gradient(
                  45deg,
                  rgba(57, 160, 255, 0.6),
                  rgba(143, 255, 133, 0.6)
                );
              "
            >
              <div
                class="flex flex-col lg:flex-row gap-6 justify-center items-center text-center md:text-left"
              >
                <img
                  :src="BigQuote"
                  class="max-w-[120px] max-h-[90px] "
                  alt="quote"
                />
                <p
                  class="font-outfit font-normal text-[18px] md:text-[20px] leading-[26px] tracking-[0.03em] text-[#0C111D]"
                >
                  {{ testimonial.feedback }}
                </p>
              </div>
              <div class="flex w-full lg:justify-end mt-6">
                <div
                  class="flex flex-col lg:flex-row w-full md:w-[80%] justify-between items-center gap-4 lg:gap-0"
                >
                  <div class="flex items-center gap-6">
                    <div
                      class="rounded-full flex justify-center items-center bg-white w-12 h-12 p-3"
                    >
                      <span
                        class="font-outfit font-semibold text-lg leading-[100%] tracking-[0.06em] bg-gradient-to-br from-[#39A0FF] to-[#8FFF85] bg-clip-text text-transparent"
                      >
                        {{
                          testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                        }}
                      </span>
                    </div>
                    <div class="flex flex-col gap-1">
                      <p class="font-outfit font-normal text-base text-black">
                        {{ testimonial.name }}
                      </p>
                      <p
                        class="font-inter font-normal text-xs text-[#475467] tracking-[0.03em]"
                      >
                        {{ testimonial.position }}
                      </p>
                    </div>
                  </div>
                  <img
                    :src="testimonial.logo"
                    class="w-[62px] h-auto"
                    alt="company logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex gap-5 mt-5 justify-center items-center">
        <button
          @click="prev"
          class="cursor-pointer group w-[44px] h-[44px] rounded-sm bg-[#EAECF0] flex justify-center items-center hover:bg-black transition-colors duration-300 ease-in-out"
        >
          <img
            src="../../../assets/img/icons/LeftArrow.svg"
            alt=""
            class="transition-all duration-300 ease-in-out group-hover:invert"
          />
        </button>

        <div class="flex gap-2 justify-center items-center">
          <template v-for="(testimonial, i) in testimonials" :key="i">
            <div
              :class="
                i === index
                  ? 'w-6 h-2 rounded-[6px] bg-black'
                  : 'w-2.5 h-2.5 rounded-full bg-[#D0D5DD] cursor-pointer'
              "
              @click="navigate(i)"
            ></div>
          </template>
        </div>

        <button
          @click="next"
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
  </section>
</template>

<script setup>
import { ref } from "vue";
import SectionHeading from "../../../components/headings/SectionHeading.vue";
import BigQuote from "../../../assets/img/icons/big-quote.svg";
import danpheLogo from "../../../assets/img/logo/clients/danphe.svg";
import mcquelLogo from "../../../assets/img/logo/clients/mcquel.svg";

const testimonials = [
  {
    logo: danpheLogo,
    rating: 5,
    feedback:
      "Great team, smooth process. Our patients love the new website. Worth every penny.",
    name: "Suseno Ekten",
    position: "Founder & Director",
  },
  {
    logo: mcquelLogo,
    rating: 5,
    feedback:
      "They nailed it. Our new website connects nurses with jobs perfectly. Highly recommend.",
    name: "Mitchell Matemayi",
    position: "Business Development Officer ",
  },
  {
    logo: danpheLogo,
    rating: 5,
    feedback:
      "Excellent collaboration, timely delivery, and exceptional support.",
    name: "Alice Johnson",
    position: "Marketing Head",
  },
];

const index = ref(0);

function next() {
  index.value = (index.value + 1) % testimonials.length;
}
function prev() {
  index.value = (index.value - 1 + testimonials.length) % testimonials.length;
}
function navigate(i) {
  index.value = i;
}

function getPositionClass(i) {
  if (i === index.value) return "translate-x-0 scale-100 opacity-100 z-10";
  if (i === (index.value - 1 + testimonials.length) % testimonials.length)
    return "-translate-x-170 sm:-translate-x-80 md:-translate-x-130 lg:-translate-x-160  xl:-translate-x-180 scale-90 opacity-50 z-0";
  if (i === (index.value + 1) % testimonials.length)
    return "translate-x-170 sm:translate-x-80 md:translate-x-130 lg:translate-x-160  xl:translate-x-180 scale-90 opacity-50 z-0";
  return "opacity-0 scale-90 z-0";
}
</script>
