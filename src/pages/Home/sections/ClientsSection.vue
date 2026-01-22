<template>
  <section class="bg-[#FAFAFA]">
    <div class="container flex flex-col gap-5">
      <div
        class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-between"
      >
        <SectionHeading span1="Our" span2="Clients" />
        <div class="flex flex-col gap-5 md:gap-8 pt-2 md:pt-0 lg:pt-0">
          <p class="paragraph-20 paragraph-dark">
            Collaborate with Adelaide businesses and leading global platforms to
            deliver results that set new standards
          </p>
        </div>
      </div>

      <!-- Clients -->
      <div class="w-full overflow-hidden">
        <div
          class="flex gap-5 md:pb-[87px] overflow-x-auto md:px-6 scroll-smooth no-scrollbar lg:justify-center"
        >
          <div
            v-for="client in clients"
            :key="client.alt"
            class="flex h-auto min-w-[200px] items-center justify-center rounded-[5px] bg-white transition-shadow hover:shadow-2xl"
          >
            <img
              :src="client.src"
              :alt="client.alt"
              class="w-auto object-contain p-[40px]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Boujee from "../../../assets/img/logo/clients/boujee.svg";
import Achievers from "../../../assets/img/logo/clients/achievers.svg";
import Mcquel from "../../../assets/img/logo/clients/mcquel.svg";
import Danphe from "../../../assets/img/logo/clients/danphe.svg";
import Royalhealth from "../../../assets/img/logo/clients/royalhealth.svg";
import Zeroone from "../../../assets/img/logo/clients/zeroone.svg";
import SectionHeading from "../../../components/headings/SectionHeading.vue";

const clients = [
  { src: Boujee, alt: "Boujee" },
  { src: Achievers, alt: "Achievers" },
  { src: Mcquel, alt: "Mcquel" },
  { src: Danphe, alt: "Danphe" },
  { src: Royalhealth, alt: "Royalhealth" },
  { src: Zeroone, alt: "Zeroone" },
];
</script>

<style scoped>
/* Hide scrollbar but keep scroll functionality */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
