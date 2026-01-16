<template>
  <section class="container mx-auto flex flex-col gap-24">
    <div class="grid grid-cols-2 items-start">
      <SectionHeading span1="Creating<br>" span2="LASTING IMPACT" />
      <div class="flex flex-col gap-8">
        <div class="paragraph-20 text-[#667085]">
          At Connect Nation, we create Adelaide brands with tailored digital
          strategies that deliver measurable results. Explore our creative
          projects and see how we turn ideas into powerful business solutions.
        </div>
        <ButtonTertiaryDark label="Discuss Your Project" to="/" />
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="flex flex-col gap-5 pb-12 cursor-pointer group"
      >
        <div class="relative overflow-hidden">
          <img
            :src="project.image"
            :alt="project.title"
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
              class="text-[#D0D5DD] group-hover:text-[#56BEB7] transition-all ease-in-out duration-800"
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
      </div>
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
  },
  {
    image: Danphe,
    client: "Danphe Staffing",
    projectName: "Danphe Staffing",
    services: "Website & SEO",
  },
  {
    image: Royal,
    client: "Project Name-",
    projectName: "Royal Healthcare",
    services: "Branding & Website",
  },
  {
    image: Boujee,
    client: "Project Name-",
    projectName: "Boujee Home Loan",
    services: "Website & Digital Strategy",
  },
  {
    image: Mcquel,
    client: "Project Name-",
    projectName: "McQuel Healthcare",
    services: "Marketing, Website & SEO",
  },
  {
    image: ZeroOne,
    client: "Project Name-",
    projectName: "Zero One Advisory",
    services: "Website & Consulting",
  },
];
</script>
