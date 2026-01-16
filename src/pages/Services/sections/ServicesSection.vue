<template>
  <section class="container mx-auto flex flex-col gap-26">
    <div class="grid grid-cols-2 items-start">
      <SectionHeading span1="Our" span2="Services" />
      <p class="paragraph-20 paragraph-dark font-bold">
        We deliver comprehensive digital solutions designed to drive business
        growth for Adelaide and South Australian brands, creating impactful
        content and strategies that help businesses stand out and succeed.
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
import website from "../../../assets/img/home/service/website.png";
import saas from "../../../assets/img/home/service/saas.png";
import mobile from "../../../assets/img/home/service/mobile.png";
import video from "../../../assets/img/home/service/videoediting.png";
import graphic from "../../../assets/img/home/service/graphic.png";
import seo from "../../../assets/img/home/service/seo.png";

const services = [
  {
    title: "WEBSITE DESIGN & DEVELOPMENT",
    description:
      "Our design process focuses on understanding business needs, crafting unique brand experiences, and ensuring seamless navigation for visitors.",
    features: [
      "Responsive Design",
      "UX Design",
      "UI Design",
      "SEO Web Design",
      "Custom Websites",
      "WordPress Development",
    ],
    image: website,
  },
  {
    title: "SaaS Development",
    description:
      "Our SaaS solutions deliver scalable platforms with robust architecture, cloud-based infrastructure, and intuitive interfaces that drive growth.",
    features: [
      "CLOUD ARCHITECTURE",
      "API DEVELOPMENT",
      "DATABASE DESIGN",
      "USER AUTHENTICATION",
      "PAYMENT INTEGRATION",
      "SCALABLE INFRASTRUCTURE",
    ],
    image: saas,
  },
  {
    title: "Mobile App Development",
    description:
      "Our mobile app development creates native and cross-platform applications for iOS and Android with seamless functionality and engaging user experiences.",
    features: [
      "APP DEVELOPMENT",
      "ANDROID APP DEVELOPMENT",
      "CROSS-PLATFORM APPS",
      "APP UI/UX DESIGN",
      "APP STORE OPTIMIZATION",
      "PUSH NOTIFICATIONS",
    ],
    image: mobile,
  },
  {
    title: "VIDEO EDITING",
    description:
      "Our video editing services transform raw footage into compelling visual content that captivates audiences and strengthens brand messaging.",
    features: [
      "PROMOTIONAL VIDEOS",
      " SOCIAL MEDIA CONTENT",
      " CORPORATE VIDEOS",
      " COLOR GRADING",
      " MOTION GRAPHICS",
      " VIDEO OPTIMIZATION",
    ],
    image: video,
  },
  {
    title: "DIGITAL MARKETING",
    description:
      "Our digital marketing strategies combine data-driven insights with creative execution to grow your Adelaide business reach and drive measurable results.",
    features: [
      "Social Media Marketing",
      "PPC Advertising",
      "Email Marketing",
      "Content Marketing",
      "Marketing Analytics",
      "Campaign Management",
    ],
    image: video,
  },
  {
    title: "GRAPHIC DESIGN",
    description:
      "Our graphic design creates distinctive brand identities, marketing materials, and digital assets that communicate messages clearly and professionally.",
    features: [
      "LOGO DESIGN",
      "BRAND IDENTITY",
      "MARKETING MATERIALS",
      "SOCIAL MEDIA GRAPHICS",
      "PRINT DESIGN",
      "INFOGRAPHICS",
    ],
    image: graphic,
  },
  {
    title: "CONTENT CREATION",
    description:
      "Our content creation services deliver engaging written, visual, and video content that resonates with your Adelaide audience and strengthens brand authority.",
    features: [
      "Copywriting",
      "Blog Content",
      "Social Media Posts",
      "Video Content",
      "Photography",
      "Content Strategy",
    ],
    image: graphic,
  },
  {
    title: "SEO SERVICES",
    description:
      "Our SEO services optimize websites for search engines, improve rankings, drive organic traffic, and attract qualified leads.",
    features: [
      "KEYWORD RESEARCH",
      "ON-PAGE SEO",
      "LOCAL SEO",
      "TECHNICAL SEO",
      "CONTENT OPTIMIZATION",
      "LINK BUILDING",
    ],
    image: seo,
  },
];
</script>
