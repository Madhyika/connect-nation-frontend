<template>
  <section class="container mx-auto py-32 bg-[#FAFAFA]">
    <!-- Title (UNCHANGED) -->
    <div
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-left justify-between sticky top-32"
    >
      <SectionHeading span1="Our" span2="Services" />
      <div class="flex flex-col gap-5 md:gap-8 pt-2 md:pt-0 lg:pt-0">
        <p class="paragraph-20 paragraph-dark">
          We deliver comprehensive digital solutions designed to drive business
          growth for Adelaide and South Australian brands.
        </p>
      </div>
    </div>

    <ul class="stacking-container sticking-cards-list mt-24">
      <li v-for="(service, idx) in services" :key="idx" class="stacking-card">
        <div class="stacking-card-inner">
          <ServiceCard :service="service" :index="idx" />
        </div>
      </li>
    </ul>
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
import digital from "../../../assets/img/home/service/digital.png";
import content from "../../../assets/img/home/service/content.png";
import ServiceCard from "./ServiceCard.vue";

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
    image: digital,
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
    image: content,
  },
];
</script>

<style lang="scss" scoped>
:root {
  --card-height: 200vh;
  --card-margin: 6rem;
  --card-top-offset: 10rem;
  --numcards: 3;
  --header-height: 80px;
}

.stacking-cards-container {
  min-height: calc(var(--numcards) * var(--card-height) + 100vh);
  position: relative;
  background: inherit;
}

.stacking-cards-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(var(--numcards), var(--card-height));
  gap: var(--card-margin);
  padding-bottom: 0;
  margin-bottom: var(--card-margin);
}

#card-1 {
  --index: 1;
}
#card-2 {
  --index: 2;
}
#card-3 {
  --index: 3;
}

.stacking-card {
  position: sticky;
  top: var(--header-height, 40vh);
  padding-top: calc(var(--index) * var(--card-top-offset));
}

/* Scroll-timeline animation (modern browsers) */
@supports (animation-timeline: scroll()) {
  @scroll-timeline cards-scroll {
    source: auto;
    axis: block;
  }

  .stacking-card {
    --index0: calc(var(--index) - 1);
    --reverse-index: calc(var(--numcards) - var(--index0));
    --reverse-index0: calc(var(--reverse-index) - 1);
  }

  .card-content {
    transform-origin: 50% 0%;
    will-change: transform;
    animation: card-scale linear forwards;
    animation-timeline: scroll(root);
    animation-range: calc(var(--index0) * 25vh) calc((var(--index0) + 1) * 25vh);
  }

  @keyframes card-scale {
    0% {
      transform: scale(1) translateY(0);
    }
    100% {
      transform: scale(calc(0.95 - (0.05 * var(--reverse-index0))))
        translateY(calc(-10px * var(--reverse-index0)));
    }
  }
}

/* Fallback for browsers without scroll-timeline */
@supports not (animation-timeline: scroll()) {
  .stacking-card:not(:first-child) {
    margin-top: -10vh;
  }
  .stacking-card:nth-child(2) .card-content {
    transform: scale(0.98) translateY(-5px);
  }
  .stacking-card:nth-child(3) .card-content {
    transform: scale(0.96) translateY(-10px);
  }
}

/* Responsive */
@media (max-width: 768px) {
  :root {
    --card-height: 100vh;
    --card-top-offset: 1rem;
    --card-margin: 1rem;
  }

  .stacking-cards-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    grid-template-rows: unset;
  }

  .stacking-card {
    position: static !important;
    padding-top: 0 !important;
  }

  .card-content {
    transform: none !important;
    animation: none !important;
    border-radius: 1rem;
  }
}
/* Scroll container */
.services-scroll-wrapper {
  max-height: 85vh; /* controls visible area */
  overflow-y: auto;
  padding-right: 0.5rem; /* scrollbar spacing */
}

/* Card list */
.services-scroll-list {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

/* Individual card */
.service-scroll-item {
  min-height: 80vh;
}

/* Optional: smooth scroll */
.services-scroll-wrapper {
  scroll-behavior: smooth;
}

/* Mobile */
/* MOBILE RESPONSIVE OVERRIDES */
@media (max-width: 768px) {
  /* Reduce card height for mobile */
  :root {
    --card-height: auto; /* let cards expand naturally */
    --card-top-offset: 1rem; /* minimal spacing */
    --card-margin: 1.5rem; /* smaller gaps */
  }

  /* Stacking cards become normal vertical flow */
  .stacking-cards-list {
    display: flex !important;
    flex-direction: column !important;
    gap: 1.5rem !important;
    grid-template-rows: unset !important;
  }

  /* Cards no longer sticky */
  .stacking-card {
    position: relative !important;
    top: auto !important;
    padding-top: 0 !important;
  }

  /* Remove transforms and animations */
  .card-content {
    transform: none !important;
    animation: none !important;
    border-radius: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }

  /* Center text inside ServiceCard for mobile */
  .stacking-card-inner {
    text-align: center;
  }

  /* Make title and description stack nicely */
  .grid.sm\:grid-cols-1 {
    display: flex;
    flex-direction: column;
    position: relative !important;
    top: auto !important;
  }
}
</style>
