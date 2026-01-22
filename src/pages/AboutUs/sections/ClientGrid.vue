<template>
  <section class="bg-[#FAFAFA]">
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
  </section>
</template>

<script setup>
import Boujee from "../../../assets/img/logo/clients/boujee.svg";
import Achievers from "../../../assets/img/logo/clients/achievers.svg";
import Mcquel from "../../../assets/img/logo/clients/mcquel.svg";
import Danphe from "../../../assets/img/logo/clients/danphe.svg";
import Royalhealth from "../../../assets/img/logo/clients/royalhealth.svg";
import Zeroone from "../../../assets/img/logo/clients/zeroone.svg";

const clients = [
  { src: Boujee, alt: "Boujee" },
  { src: Achievers, alt: "Achievers" },
  { src: Mcquel, alt: "Mcquel" },
  { src: Danphe, alt: "Danphe" },
  { src: Royalhealth, alt: "Royalhealth" },
  { src: Zeroone, alt: "Zeroone" },
];
</script>
