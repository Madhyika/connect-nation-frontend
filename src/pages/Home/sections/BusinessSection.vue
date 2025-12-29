<template>
  <section class="bg-[#FAFAFA]">
    <div class="container mx-auto py-10">
      <div class="relative overflow-hidden">
        <div
          class="grid grid-cols-2 w-full bg-[#EEF2F6] items-center rounded-xl mt-24"
        >
          <div class="flex flex-col gap-8  px-12 z-10">
            <h2
              class="font-outfit font-semibold text-[36px] leading-[1.2] tracking-[0] uppercase text-[#0C111D]"
            >
              Ready to Take Your Business to the Next Level?
            </h2>
            <p class="paragraph-18 paragraph-dark max-w-[500px]">
              We bring ideas to life through video, design, websites, and
              marketing campaigns and also the projects we've crafted to help
              businesses grow through creative content and smart strategy.
            </p>
            <ButtonPrimaryLight label="Book a Consultation" to="/" />
          </div>

          <div class="relative w-full h-full flex items-center justify-center">
            <div
              style="
                background: linear-gradient(
                  270deg,
                  rgba(116, 235, 213, 0.6) 0%,
                  rgba(159, 172, 230, 0.6) 100%
                );
              "
              class="absolute w-[500px] h-[400px] rounded-full"
            ></div>

            <div class="relative z-30 translate-y-12 scale-160">
              <img
                src="../../../assets/img/websites/connect-nation.svg"
                class="absolute top-[-11%] left-[5%] w-[90%] h-[94%] z-10 rounded-4xl"
              />
              <img
                src="../../../assets/img/decor/galaxy-s9.png"
                class="relative z-20 w-[240px] block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonPrimaryLight from "../../../components/ButtonPrimaryLight.vue";
</script>
<style>
.clip-bottom {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}
</style>
