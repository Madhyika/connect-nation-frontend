<template>
  <BannerSection />
  <ClientsSection />
  <ServicesSection />
  <MarketingSection />
  <WhatWeCreatedSection />
  <WhatWeStandSection />
  <BusinessSection />
  <StorySection />
  <ClientsStoriesSection />
  <OurTeamSection />
  <FAQSection :faqs="faqs" />
  <RecentBlogsSection />
  <GetInTouchSection />
</template>

<script setup>
import BannerSection from "./sections/BannerSection.vue";
import BusinessSection from "./sections/BusinessSection.vue";
import ClientsSection from "./sections/ClientsSection.vue";
import MarketingSection from "./sections/MarketingSection.vue";
import ServicesSection from "./sections/ServicesSection.vue";
import WhatWeCreatedSection from "./sections/WhatWeCreatedSection.vue";
import WhatWeStandSection from "./sections/WhatWeStandSection.vue";
import StorySection from "./sections/StorySection.vue";
import ClientsStoriesSection from "./sections/ClientsStoriesSection.vue";
import OurTeamSection from "./sections/OurTeamSection.vue";
import FAQSection from "./sections/FAQSection.vue";
import RecentBlogsSection from "./sections/RecentBlogsSection.vue";
import GetInTouchSection from "./sections/GetInTouchSection.vue";

const faqs = [
  {
    question: " How much does website design cost in Adelaide?",
    number: "01",
    answer:
      " Basic websites start from $3,000, and custom business sites from $8,000. Contact us for a tailored quote.",
  },
  {
    question: "How long does it take to build a website?",
    number: "02",
    answer:
      "Standard business websites take 4-6 weeks. Rush options are available for Adelaide clients.",
  },
  {
    question: " Do you provide SEO services with website development?",
    number: "03",
    answer:
      "Yes, basic on-page SEO is included. Comprehensive SEO packages are available with keyword research and local optimization.",
  },
  {
    question: "Can you help with social media marketing?",
    number: "04",
    answer:
      "Yes, we offer complete social media services, including strategy, content creation, advertising, and analytics for Adelaide businesses.",
  },
  {
    question: "Do you offer ongoing website maintenance?",
    number: "05",
    answer:
      "Yes, monthly maintenance packages include security updates, backups, content changes, and technical support.",
  },
  {
    question: "What video formats do you accept?",
    number: "06",
    answer:
      "We accept MP4, MOV, AVI, MKV, and all major formats. Files up to 5GB per upload.",
  },
  {
    question: "How long does video editing take?",
    number: "07",
    answer:
      "Standard projects take 3-5 business days. Rush service is available for urgent Adelaide client needs.",
  },
  {
    question: "Can you work with businesses outside Adelaide?",
    number: "08",
    answer:
      "Yes, we serve clients across Australia and internationally through remote collaboration and online project delivery.",
  },
  {
    question: " Do you provide design revisions?",
    number: "09",
    answer:
      "Yes, two rounds of revisions are included with all projects to ensure perfect results.",
  },
  {
    question: "What makes you different from DIY website builders?",
    number: "10",
    answer:
      "Custom design, professional SEO, brand consistency, ongoing support, and results-driven strategies that DIY tools can't provide.",
  },
];
</script>
