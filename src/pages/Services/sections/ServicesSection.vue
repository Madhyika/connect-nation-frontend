<template>
  <section class="container mx-auto flex flex-col gap-26">
    <div class="grid grid-cols-2 items-start">
      <SectionHeading span1="Our" span2="Services" />
      <p class="paragraph-20 paragraph-dark font-bold">
        We deliver comprehensive digital solutions designed to drive business
        growth. We create impactful content and strategies that help brands
        stand out and succeed.
      </p>
    </div>

    <div class="flex flex-col gap-26">
      <div
        v-for="(service, idx) in services"
        :key="idx"
        class="grid grid-cols-[48px_4fr_3fr_3fr] gap-12 items-start group"
      >
        <p
          class="font-outfit font-semibold text-[24px] leading-none text-[#D0D5DD] group-hover:text-black transition-colors duration-300"
        >
          {{ String(idx + 1).padStart(2, "0") }}
        </p>

        <div class="flex flex-col gap-3">
          <h2
            class="font-outfit font-semibold text-[22px] leading-[30px] uppercase text-[#0C111D] cursor-pointer group-hover:underline transition-all duration-300"
          >
            {{ service.title }}
          </h2>
          <p class="paragraph-16 paragraph-dark text-justify">
            {{ service.description }}
          </p>
        </div>

        <ul class="grid grid-cols-1 gap-6">
          <li
            v-for="feature in service.features"
            :key="feature"
            class="flex items-center gap-3 font-inter font-semibold text-[16px] leading-none tracking-[0.04em] uppercase text-[#0C111D]"
          >
            <span
              class="w-2.5 h-2.5 rounded-full bg-[#0C111D] opacity-50 shrink-0"
            ></span>
            <span>{{ feature }}</span>
          </li>
        </ul>

        <div class="flex items-center justify-center">
          <img
            class="w-full h-94 object-cover rounded-[7px]"
            :src="service.image"
            alt="Service Image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonPrimaryLight from "../../../components/buttons/ButtonPrimaryLight.vue";
import SectionHeading from "../../../components/headings/SectionHeading.vue";
import ServiceImg from "../../../assets/img/home/service.png";

const services = [
  {
    title: "Website Design & Development",
    description:
      "Our design process focuses on understanding your business needs, crafting a unique brand experience, and ensuring seamless navigation for your visitors.",
    features: [
      "Responsive Design",
      "UX Design",
      "UI Design",
      "SEO Web Design",
      "Custom Websites",
      "WordPress Development",
    ],
    image: ServiceImg,
  },
  {
    title: "SaaS Development",
    description:
      "We provide scalable SaaS solutions tailored to your business needs, ensuring reliability and performance.",
    features: [
      "Cloud Hosting",
      "API Integration",
      "Multi-Tenant Architecture",
      "Custom Modules",
    ],
    image: ServiceImg,
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless user experiences.",
    features: [
      "iOS & Android",
      "React Native",
      "UX/UI Design",
      "Push Notifications",
    ],
    image: ServiceImg,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces and experiences that engage and convert users.",
    features: [
      "Wireframing",
      "Prototyping",
      "User Testing",
      "Interaction Design",
    ],
    image: ServiceImg,
  },
];
</script>
