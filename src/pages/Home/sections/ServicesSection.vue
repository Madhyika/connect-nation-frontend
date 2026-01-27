<script setup>
import { ref } from "vue";
import ButtonPrimaryLight from "../../../components/buttons/ButtonPrimaryLight.vue";
import SectionHeading from "../../../components/headings/SectionHeading.vue";
import ButtonSectionSecondaryDark from "../../../components/buttons/ButtonSectionSecondaryDark.vue";

import PlusIcon from "../../../assets/img/icons/Plus.svg";
import MinusIcon from "../../../assets/img/icons/Minus.svg";

import Website from "../../../assets/img/home/service/website.png";
import Saas from "../../../assets/img/home/service/saas.png";
import Mobile from "../../../assets/img/home/service/mobile.png";
import Video from "../../../assets/img/home/service/videoediting.png";
import Graphic from "../../../assets/img/home/service/graphic.png";
import Seo from "../../../assets/img/home/service/seo.png";

// Add image for each service
const services = ref([
  {
    name: "Website Design & Development",
    open: false,
    image: Website,
    description:
      "Our design process focuses on understanding business needs, crafting unique brand experiences, and ensuring seamless navigation for visitors.",
  },
  {
    name: "SaaS Development",
    open: false,
    image: Saas,
    description:
      "Our SaaS solutions deliver scalable platforms with robust architecture, cloud-based infrastructure, and intuitive interfaces that drive growth.",
  },
  {
    name: "Mobile App Development",
    open: false,
    image: Mobile,
    description:
      "Our mobile app development creates native and cross-platform applications for iOS and Android with seamless functionality and engaging user experiences.",
  },
  {
    name: "Video Editing",
    open: false,
    image: Video,
    description:
      "Native and cross-platform mobile applications that deliver seamless user experiences.",
  },
  {
    name: "Graphic Design",
    open: false,
    image: Graphic,
    description:
      "Our graphic design creates distinctive brand identities, marketing materials, and digital assets that communicate messages clearly and professionally.",
  },
  {
    name: "SEO Services",
    open: false,
    image: Seo,
    description:
      "Our SEO services optimize websites for search engines, improve rankings, drive organic traffic, and attract qualified leads.",
  },
]);

// Track current image
const currentImage = ref(services.value[0].image);

// Accordion toggle
const toggleService = (index) => {
  services.value.forEach((service, i) => {
    if (i === index) {
      service.open = !service.open; // toggle clicked
      if (service.open) currentImage.value = service.image; // set image if open
    } else {
      service.open = false; // close others
    }
  });

  // if none is open, reset to default image
  if (!services.value.some((s) => s.open)) {
    currentImage.value = "src/assets/img/home/service/website.png";
  }
};
</script>

<template>
  <section>
    <div class="container mx-auto flex flex-col md:gap-16 gap-5">
      <!-- Heading & Description -->
      <div class="grid gap-3 lg:gap-0 lg:grid-cols-2 items-start">
        <SectionHeading span1="Our" span2="Services" />
        <div class="flex flex-col md:gap-8 gap-5">
          <p class="paragraph-20 paragraph-dark">
            We deliver comprehensive digital solutions designed to drive
            business growth for Adelaide and South Australian brands, creating
            impactful content and strategies that help businesses stand out and
            succeed.
          </p>
          <ButtonPrimaryLight label="View all Services" to="/services" />
        </div>
      </div>

      <!-- Services & Image -->
      <div class="grid xl:grid-cols-2 gap-6 xl:gap-0">
        <!-- Image -->
        <div class="flex h-full w-full xl:w-[80%] items-end">
          <div class="w-full flex justify-center items-center">
            <img
              :src="currentImage"
              alt="Service Image"
              class="xl:h-2/3 w-2/3 xl:w-full object-cover transition-all duration-500"
              style="
                width: 408px;
                height: 377px;
                top: 491px;
                left: 112px;
                border-radius: 7px;
              "
            />
          </div>
        </div>

        <!-- Services List -->
        <div class="flex">
          <ul class="flex flex-col px-6">
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
                  class="font-outfit text-left text-[22px] font-semibold uppercase leading-[30px] text-[#0C111D]"
                >
                  {{ service.name }}
                </h2>
                <img
                  :src="service.open ? MinusIcon : PlusIcon"
                  alt="Expand Collapse Icon"
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
                  <!-- <ButtonSectionSecondaryDark label="View Services" to="/" /> -->
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
