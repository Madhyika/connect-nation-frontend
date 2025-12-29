<script setup lang="ts">
import ButtonPrimaryLight from "../../../components/ButtonPrimaryLight.vue";
import SectionHeading from "../../../components/SectionHeading.vue";
import ButtonSectionSecondaryDark from "../../../components/ButtonSectionSecondaryDark.vue";
import { reactive } from "vue";

const services = reactive([
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

function toggleService(index: number) {
  services[index].open = !services[index].open;
}
</script>

<template>
  <section class="">
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

      <div class="grid grid-cols-2 gap-8">
        <div class="flex h-full items-end w-2/3">
          <div class="w-full aspect-square">
            <img
              class="w-full h-full object-cover opacity-100 rotate-0"
              src="../../../assets/img/home/service.png"
              alt=""
            />
          </div>
        </div>

        <!-- Text & List Section -->
        <div class="flex flex-col gap-10">
          <div class="flex flex-col gap-4">
            <h2
              class="font-outfit font-semibold text-[22px] leading-[30px] tracking-normal uppercase text-[#0C111D]"
            >
              Website Design & Development
            </h2>
            <p class="paragraph-16 paragraph-dark">
              Our design process focuses on understanding your business needs,
              crafting a unique brand experience, and ensuring seamless
              navigation for your visitors.
            </p>
            <ButtonSectionSecondaryDark label="View Services" to="/" />
          </div>

          <!-- Services List -->
          <ul class="flex flex-col">
            <li
              v-for="(service, index) in services"
              :key="index"
              class="flex flex-col border-y border-black/20"
            >
              <button
                class="flex justify-between items-center py-5 w-full cursor-pointer"
                @click="toggleService(index)"
              >
                <h2
                  class="font-outfit font-semibold text-[22px] leading-[30px] tracking-normal uppercase text-[#0C111D]"
                >
                  {{ service.name }}
                </h2>
                <img
                  class="w-[14px] transition-transform duration-500"
                  :class="{ 'rotate-45': service.open }"
                  src="../../../assets/img/icons/Plus.svg"
                  alt=""
                />
              </button>

              <!-- collapse -->
              <div
                class="overflow-hidden transition-all duration-500 ease-in-out"
                :style="
                  service.open
                    ? 'max-height: 200px; opacity:1; padding: 1rem 0'
                    : 'max-height:0; opacity:0; padding:0'
                "
              >
                <p class="paragraph-16 paragraph-dark">
                  {{ service.description }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
