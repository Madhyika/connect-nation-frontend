<template>
  <section class="relative overflow-hidden">
    <div class="container mx-auto grid grid-cols-2 gap-8 py-10">
      <div class="flex flex-col gap-4 justify-between">
        <div class="flex flex-col gap-6">
          <SectionHeading span1="Frequently<br>" span2="Asked questions" />
          <p class="paragraph-20 paragraph-dark">
            We deliver comprehensive digital solutions designed to drive
            business growth. We create impactful content and strategies that
            help brands stand out and succeed.
          </p>
        </div>
        <div class="w-full flex gap-8 items-center z-50">
          <ButtonPrimaryLight label="Book a Consultation" />
          <ButtonSecondaryDark label="Contact our Team" />
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <div
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
    <div class="absolute w-[944px] h-[1584px] top-0 left-0 right-0 bottom-0">
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
import SectionHeading from "../../../components/SectionHeading.vue";
import ButtonPrimaryLight from "../../../components/ButtonPrimaryLight.vue";
import ButtonSecondaryDark from "../../../components/ButtonSecondaryDark.vue";

const activeIndex = ref(null);
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqs = [
  {
    question: "What video formats do you accept for editing?",
    number: "01",
    answer:
      "We accept all major video formats including MP4, MOV, AVI, MKV, and more. Files can be up to 5GB per upload. If you have larger files, please contact us for alternative upload methods.",
  },
  {
    question: "Can I request revisions after delivery?",
    number: "02",
    answer:
      "Yes! We offer a set number of revisions depending on the project type. Specific details will be discussed during your project briefing.",
  },
  {
    question: "Do you provide source files?",
    number: "03",
    answer:
      "We can provide source files upon request. Some project types may have additional fees for source file delivery.",
  },
  {
    question: "What is your typical turnaround time?",
    number: "04",
    answer:
      "Turnaround times vary based on project complexity, but most projects are delivered within 3-7 business days.",
  },
  {
    question: "How do I submit my project requirements?",
    number: "05",
    answer:
      "You can submit your requirements via our contact form, email, or by scheduling a consultation with our team.",
  },
  {
    question: "Do you offer ongoing support?",
    number: "06",
    answer:
      "Yes! We offer ongoing support packages for clients who need regular updates, maintenance, or assistance with new content.",
  },
  {
    question: "Do you provide project estimates?",
    number: "07",
    answer:
      "Absolutely! After reviewing your project requirements, we provide a detailed estimate including timelines and costs.",
  },
  {
    question: "Can I cancel a project once it starts?",
    number: "08",
    answer:
      "Projects can be canceled, but depending on the stage, partial fees may apply. This will be clearly explained in our agreement.",
  },
  {
    question: "Do you offer discounts for bulk projects?",
    number: "09",
    answer:
      "Yes! We offer discounts for clients who have multiple projects or ongoing contracts. Contact us for custom pricing.",
  },
  {
    question: "How do you ensure quality in your projects?",
    number: "10",
    answer:
      "Our team follows strict quality assurance processes, including reviews, revisions, and testing to ensure top-notch results.",
  },
];
</script>
