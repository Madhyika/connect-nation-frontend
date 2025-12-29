<script setup>
import { ref } from "vue";
import ButtonPrimaryLight from "../../../components/ButtonPrimaryLight.vue";
import SectionHeading from "../../../components/SectionHeading.vue";
import ButtonSectionSecondaryDark from "../../../components/ButtonSectionSecondaryDark.vue";

import PlusIcon from "../../../assets/img/icons/Plus.svg";
import MinusIcon from "../../../assets/img/icons/Minus.svg";

const services = ref([
  {
    name: "Website Design & Development",
    open: false,
    description: `Our design process focuses on understanding your business needs,
crafting a unique brand experience, and ensuring seamless
navigation for your visitors.`,
  },
  {
    name: "SaaS Development",
    open: false,
    description:
      "We provide scalable SaaS solutions tailored to your business needs, ensuring reliability and performance.",
  },
  {
    name: "Web Development",
    open: false,
    description:
      "Custom websites built with modern technologies for responsiveness, performance, and SEO.",
  },
  {
    name: "Mobile App Development",
    open: false,
    description:
      "Native and cross-platform mobile applications that deliver seamless user experiences.",
  },
  {
    name: "UI/UX Design",
    open: false,
    description:
      "Designing intuitive interfaces and experiences that engage and convert users.",
  },
  {
    name: "Cloud Solutions",
    open: false,
    description:
      "Secure and scalable cloud infrastructure solutions to support your business operations.",
  },
]);

const toggleService = (index) => {
  services.value[index].open = !services.value[index].open;
};
</script>

<template>
  <section>
    <div class="container mx-auto flex flex-col gap-16">
      <div class="grid grid-cols-2 items-start">
        <SectionHeading span1="Our" span2="Services" />
        <div class="flex flex-col gap-8">
          <p class="paragraph-20 paragraph-dark">
            We deliver comprehensive digital solutions designed to drive
            business growth. We create impactful content and strategies that
            help brands stand out and succeed.
          </p>
          <ButtonPrimaryLight label="View all Services" to="/" />
        </div>
      </div>

      <div class="grid grid-cols-2">
        <div class="flex h-full w-2/3 items-end">
          <div class="aspect-square w-full">
            <img
              src="../../../assets/img/home/service.png"
              alt=""
              class="h-full w-full object-cover"
            />
          </div>
        </div>

        <div class="flex">
          <ul class="flex flex-col">
            <li
              v-for="(service, index) in services"
              :key="service.name"
              class="border-b border-black/20"
            >
              <button
                class="flex w-full items-center justify-between py-6"
                @click="toggleService(index)"
              >
                <h2
                  class="font-outfit text-[22px] font-semibold uppercase leading-[30px] text-[#0C111D]"
                >
                  {{ service.name }}
                </h2>
                <img
                  :src="service.open ? MinusIcon : PlusIcon"
                  alt=""
                  class="w-[14px] transition-all duration-300"
                />
              </button>

              <div
                class="overflow-hidden transition-all duration-500 ease-in-out"
                :class="
                  service.open
                    ? 'max-h-[300px] pb-4 opacity-100'
                    : 'max-h-0 pb-0 opacity-0'
                "
              >
                <div class="flex flex-col gap-3">
                  <p class="paragraph-16 paragraph-dark">
                    {{ service.description }}
                  </p>
                  <ButtonSectionSecondaryDark label="View Services" to="/" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
