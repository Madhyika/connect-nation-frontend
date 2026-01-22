<template>
  <div
    class="relative w-full h-[70vh] pt-24"
    style="
      background: linear-gradient(
        270deg,
        rgba(116, 235, 213, 0.3) 0%,
        rgba(159, 172, 230, 0.3) 100%
      );
    "
  >
    <!-- Background Pattern -->
    <img
      :src="BlogsBackgroundPattern"
      class="absolute inset-0 w-full h-full object-cover pointer-events-none"
      alt=""
    />

    <!-- Content -->
    <div
      class="relative container mx-auto h-full flex items-center justify-center px-4"
    >
      <div
        class="flex flex-col items-center justify-center gap-3 h-full md:w-1/2"
      >
        <!-- BLOGS -->
        <p
          class="font-inter text-sm font-semibold tracking-[0.06em] text-[#56BEB7]"
        >
          BLOGS
        </p>

        <!-- Heading -->
        <h1
          class="font-outfit text-3xl md:text-[40px] font-medium leading-[48px] tracking-[-0.02em] text-center text-[#101828]"
        >
          Maximizing Efficiency with Insider Tips and Strategies
        </h1>

        <!-- Description -->
        <p
          class="font-inter text-base md:text-lg font-normal leading-[27px] tracking-[0.02em] text-center text-[#475467]"
        >
          Explore our blog to uncover insider tips, strategies, and expert
          insights that can drive your business communication forward.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogsBackgroundPattern from "../../../assets/img/blog/BlogsBackgroundPattern.svg";
</script>
