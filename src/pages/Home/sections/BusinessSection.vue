<template>
  <section :style="backgroundStyle" class="bg-[#FAFAFA]">
    <div class="container mx-auto px-4 md:px-0">
      <div class="relative overflow-hidden">
        <div
          class="relative grid grid-cols-1 md:grid-cols-2 w-full items-center rounded-2xl mt-16 md:mt-24 bg-[#FFFFFF4D] backdrop-blur-xl shadow-[0px_32px_64px_-12px_rgba(16,24,40,0.14)]"
        >
          <!-- LEFT CONTENT -->
          <div
            class="flex flex-col gap-6 md:gap-8 px-5 py-10 md:px-12 md:py-0 z-10 text-center md:text-left items-center md:items-start"
          >
            <h2
              class="font-outfit font-semibold text-[28px] md:text-[36px] leading-[1.2] uppercase text-[#0C111D]"
            >
              Ready to Take Your Business to the Next Level?
            </h2>

            <p class="text-[16px] leading-[1.6] text-[#0C111DCC] max-w-[520px]">
              Get expert insights and personalized strategies tailored to your
              business needs. Book a free consultation today, and let’s create
              something exceptional together.
            </p>

            <ButtonPrimaryLight label="Book a Consultation" to="/" />
          </div>

          <!-- RIGHT VISUAL (DESKTOP ONLY) -->
          <div
            class="relative w-full h-full items-center justify-center hidden md:flex"
          >
            <!-- Gradient Blob -->
            <div
              class="absolute w-[500px] h-[400px] rounded-full"
              style="
                background: linear-gradient(
                  270deg,
                  rgba(116, 235, 213, 0.6) 0%,
                  rgba(159, 172, 230, 0.6) 100%
                );
              "
            ></div>

            <!-- Phone + Screen -->
            <div class="relative z-30 translate-y-12 scale-160">
              <img
                src="../../../assets/img/websites/connect-nation.svg"
                class="absolute top-[-11%] left-[5%] w-[90%] h-[94%] z-10 rounded-4xl"
                alt="Website preview"
              />
              <img
                src="../../../assets/img/decor/galaxy-s9.png"
                class="relative z-20 w-[240px] block"
                alt="Phone mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import ButtonPrimaryLight from "../../../components/buttons/ButtonPrimaryLight.vue";
import bgImage from "../../../assets/img/other/Business-section-bg.png";

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
}));
</script>

<style scoped>
.clip-bottom {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}
</style>
