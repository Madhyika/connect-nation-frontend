<template>
  <section class="bg-[#FAFAFA]">
    <div class="container mx-auto flex flex-col gap-16">
      <div class="grid grid-cols-2 items-center justify-between">
        <SectionHeading span1="Recent<br>" span2="Blog posts" />
        <div class="flex flex-col gap-8">
          <p class="paragraph-20 paragraph-dark">
            A passionate group of creative minds, technical experts, and
            marketing specialists driving success for our clients.
          </p>
          <ButtonPrimaryLight label="Explore more" to="/" />
        </div>
      </div>

      <div class="grid grid-cols-3 gap-8">
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="pr-2 border-r last:border-r-0 flex flex-col gap-6 border-r-[#D0D5DD]"
        >
          <img :src="blog.image" :alt="blog.title" />
          <div class="flex flex-col gap-6">
            <p
              class="text-[#41468C] font-inter font-semibold text-[14px] leading-[20px] tracking-[0.04em]"
            >
              {{ blog.author }} • {{ blog.date }}
            </p>
            <div class="flex justify-between gap-6">
              <p
                class="text-[#101828] font-outfit font-medium text-[24px] leading-[30px] tracking-[0em]"
              >
                {{ blog.title }}
              </p>
              <img
                class="filter invert w-[24px] h-[24px] scale-70 translate-y-2"
                src="../../../assets/img/icons/ArrowRight.svg"
                alt="Arrow"
              />
            </div>
            <p class="paragraph-16">
              {{ blog.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "../../../components/headings/SectionHeading.vue";
import ButtonPrimaryLight from "../../../components/buttons/ButtonPrimaryLight.vue";

import blog1 from "../../../assets/img/blog/blog1.jpg";
import blog2 from "../../../assets/img/blog/blog2.jpg";
import blog3 from "../../../assets/img/blog/blog3.jpg";

const blogs = [
  {
    image: blog1,
    author: "Natali Craig",
    date: "14 Jan 2022",
    title: "How collaboration makes us better designers",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
  },
  {
    image: blog2,
    author: "John Doe",
    date: "20 Feb 2022",
    title: "Design trends to watch this year",
    description:
      "Stay ahead with the latest design trends that are shaping the industry.",
  },
  {
    image: blog3,
    author: "Jane Smith",
    date: "05 Mar 2022",
    title: "Building a successful creative team",
    description:
      "Learn how to foster collaboration and innovation within your team.",
  },
];
</script>
