<template>
  <section class="bg-[#FAFAFA]">
    <div class="container mx-auto py-6">
      <div
        class="grid grid-cols-2 w-full h-full overflow-hidden bg-[#EEF2F6] grid grid-cols-2 items-center"
      >
        <div class="flex flex-col gap-8 py-16 px-12">
          <h2
            class="font-outfit font-semibold text-[36px] leading-12.5 tracking-[0] uppercase text-[#0C111D]"
          >
            Ready to Take Your Business to the Next Level?
          </h2>
          <p class="paragraph-20 paragraph-dark">
            We bring ideas to life through video, design, websites, and
            marketing campaigns and also the projects we've crafted to help
            businesses grow through creative content and smart strategy.
          </p>
          <ButtonPrimaryLight label="Book a Consultation" to="/" />
        </div>

        <div
          style="
            background: linear-gradient(
              270deg,
              rgba(116, 235, 213, 0.6) 0%,
              rgba(159, 172, 230, 0.6) 100%
            );
          "
          class="w-full h-full mt-16 rounded-full opacity-100"
        ></div>
        <div class="absolute right-[20%] z-30 scale-140">
          <img
            src="../../../assets/img/websites/connect-nation.svg"
            class="absolute top-[-14.5%] w-[88%] h-full left-[6%] z-10 rounded-xl"
          />
          <img
            src="../../../assets/img/decor/galaxy-s9.png"
            class="relative z-20 w-[220px]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonPrimaryLight from "../../../components/ButtonPrimaryLight.vue";
</script>
