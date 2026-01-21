<template>
  <PagesBanner title="Our Services" />
  <AchievementsSection />
  <ServicesSection />
  <!-- <HowWeWorkSection /> -->
  <ClientStoriesSection />
  <FAQSection :faqs="faqs" />
  <BusinessSection />
  <GetInTouchSection />
</template>
<script setup lang="ts">
import AchievementsSection from "./sections/AchievementsSection.vue";
import BannerSection from "../../components/PagesBanner.vue";
// import HowWeWorkSection from "./sections/HowWeWorkSection.vue";
import ServicesSection from "./sections/ServicesSection.vue";
import BusinessSection from "./../Home/sections/BusinessSection.vue";
import ClientStoriesSection from "./../Home/sections/ClientsStoriesSection.vue";
import FAQSection from "../Home/sections/FAQSection.vue";
import GetInTouchSection from "../Home/sections/GetInTouchSection.vue";
import PagesBanner from "../../components/PagesBanner.vue";
const faqs = [
  {
    question: "What services do you offer for Adelaide businesses?",
    number: "01",
    answer:
      "We offer website design, mobile app development, SEO services, video editing, graphic design, SaaS development, and digital marketing for Adelaide businesses.",
  },
  {
    question: "How much do your services typically cost?",
    number: "02",
    answer:
      "Pricing varies by project scope. Basic websites start from $3,000, and custom solutions start from $8,000. Contact us for a tailored Adelaide business quote.",
  },
  {
    question: "Do you offer package deals for multiple services?",
    number: "03",
    answer:
      "Yes, we offer bundled packages combining web design, SEO, and digital marketing services at discounted rates for Adelaide clients.",
  },
  {
    question: "Can you handle both design and development in-house?",
    number: "04",
    answer:
      "Yes, our Adelaide team manages everything from strategy and design to development and launch, ensuring seamless project execution.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    number: "05",
    answer:
      "Absolutely. We offer monthly maintenance packages that include updates, support, security, and optimization for Adelaide-based business projects.",
  },
  {
    question: "What’s the difference between web design and web development?",
    number: "06",
    answer:
      "Web design focuses on visual appearance and user experience, while web development handles the functional and technical backend of the website.",
  },
  {
    question: "Do you create custom solutions or use templates?",
    number: "07",
    answer:
      "We create fully custom solutions tailored to your Adelaide brand identity and business goals—never generic templates.",
  },
  {
    question:
      "Can you help with digital strategy beyond just building websites?",
    number: "08",
    answer:
      "Yes, we provide comprehensive digital strategy including SEO, content marketing, social media management, and paid advertising for Adelaide businesses.",
  },
  {
    question: "What industries do your services cater to?",
    number: "09",
    answer:
      "We serve Adelaide businesses across all industries, including retail, healthcare, education, hospitality, professional services, and startups.",
  },
  {
    question: "How do I choose which services my business needs?",
    number: "10",
    answer:
      "Book a free consultation and we’ll assess your Adelaide business goals, current digital presence, and recommend the best service combination.",
  },
];
</script>
