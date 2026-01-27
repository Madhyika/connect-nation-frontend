<template>
  <section class="bg-[#FAFAFA] container flex flex-col gap-5">
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-between"
    >
      <SectionHeading span1="Creating<br>" span2="LASTING IMPACT" />
      <div class="flex flex-col gap-5 md:gap-8 pt-2 md:pt-0 lg:pt-0">
        <p class="paragraph-20 paragraph-dark">
          At Connect Nation, we create Adelaide brands with tailored digital
          strategies that deliver measurable results. Explore our creative
          projects and see how we turn ideas into powerful business solutions.
        </p>
        <div class="self-start">
          <ButtonTertiaryDark label="Discuss Your Project" to="/" />
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-[30px]"
    >
      <a
        v-for="(project, index) in projects"
        :key="index"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex flex-col gap-5 md:pb-12 cursor-pointer group"
      >
        <div class="relative overflow-hidden">
          <img
            :src="project.image"
            :alt="project.projectName"
            class="w-full h-[344px] object-cover transition-transform duration-800 ease-in-out group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-800 ease-in-out"
          ></div>
        </div>

        <div class="flex flex-col gap-3">
          <div
            class="font-outfit font-semibold text-[16px] leading-[100%] tracking-[-0.02em] uppercase flex gap-1"
          >
            <span class="text-[#344054]">{{ project.client }}</span>
            <span class="text-[#344054]">-</span>
            <span
              class="text-[#98A2B3] group-hover:text-[#56BEB7] transition-all ease-in-out duration-800"
            >
              {{ project.projectName }}
            </span>
          </div>
          <p
            class="font-inter font-medium text-[14px] leading-[100%] tracking-[-0.01em] capitalize text-[#344054]"
          >
            {{ project.services }}
          </p>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import ButtonTertiaryDark from "../../../components/buttons/ButtonTertiaryDark.vue";

import Achievers from "../../../assets/img/projects/achievers.png";
import Boujee from "../../../assets/img/projects/boujee.png";
import Danphe from "../../../assets/img/projects/danphe.png";
import Royal from "../../../assets/img/projects/royal.png";
import Mcquel from "../../../assets/img/projects/mcquel.png";
import ZeroOne from "../../../assets/img/projects/zeroone.png";

import SectionHeading from "../../../components/headings/SectionHeading.vue";

const projects = [
  {
    image: Achievers,
    client: "Project Name-",
    projectName: "Achievers College",
    services: "Website & SEO",
    url: "https://achieverscollege.com.au/",
  },
  {
    image: Danphe,
    client: "Danphe Staffing",
    projectName: "Danphe Staffing",
    services: "Website & SEO",
    url: "https://danphestaffing.com.au/",
  },
  {
    image: Royal,
    client: "Project Name-",
    projectName: "Royal Healthcare",
    services: "Branding & Website",
    // url: "https://royalhealthcare.com.au/",
  },
  {
    image: Boujee,
    client: "Project Name-",
    projectName: "Boujee Home Loan",
    services: "Website & Digital Strategy",
    url: "https://boujeehomeloans.com.au/",
  },
  {
    image: Mcquel,
    client: "Project Name-",
    projectName: "McQuel Healthcare",
    services: "Marketing, Website & SEO",
    url: "https://mcquelhealthcare.com.au/",
  },
  {
    image: ZeroOne,
    client: "Project Name-",
    projectName: "Zero One Advisory",
    services: "Website & Consulting",
    // url: "https://zerooneadvisory.com.au/",
  },
];
</script>
