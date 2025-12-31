<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import SectionHeading from "../../../components/headings/SectionHeading.vue";
import ButtonPrimaryLight from "../../../components/buttons/ButtonPrimaryLight.vue";
import ButtonSectionSecondaryDark from "../../../components/buttons/ButtonSectionSecondaryDark.vue";
import AcheiversCollegeLogo from "../../../assets/img/logo/projects/AcheiversCollege.png";
import AcheiversDesktop from "../../../assets/img/websites/AcheiversDesktop.png";
import AcheiversMobile from "../../../assets/img/websites/AcheiversMobile.png";

const originalCards = [
  {
    id: 1,
    year: "2021",
    title: "Achievers college website 1",
    description:
      "Collaborate with the world’s top platforms and partners to deliver results that set new standards.",
    logo: AcheiversCollegeLogo,
    desktopImg: AcheiversDesktop,
    mobileImg: AcheiversMobile,
  },
  {
    id: 2,
    year: "2022",
    title: "Achievers college website 2",
    description:
      "Our innovative approach ensures your brand stands out in a crowded digital landscape.",
    logo: AcheiversCollegeLogo,
    desktopImg: AcheiversDesktop,
    mobileImg: AcheiversMobile,
  },
  {
    id: 3,
    year: "2023",
    title: "Achievers college website 3",
    description:
      "Transforming vision into reality with cutting-edge technology and creative design.",
    logo: AcheiversCollegeLogo,
    desktopImg: AcheiversDesktop,
    mobileImg: AcheiversMobile,
  },
];

const sectionRef = ref(null);
const scrollProgress = ref(0);

const handleScroll = () => {
  if (!sectionRef.value) return;
  const rect = sectionRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const totalScrollableHeight = rect.height - windowHeight;
  const currentScroll = -rect.top;
  const progress = Math.min(
    Math.max(currentScroll / totalScrollableHeight, 0),
    1
  );
  scrollProgress.value = progress;
};

const activeIndex = computed(() => {
  const steps = originalCards.length;
  const index = Math.floor(scrollProgress.value * steps);
  return Math.min(index, steps - 1);
});

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <section ref="sectionRef" class="relative h-[400vh] bg-[#FAFAFA]">
    <div class="sticky top-0 flex flex-col justify-center overflow-hidden">
      <div class="container mx-auto flex flex-col gap-18">
        <div
          class="grid gap-4 lg:gap-0 lg:grid-cols-2 items-start justify-between"
        >
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

        <div
          class="relative flex h-screen md:h-[600px] items-center justify-center"
        >
          <div
            v-for="(card, index) in originalCards"
            :key="card.id"
            v-show="index >= activeIndex"
            class="absolute flex h-full justify-center transition-all ease-in-out duration-700 ease-out"
            :style="{
              zIndex: 30 - (index - activeIndex),
              width: `${100 - (index - activeIndex) * 4}%`,
              transform: `translateY(-${
                Math.pow(Math.abs(index - activeIndex), 0.5) *
                20 *
                Math.sign(index - activeIndex)
              }px)`,
              opacity: index === activeIndex ? 1 : 0.9,
            }"
          >
            <div
              class="gradient-card h-full grid grid-cols-1 md:grid-cols-2 bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden"
            >
              <div
                class="relative flex items-center justify-center scale-75 lg:scale-90"
              >
                <div class="relative z-10">
                  <img
                    :src="card.desktopImg"
                    class="absolute top-[11%] left-[13%] w-[74%] h-[78%] z-10 d"
                  />
                  <img
                    src="../../../assets/img/decor/macbook-air.png"
                    class="relative z-20 w-[800px]"
                  />
                </div>

                <div class="absolute left-[65%] right-0 z-30">
                  <img
                    :src="card.mobileImg"
                    class="absolute top-[6.5%] left-[4%] w-[90%] h-[87%] z-10 rounded-xl d"
                  />
                  <img
                    src="../../../assets/img/decor/galaxy-s9.png"
                    class="relative z-20 w-[220px]"
                  />
                </div>
              </div>

              <div
                class="flex flex-col py-22 px-14 justify-between items-start"
              >
                <div class="flex w-full items-center justify-between">
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
                  <img :src="card.logo" class="w-28 h-auto object-contain" />
                </div>

                <div>
                  <p
                    class="font-outfit text-[32px] mb-4 text-gray-900 leading-tight"
                  >
                    {{ card.title }}
                  </p>
                  <p class="paragraph-16 paragraph-dark max-w-md">
                    {{ card.description }}
                  </p>
                </div>

                <ButtonSectionSecondaryDark label="View Project" :to="'/'" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
