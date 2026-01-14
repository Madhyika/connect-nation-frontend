<template>
  <section class="relative overflow-hidden">
    <div class="container mx-auto grid grid-cols-2 gap-8 py-10">
      <div class="flex flex-col gap-4 justify-between">
        <div class="flex flex-col gap-6">
          <SectionHeading span1="Frequently<br>" span2="Asked questions" />
          <p class="paragraph-20 paragraph-dark">
            Get quick answers about working with us and our approach to digital
            solutions.
          </p>
        </div>
        <div class="w-full flex gap-8 items-center z-50">
          <ButtonPrimaryLight label="Book a Consultation" />
          <ButtonSecondaryDark label="Contact our Team" />
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <div
          v-if="props.faqs"
          v-for="(faq, index) in faqs"
          :key="index"
          class="flex flex-col gap-3 border-b border-gray-200 pb-3 cursor-pointer"
          @click="toggle(index)"
        >
          <p
            class="w-full font-outfit font-medium text-[22px] leading-[30px] tracking-[0em] text-[#0C111D] flex justify-between items-center"
          >
            <span>{{ faq.question }}</span>
            <span
              :class="activeIndex === index ? 'text-black' : 'text-[#D0D5DD]'"
            >
              {{ faq.number }}
            </span>
          </p>

          <div
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :style="{ maxHeight: activeIndex === index ? '500px' : '0px' }"
          >
            <p class="paragraph-16 mt-2">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute -z-40 w-236 h-396 top-0 left-0 right-0 bottom-0">
      <img
        src="../../../assets/img/decor/ellipse.svg"
        class="w-full h-full"
        alt=""
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import SectionHeading from "../../../components/headings/SectionHeading.vue";
import ButtonPrimaryLight from "../../../components/buttons/ButtonPrimaryLight.vue";
import ButtonSecondaryDark from "../../../components/buttons/ButtonSecondaryDark.vue";

const activeIndex = ref(null);
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const props = defineProps({
  faqs: Object,
});
</script>
