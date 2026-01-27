<template>
  <section class="bg-[#FAFAFA]">
    <div class="mx-auto container flex flex-col gap-5 md:gap-14">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-start">
        <SectionHeading
          span1='Perfect Package<br class="desktop-br">'
          span2="for Your Needs"
        />
        <div class="flex flex-col gap-5 md:gap-8 pt-2 md:pt-0 lg:pt-0">
          <p class="paragraph-20 paragraph-dark">
            Whether you're an Adelaide content creator, small business, or
            startup we've got a plan for you
          </p>
          <ButtonPrimaryDark label="Get Started" to="/" />
        </div>
      </div>

      <div class="flex flex-col gap-[30px] md:gap-[64px]">
        <!-- TABS -->
        <div class="flex items-start">
          <div class="flex flex-col items-start gap-6 w-full">
            <div class="flex justify-start w-full overflow-x-auto">
              <button
                v-for="tab in tabs"
                :key="tab"
                @click="activeTab = tab"
                :class="[
                  // MOBILE
                  'px-4 py-3 text-[14px] leading-[20px]',
                  'cursor-pointer whitespace-nowrap transition-all duration-300 font-inter',

                  // DESKTOP (same look, still left-aligned)
                  'md:min-w-66 md:px-6 md:py-5 md:pb-4 md:text-[18px] md:leading-[28px]',

                  activeTab === tab
                    ? 'bg-[#EFF9F8] border-b-2 border-[#56BEB7] text-[#56BEB7] font-bold'
                    : 'text-[#344054] font-medium border-b border-[#D0D5DD] hover:bg-gray-100 hover:text-[#56BEB7]',
                ]"
              >
                {{ tab }}
              </button>
            </div>
          </div>
        </div>

        <!-- CARDS -->
        <div class="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-5xl">
          <div
            v-for="(pkg, idx) in currentPackages"
            :key="idx"
            :class="[
              'relative rounded-lg border bg-white flex flex-col justify-between transition-all duration-500',
              'hover:-translate-y-2 hover:shadow-2xl',
              pkg.popular ? 'gradient-border shadow-lg' : 'border-[#EAECF0]',
            ]"
          >
            <!-- Most Popular -->
            <div
              v-if="pkg.popular"
              class="absolute top-0 left-0 right-0 py-3 rounded-t-lg text-center font-outfit font-medium text-[18px] text-[#0C111D] bg-gradient-to-r from-[#39a0ff] to-[#8fff85]"
            >
              Most Popular
            </div>

            <div class="px-8 pt-20 pb-10 flex flex-col gap-8 items-start">
              <!-- Icon -->
              <div
                class="w-16 h-16 rounded-full bg-[#EEF2F6] flex items-center justify-center"
              >
                <img
                  src="../../../assets/img/icons/Star.svg"
                  alt="Star Icon"
                  class="w-7 h-7"
                />
              </div>

              <!-- Title -->
              <div class="text-left">
                <h3
                  class="font-outfit font-semibold text-[22px] text-[#0C111D]"
                >
                  {{ pkg.name }}
                </h3>
                <p class="text-[#98A2B3] text-[16px]">
                  {{ pkg.tagline }}
                </p>
              </div>

              <!-- Price -->
              <h2 class="text-left font-outfit">
                <span class="text-[48px] font-semibold text-black">
                  ${{ pkg.price }}
                </span>
                <span class="text-[#98A2B3] text-[16px]"> / Month</span>
              </h2>

              <!-- Features -->
              <ul class="flex flex-col gap-4">
                <li
                  v-for="(feature, fIdx) in pkg.features"
                  :key="fIdx"
                  class="flex items-center gap-3"
                >
                  <div
                    class="w-8 h-8 rounded-full bg-[#EAEBF3] flex items-center justify-center"
                  >
                    <img :src="tickIcon" alt="Tick Icon" />
                  </div>
                  <p class="text-[#0C111D] text-[16px] font-medium">
                    {{ feature }}
                  </p>
                </li>
              </ul>
              <p
                class="font-inter font-semibold text-[18px] leading-none text-[#56BEB7]"
              >
                {{ pkg.conclusion }}
              </p>

              <!-- Button -->
              <component
                :is="pkg.popular ? ButtonPackageDark : ButtonPackageLight"
                label="Get started"
                to="/"
                class="w-full transition-transform duration-300 active:scale-95"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import SectionHeading from "../../../components/headings/SectionHeading.vue";
import ButtonPrimaryDark from "../../../components/buttons/ButtonPrimaryDark.vue";
import ButtonPackageDark from "../../../components/buttons/ButtonPackageDark.vue";
import ButtonPackageLight from "../../../components/buttons/ButtonPackageLight.vue";
import tickIcon from "../../../assets/img/icons/tick.svg";

const tabs = ["Media Growth Package", "Website Package"];
const activeTab = ref("Website Package");

/* ======================
   PACKAGE DATA
====================== */

const packageData = {
  "Website Package": [
    {
      name: "Starter Pack",
      tagline: "Basic Website Package",
      price: "1450",
      popular: false,
      features: [
        "Full Stack Website Development",
        "Basic Pages Website",
        "Domain & Hosting Purchase",
        "Google Business Profile Management",
        "Mobile Responsive Design",
        "Basic SEO Setup",
      ],
    },
    {
      name: "Growth Pack",
      tagline: "Advanced / Fully Functional Website",
      price: "5500",
      popular: true,
      features: [
        "Full Stack Website Development",
        "Custom UI/UX Design",
        "Fully Functional Website",
        "Domain & Hosting",
        "Google Profile Management",
        "Advanced SEO Setup",
        "Website Management & Maintenance",
      ],
      conclusion: "Flexible monthly payment options available.",
    },
  ],

  "Media Growth Package": [
    {
      name: "Starter Pack",
      price: "750",
      popular: false,
      features: [
        "Business Assessment & Analysis",
        "Content Research & Strategy",
        "Video Shoot – Professional cameraman (4 hours per month, split into 2 shoots per fortnight)",
        "Video Editing – 8 to 10 videos per shoot",
        "Custom Graphic Design based on business needs",
        "Social Media Management (content posting & scheduling)",
      ],
    },
  ],
};

/* ======================
   COMPUTED
====================== */

const currentPackages = computed(() => {
  return packageData[activeTab.value];
});
</script>

<style scoped>
.gradient-border {
  border: 1px solid transparent;
  background:
    linear-gradient(#fff, #fff) padding-box,
    linear-gradient(45deg, #39a0ff 0%, #8fff85 100%) border-box;
}

.gradient-border:hover {
  box-shadow: 0 20px 40px -15px rgba(57, 160, 255, 0.3);
}
</style>
