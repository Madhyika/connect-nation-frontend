<template>
  <section class="bg-[#FAFAFA]">
    <div class="mx-auto container flex flex-col gap-14">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-start">
        <SectionHeading
          span1="Perfect Package<br>
"
          span2="for Your Needs"
        />
        <div class="flex flex-col gap-7">
          <p class="paragraph-20 paragraph-dark">
            Whether you're a content creator, small business, or host, we’ve got
            a plan for you
          </p>
          <ButtonPrimaryDark label="View all Services" to="/" />
        </div>
      </div>

      <div class="flex flex-col gap-20">
        <div class="flex justify-center items-center">
          <div class="flex flex-col justify-center items-center gap-6">
            <div
              class="flex justify-center items-center w-full overflow-x-auto"
            >
              <button
                v-for="tab in tabs"
                :key="tab"
                @click="activeTab = tab"
                :class="[
                  'min-w-66  cursor-pointer transition-all duration-300 font-inter text-[18px] leading-[28px] whitespace-nowrap py-5 pb-4',
                  activeTab === tab
                    ? 'bg-[#EFF9F8] border-b-2 border-[#56BEB7] text-[#56BEB7] font-bold '
                    : 'text-[#344054] font-medium  hover:bg-gray-100 hover:text-[#56BEB7] border-b border-[#D0D5DD]',
                ]"
              >
                {{ tab }}
              </button>
            </div>

            <div class="flex justify-start items-center w-full gap-6">
              <p
                :class="[
                  'font-inter font-semibold text-[16px] transition-colors duration-300',
                  !isLongForm ? 'text-[#0C111D]' : 'text-[#98A2B3]',
                ]"
              >
                Short Form Video
              </p>
              <button
                @click="isLongForm = !isLongForm"
                class="w-11 h-6 rounded-xl bg-[#04092152] relative transition-colors duration-300 hover:bg-[#04092170]"
              >
                <div
                  class="w-5 h-5 absolute top-[2px] rounded-full bg-white shadow-sm transition-all duration-300"
                  :style="{ left: isLongForm ? '22px' : '2px' }"
                ></div>
              </button>
              <p
                :class="[
                  'font-inter font-semibold text-[16px] transition-colors duration-300',
                  isLongForm ? 'text-[#0C111D]' : 'text-[#98A2B3]',
                ]"
              >
                YouTube Long-Form
              </p>
            </div>
          </div>
        </div>

        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(pkg, idx) in currentPackages"
            :key="idx"
            :class="[
              'group px-6 pb-10 cursor-pointer relative rounded-lg border flex flex-col gap-24 transition-all duration-500 ease-out bg-white pb-6',
              'hover:-translate-y-2 hover:shadow-2xl',
              pkg.popular
                ? 'gradient-border shadow-lg'
                : 'border-[#EAECF0] hover:border-[#56BEB7]/30',
            ]"
          >
            <div
              v-if="pkg.popular"
              class="absolute py-4 top-0 right-0 left-0 rounded-t-[7px] text-center font-outfit font-medium text-[20px] leading-none text-[#0C111D] bg-gradient-to-r from-[#39a0ff] to-[#8fff85]"
            >
              Most Popular
            </div>

            <div
              class="'flex flex-col justify-center items-center pt-26 transition-all duration-300'"
            >
              <div
                class="flex flex-col gap-8 justify-center items-center w-full"
              >
                <div
                  class="w-17 h-17 rounded-full bg-[#EEF2F6] flex justify-center items-center transition-transform duration-500 group-hover:scale-110"
                >
                  <img
                    class="w-7 h-7"
                    src="../../../assets/img/icons/Star.svg"
                    alt=""
                  />
                </div>

                <div class="text-center">
                  <h3
                    class="font-outfit font-semibold text-[22px] text-[#0C111D]"
                  >
                    {{ pkg.name }}
                  </h3>
                  <p class="font-inter font-normal text-[16px] text-[#98A2B3]">
                    {{ pkg.tagline }}
                  </p>
                </div>

                <h1 class="font-outfit leading-none">
                  <span
                    class="text-[56px] font-semibold text-black transition-colors duration-300 group-hover:text-[#56BEB7]"
                  >
                    ${{ pkg.price }}
                  </span>
                  <span
                    class="text-[#98A2B3] font-light text-[16px] group-hover:text-[#56BEB7]"
                    >/ Month</span
                  >
                </h1>

                <ul class="flex flex-col w-full gap-3">
                  <li
                    v-for="(feat, fIdx) in pkg.features"
                    :key="fIdx"
                    class="flex items-center gap-3"
                  >
                    <div
                      class="w-8 h-8 rounded-full p-2 bg-[#EAEBF3] flex justify-center items-center shrink-0 transition-colors duration-300 group-hover:bg-[#EFF9F8]"
                    >
                      <img :src="feat.included ? tickIcon : crossIcon" alt="" />
                    </div>
                    <p
                      :class="[
                        'font-inter font-medium text-[16px] leading-[23px] transition-colors duration-300',
                        feat.included ? 'text-[#0C111D]' : 'text-[#A0ABBB]',
                      ]"
                    >
                      {{ feat.text }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
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
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import SectionHeading from "../../../components/headings/SectionHeading.vue";
import ButtonPrimaryDark from "../../../components/buttons/ButtonPrimaryDark.vue";
import ButtonPackageDark from "../../../components/buttons/ButtonPackageDark.vue";
import ButtonPackageLight from "../../../components/buttons/ButtonPackageLight.vue";
import tickIcon from "../../../assets/img/icons/tick.svg";
import crossIcon from "../../../assets/img/icons/cross.svg";

const tabs = ["Content Creator Package", "Business Package", "Host Package"];
const activeTab = ref("Content Creator Package");
const isLongForm = ref(false);

// Comprehensive Data Structure
const packageData = {
  "Content Creator Package": {
    short: [
      {
        name: "Starter",
        price: "200",
        tagline: "20 Professionally edited shorts",
        popular: false,
        level: 1,
      },
      {
        name: "Growth",
        price: "400",
        tagline: "40 Professionally edited shorts",
        popular: true,
        level: 2,
      },
      {
        name: "Pro",
        price: "600",
        tagline: "60 Professionally edited shorts",
        popular: false,
        level: 3,
      },
      {
        name: "Elite",
        price: "800",
        tagline: "80 Professionally edited shorts",
        popular: false,
        level: 4,
      },
    ],
    long: [
      {
        name: "YT Starter",
        price: "500",
        tagline: "4 Long-form videos/mo",
        popular: false,
        level: 2,
      },
      {
        name: "YT Growth",
        price: "900",
        tagline: "8 Long-form videos/mo",
        popular: true,
        level: 3,
      },
      {
        name: "YT Pro",
        price: "1500",
        tagline: "12 Long-form videos/mo",
        popular: false,
        level: 4,
      },
      {
        name: "YT Elite",
        price: "2000",
        tagline: "16 Long-form videos/mo",
        popular: false,
        level: 4,
      },
    ],
  },
  "Business Package": {
    short: [
      {
        name: "Biz Basic",
        price: "450",
        tagline: "15 Ads & Brand shorts",
        popular: false,
        level: 2,
      },
      {
        name: "Biz Standard",
        price: "850",
        tagline: "30 Ads & Brand shorts",
        popular: true,
        level: 3,
      },
      {
        name: "Biz Premium",
        price: "1250",
        tagline: "45 Ads & Brand shorts",
        popular: false,
        level: 4,
      },
      {
        name: "Biz Enterprise",
        price: "2000",
        tagline: "60 Ads & Brand shorts",
        popular: false,
        level: 4,
      },
    ],
    long: [
      {
        name: "Corporate 1",
        price: "1200",
        tagline: "2 High-end brand stories",
        popular: false,
        level: 3,
      },
      {
        name: "Corporate 2",
        price: "2200",
        tagline: "4 High-end brand stories",
        popular: true,
        level: 4,
      },
      {
        name: "Corporate 3",
        price: "4000",
        tagline: "8 High-end brand stories",
        popular: false,
        level: 4,
      },
      {
        name: "Custom Biz",
        price: "6000",
        tagline: "Full Content Retainer",
        popular: false,
        level: 4,
      },
    ],
  },
  "Host Package": {
    short: [
      {
        name: "Event Mini",
        price: "300",
        tagline: "10 Event highlights",
        popular: false,
        level: 1,
      },
      {
        name: "Event Pro",
        price: "550",
        tagline: "20 Event highlights",
        popular: true,
        level: 2,
      },
      {
        name: "Host Plus",
        price: "900",
        tagline: "40 Event highlights",
        popular: false,
        level: 3,
      },
      {
        name: "Host VIP",
        price: "1400",
        tagline: "Unlimited highlights",
        popular: false,
        level: 4,
      },
    ],
    long: [
      {
        name: "Pod Starter",
        price: "600",
        tagline: "2 Podcast Episodes",
        popular: false,
        level: 2,
      },
      {
        name: "Pod Growth",
        price: "1100",
        tagline: "4 Podcast Episodes",
        popular: true,
        level: 3,
      },
      {
        name: "Pod Pro",
        price: "2000",
        tagline: "8 Podcast Episodes",
        popular: false,
        level: 4,
      },
      {
        name: "Pod Legend",
        price: "3500",
        tagline: "Weekly Multi-cam",
        popular: false,
        level: 4,
      },
    ],
  },
};

const currentPackages = computed(() => {
  const type = isLongForm.value ? "long" : "short";
  const selected = packageData[activeTab.value][type];

  return selected.map((pkg) => ({
    ...pkg,
    features: getFeatures(pkg.level, isLongForm.value),
  }));
});

function getFeatures(level, longForm) {
  const base = [
    {
      text: longForm ? "4K Color Grading" : "Professionally edited videos",
      included: true,
    },
    { text: "Premium Sound Design", included: true },
    {
      text: level > 1 ? "Priority Delivery (24-48h)" : "Standard delivery",
      included: true,
    },
    { text: "SEO Descriptions", included: level > 1 },
    { text: "Custom Thumbnails", included: level > 2 },
    { text: "Dedicated Account Manager", included: level > 3 },
  ];
  return base;
}
</script>

<style scoped>
.gradient-border {
  border: 1px solid transparent;
  background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(45deg, #39a0ff 0%, #8fff85 100%) border-box;
}

.gradient-border:hover {
  box-shadow: 0 20px 40px -15px rgba(57, 160, 255, 0.3);
}
</style>
