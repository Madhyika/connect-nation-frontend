<template>
  <section class="bg-[#FAFAFA]">
    <div class="container mx-auto flex flex-col">
      <!-- Heading -->
      <div class="grid grid-cols-2 items-center justify-between">
        <SectionHeading span1="What We <br>" span2="Created" />
        <div class="flex flex-col gap-8">
          <p class="paragraph-20 paragraph-dark">
            We bring ideas to life through video, design, websites, and
            marketing campaigns and also the projects we've crafted to help
            businesses grow through creative content and smart strategy.
          </p>
          <ButtonPrimaryLight label="View all projects" to="/" />
        </div>
      </div>

      <div class="relative h-[700px] flex items-center justify-center">
        <div
          v-for="(card, index) in cards"
          :key="card.id"
          class="absolute cursor-pointer transition-all duration-300 ease-in-out"
          :style="{
            zIndex: index + 10,
            transform: `translateY(${index * 3}%)`,
            width: `${96 + index * 2}%`,
          }"
          @click="bringToFront(index)"
        >
          <div class="gradient-card grid grid-cols-2">
            <!-- devices -->
            <div class="relative flex items-center justify-center scale-90">
              <!-- MacBook -->
              <div class="relative z-10">
                <img
                  :src="card.desktopImg"
                  class="absolute top-[11%] left-[13%] w-[74%] h-[78%] z-10"
                />
                <img
                  src="../../../assets/img/decor/macbook-air.png"
                  class="relative z-20 w-[800px]"
                />
              </div>

              <!-- Galaxy S9 -->
              <div class="absolute z-30 right-0 left-[65%]">
                <img
                  :src="card.mobileImg"
                  class="absolute top-[6.5%] left-[4%] w-[92%] h-[87%] z-10 rounded-xl"
                />
                <img
                  src="../../../assets/img/decor/galaxy-s9.png"
                  class="relative z-20 w-[220px]"
                />
              </div>
            </div>

            <!-- content -->
            <div
              class="flex flex-col items-start gap-16 justify-between"
            >
              <div class="flex w-full justify-between items-center">
                <div class="flex flex-col">
                  <h6
                    class="font-inter text-[16px] tracking-[0.07em] text-[#475467]"
                  >
                    Year
                  </h6>
                  <h6 class="font-outfit text-[24px] uppercase text-black">
                    {{ card.year }}
                  </h6>
                </div>
                <img class="w-28" :src="card.logo" />
              </div>

              <div>
                <p class="font-outfit text-[28px]">{{ card.title }}</p>
                <p class="paragraph-16 paragraph-dark">
                  {{ card.description }}
                </p>
              </div>

              <ButtonSectionSecondaryDark label="View Project" to="/" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "../../../components/SectionHeading.vue";
import ButtonPrimaryLight from "../../../components/ButtonPrimaryLight.vue";
import ButtonSectionSecondaryDark from "../../../components/ButtonSectionSecondaryDark.vue";
import AcheiversCollegeLogo from "../../../assets/img/logo/projects/AcheiversCollege.png";
import AcheiversDesktop from "../../../assets/img/websites/AcheiversDesktop.png";
import AcheiversMobile from "../../../assets/img/websites/AcheiversMobile.png";
import { ref } from "vue";
const cards = ref([
  {
    id: 1,
    year: "2021",
    title: "Achievers college website1",
    description:
      "Collaborate with the world’s top platforms and partners to deliver results that set new standards.",
    logo: AcheiversCollegeLogo,
    desktopImg: AcheiversDesktop,
    mobileImg: AcheiversMobile,
  },
  {
    id: 2,
    year: "2021",
    title: "Achievers college website2",
    description:
      "Collaborate with the world’s top platforms and partners to deliver results that set new standards.",
    logo: AcheiversCollegeLogo,
    desktopImg: AcheiversDesktop,
    mobileImg: AcheiversMobile,
  },
  {
    id: 3,
    year: "2021",
    title: "Achievers college website3",
    description:
      "Collaborate with the world’s top platforms and partners to deliver results that set new standards.",
    logo: AcheiversCollegeLogo,
    desktopImg: AcheiversDesktop,
    mobileImg: AcheiversMobile,
  },
]);

const bringToFront = (index) => {
  const clickedCard = cards.value.splice(index, 1)[0];
  cards.value.push(clickedCard); // push to end → will render last → z-30
};
</script>
