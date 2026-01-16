<template>
  <section class="bg-[#FAFAFA] py-16">
    <div class="container mx-auto flex flex-col gap-12 text-black">
      <!-- Heading -->
      <div class="grid w-full grid-cols-1 lg:grid-cols-2 items-center gap-6">
        <SectionHeading span1="Our" span2="Clients" />
        <p class="paragraph-20 paragraph-dark">
          Collaborate with Adelaide businesses and leading global platforms to
          deliver results that set new standards
        </p>
      </div>

      <!-- Clients -->
      <div class="w-full overflow-hidden">
        <div
          class="flex gap-5 overflow-x-auto px-6 sm:px-0 scroll-smooth no-scrollbar lg:justify-center"
        >
          <div
            v-for="client in clients"
            :key="client.alt"
            class="flex h-auto min-w-[200px] items-center justify-center rounded-[5px] bg-white transition-shadow hover:shadow-2xl"
          >
            <img
              :src="client.src"
              :alt="client.alt"
              class="w-32 object-contain py-4"
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
