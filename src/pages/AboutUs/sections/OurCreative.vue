<script setup lang="ts">
import SectionHeading from "../../../components/headings/SectionHeading.vue";
</script>

<template>
  <!-- FULL BACKGROUND -->
  <section class="bg-[#FAFAFA]">
    <div class="container mx-auto flex flex-col gap-[64px] py-20">
      <div class="grid grid-cols-2 gap-32">
        <SectionHeading span1="Our Creative <br>" span2="Showcase" />
        <p class="paragraph-20 paragraph-dark">
          A visual showcase of projects we’ve created to help businesses stand
          out and grow.
        </p>
      </div>

      <!-- Image + fade -->
      <div class="relative w-full max-w-[1440px] mx-auto">
        <img
          src="/src/assets/img/aboutUs/our-creative.png"
          alt="Our Creative Image"
          class="w-full h-auto block"
        />

        <!-- Fade into section background -->
        <div
          class="absolute bottom-0 left-0 w-full h-[40%] pointer-events-none"
          style="
            background: linear-gradient(
              1.75deg,
              #fafafa 17.76%,
              rgba(250, 250, 250, 0) 56.45%
            );
          "
        ></div>
      </div>
    </div>
  </section>
</template>
