<template>
  <section class="container mx-auto flex flex-col gap-24">
    <div class="grid grid-cols-2 items-start">
      <SectionHeading span1="Creating<br>" span2="LASTING IMPACT" />
      <div class="flex flex-col gap-8">
        <p class="paragraph-20 text-[#667085]">
          At Compose, we elevate brands with tailored digital strategies that
          deliver measurable results. Explore our standout projects and see how
          we turn ideas into impactful experiences.
        </p>
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
import SectionHeading from "../../../components/headings/SectionHeading.vue";
import Project1 from "../../../assets/img/projects/project1.png";

import Project2 from "../../../assets/img/projects/project2.png";
import Project3 from "../../../assets/img/projects/project3.png";
import Project4 from "../../../assets/img/projects/project4.png";

const projects = [
  {
    image: Project1,
    client: "Danphe Staffing",
    projectName: "Danphe Staffing",
    services: "Branding, Web Design, SEO Optimization",
  },
  {
    image: Project2,
    client: "Project 2",
    projectName: "Awesome Project",
    services: "UI/UX, Branding",
  },
  {
    image: Project3,
    client: "Project 3",
    projectName: "Creative Agency",
    services: "Web Design, Marketing",
  },
  {
    image: Project4,
    client: "Project 4",
    projectName: "Startup Brand",
    services: "Branding, SEO",
  },
  {
    image: Project1,
    client: "Project 5",
    projectName: "E-commerce Website",
    services: "Web Design, SEO Optimization",
  },
  {
    image: Project3,
    client: "Project 6",
    projectName: "Corporate Branding",
    services: "Branding, Strategy",
  },
  {
    image: Project4,
    client: "Project 7",
    projectName: "Mobile App Design",
    services: "UI/UX, Branding",
  },
  {
    image: Project1,
    client: "Danphe Staffing",
    projectName: "Danphe Staffing",
    services: "Branding, Web Design, SEO Optimization",
  },
];
</script>
