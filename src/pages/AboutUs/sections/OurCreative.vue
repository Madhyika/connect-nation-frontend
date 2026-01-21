<script setup>
import SectionHeading from "../../../components/headings/SectionHeading.vue";
</script>

<template>
  <!-- FULL BACKGROUND -->
  <section class="bg-[#FAFAFA]">
    <div class="container flex flex-col gap-5">
      <div
        class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-between"
      >
        <SectionHeading span1="Our Creative <br>" span2="Showcase" />
        <div class="flex flex-col gap-5 md:gap-8 pt-2 md:pt-0 lg:pt-0">
          <p class="paragraph-20 paragraph-dark">
            A visual showcase of projects we’ve created to help businesses stand
            out and grow.
          </p>
        </div>
      </div>

      <!-- Image + fade -->
      <div class="relative w-full max-w-[1440px] mx-auto">
        <img
          src="/src/assets/img/aboutUs/our-creative.png"
          alt="Our Creative Image"
          class="w-full h-auto block hidden lg:block"
        />
        <img
          src="/src/assets/img/aboutUs/our-creativeM.png"
          alt="Our Creative Image Mobile"
          class="w-full h-auto block lg:hidden"
        />
        <!-- Fade into section background -->
        <div
          class="absolute bottom-0 left-0 w-full h-[40%] pointer-events-none hidden lg:block"
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
