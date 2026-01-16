<script setup>
// import { onMounted } from "vue";
import PagesBanner from "../../components/PagesBanner.vue";
import CreatingImpactSection from "./sections/CreatingImpactSection.vue";
import ClientStoriesSection from "../Home/sections/ClientsStoriesSection.vue";
import FAQSection from "../Home/sections/FAQSection.vue";
import GetInTouchSection from "../Home/sections/GetInTouchSection.vue";

// onMounted(() => {
//   document.title = "Our Work | Connect Nation Adelaide Projects";

//   const metaDescription = document.createElement("meta");
//   metaDescription.name = "description";
//   metaDescription.content =
//     "View our portfolio of Adelaide web design, mobile app development, and branding projects. See real results from our digital marketing work for South Australian businesses.";
//   document.head.appendChild(metaDescription);

//   const metaKeywords = document.createElement("meta");
//   metaKeywords.name = "keywords";
//   metaKeywords.content =
//     "Adelaide web design portfolio, Adelaide app development projects, South Australia branding work, digital marketing portfolio Adelaide, website design examples Adelaide, mobile app portfolio, UI UX design Adelaide, Adelaide digital agency work";
//   document.head.appendChild(metaKeywords);

//   const linkCanonical = document.createElement("link");
//   linkCanonical.rel = "canonical";
//   linkCanonical.href = "https://connectnation.com.au/work";
//   document.head.appendChild(linkCanonical);
// });

const faqs = [
  {
    question:
      "Can I see examples of websites you've built for Adelaide businesses?",
    number: "01",
    answer:
      " Yes, our portfolio showcases mobile apps, websites, and branding projects for Adelaide clients across various industries.",
  },
  {
    question: "How long does a typical project take from start to finish?",
    number: "02",
    answer:
      "Most projects take 4-8 weeks, depending on complexity. Mobile apps typically take 8-12 weeks for full development.",
  },
  {
    question: "Do you work with startups or only established businesses?",
    number: "03",
    answer:
      "We work with both Adelaide startups and established businesses, tailoring solutions to match your stage and budget.",
  },
  {
    question: "Can you replicate a design style I like from another website?",
    number: "04",
    answer:
      "We create custom designs inspired by your preferences while ensuring your Adelaide brand has a unique identity.",
  },
  {
    question: " What industries do you specialize in?",
    number: "05",
    answer:
      "We serve Adelaide businesses across e-commerce, education, healthcare, fitness, food service, retail, and professional services.",
  },
  {
    question: "Do you provide case studies showing project results?",
    number: "06",
    answer:
      "Yes, we can share detailed case studies with metrics and outcomes for similar Adelaide business projects.",
  },
  {
    question: "Can you redesign my existing website or app?",
    number: "07",
    answer:
      "Absolutely. We offer redesign services to modernize your digital presence while preserving what works for your Adelaide business.",
  },
  {
    question: "What's included in your branding services?",
    number: "08",
    answer:
      "Logo design, color palette, typography, brand guidelines, and marketing materials for a consistent Adelaide brand identity.",
  },
  {
    question: " Do you offer payment plans for larger projects?",
    number: "09",
    answer:
      "Yes, we offer flexible payment structures for Adelaide businesses, typically split into project milestones.",
  },
  {
    question: " How do I get started with a new project?",
    number: "10",
    answer:
      "Book a free consultation to discuss your Adelaide business goals, timeline, and budget. We'll provide a tailored proposal.",
  },
];
</script>

<template>
  <PagesBanner title="our works" imageSrc="Banner1.png" />
  <CreatingImpactSection />
  <ClientStoriesSection />
  <FAQSection :faqs="faqs" />
  <GetInTouchSection />
</template>
