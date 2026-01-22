<template>
  <section class="bg-[#FAFAFA]">
    <div class="container flex flex-col gap-5">
      <div
        class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-between"
      >
        <SectionHeading
          span1='Recent<br class="desktop-br">'
          span2="Blog posts"
        />
        <div class="flex flex-col gap-5 md:gap-8 pt-2 md:pt-0 lg:pt-0">
          <p class="paragraph-20 paragraph-dark">
            A passionate group of creative minds, technical experts, and
            marketing specialists driving success for our clients.
          </p>
          <ButtonPrimaryLight label="Explore more" to="/blogs-insights" />
        </div>
      </div>

      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BlogCard
          v-for="(blog, index) in blogs.slice(0, 3)"
          :key="index"
          :blog="blog"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "../../../components/headings/SectionHeading.vue";
import ButtonPrimaryLight from "../../../components/buttons/ButtonPrimaryLight.vue";
import BlogCard from "../../BlogsInsights/sections/BlogCard.vue";
import { blogs } from "../../../../stores/blog";
</script>
