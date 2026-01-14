<template>
  <section :style="backgroundStyle" class="bg-[#FAFAFA]">
    <div class="container mx-auto py-10">
      <div class="relative overflow-hidden">
        <div
          class="relative grid grid-cols-2 w-full items-center rounded-xl mt-24 bg-[#FFFFFF4D] backdrop-blur-xl shadow-[0px_32px_64px_-12px_rgba(16,24,40,0.14)]"
        >
          <!-- LEFT CONTENT -->
          <div class="flex flex-col gap-8 px-12 z-10">
            <h2
              class="font-outfit font-semibold text-[36px] leading-[1.2] tracking-[0] uppercase text-[#0C111D]"
            >
              Ready to Take Your Business to the Next Level?
            </h2>

            <p class="paragraph-18 max-w-[500px]">
              Get expert advice and custom strategies for your Adelaide business
              needs. Book a free consultation today, and let's create something
              great together.
            </p>

            <ButtonPrimaryLight label="Book a Consultation" to="/" />
          </div>

          <!-- RIGHT VISUAL -->
          <div class="relative w-full h-full flex items-center justify-center">
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

/* Background Style */
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
