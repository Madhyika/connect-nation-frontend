<template>
  <PagesBanner title="package plans" imageSrc="PackageBanner.png" />
  <PerfectPackageSection />
  <ClientStoriesSection />
  <FAQSection :faqs="faqs" />
  <GetIntoTouchSection />
</template>
<script setup>
import PagesBanner from "../../components/PagesBanner.vue";

import PerfectPackageSection from "./sections/PerfectPackageSection.vue";
import ClientStoriesSection from "../Home/sections/ClientsStoriesSection.vue";
import FAQSection from "../Home/sections/FAQSection.vue";
import GetIntoTouchSection from "../Home/sections/GetInTouchSection.vue";

const faqs = [
  {
    question: "Which package is right for my Adelaide business?",
    number: "01",
    answer:
      "Starter suits content creators. Growth Pack is ideal for growing brands. Pro Pack works best for established businesses, while Enterprise is designed for large-scale operations.",
  },
  {
    question: "Can I upgrade my package later?",
    number: "02",
    answer:
      "Yes, you can upgrade at any time. We’ll credit your initial payment toward the new package for a smooth Adelaide business growth transition.",
  },
  {
    question: "What’s included in all packages?",
    number: "03",
    answer:
      "All packages include professional editing, high-resolution files, revisions, and fast turnaround. Higher tiers add strategy, optimization, and priority support.",
  },
  {
    question: "Do you offer custom packages for Adelaide businesses?",
    number: "04",
    answer:
      "Yes, we create fully tailored packages by combining services to perfectly match your Adelaide business needs and budget.",
  },
  {
    question: "Are there setup fees or hidden costs?",
    number: "05",
    answer:
      "No hidden fees. Package pricing includes everything listed. Any additional requests outside the scope are quoted separately for Adelaide clients.",
  },
  {
    question: "How long does each package service take?",
    number: "06",
    answer:
      "Starter Pack: 3–5 days. Growth Pack: 5–7 days. Pro Pack: 7–10 days. Enterprise: 10–14 days, with priority scheduling available.",
  },
  {
    question: "Can I pause or cancel my package subscription?",
    number: "07",
    answer:
      "Packages are project-based, not subscriptions. For ongoing needs, we offer flexible monthly retainers for Adelaide businesses with no long-term contracts.",
  },
  {
    question: "Do packages include revisions?",
    number: "08",
    answer:
      "Yes. Starter includes 2 revisions, Growth includes 3 revisions, Pro includes unlimited revisions, and Enterprise includes unlimited revisions with priority response.",
  },
  {
    question: "What payment methods do you accept?",
    number: "09",
    answer:
      "We accept bank transfer, credit card, PayPal, and payment plans for larger Adelaide business packages, split across project milestones.",
  },
  {
    question: "Is there a money-back guarantee?",
    number: "10",
    answer:
      "Yes, we offer a satisfaction guarantee. If you’re unhappy after the first draft, we’ll revise until it’s right or provide a refund for Adelaide clients.",
  },
];
</script>
