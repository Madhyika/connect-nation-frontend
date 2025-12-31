<template>
  <section class="bg-[#FAFAFA]">
    <div
      class="container mx-auto flex flex-col items-center gap-12 lg:gap-18 text-black"
    >
      <div class="grid w-full grid-cols-1 lg:grid-cols-2 items-center gap-6">
        <SectionHeading span1="Our" span2="Clients" />
        <p class="paragraph-20 paragraph-dark">
          Collaborate with the world’s top platforms and partners to deliver
          results that set new standards
        </p>
      </div>

      <div class="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-6 sm:px-0">
        <div
          v-for="client in clients"
          :key="client.alt"
          class="flex h-52 cursor-pointer items-center justify-center rounded-[5px] bg-white transition-shadow hover:shadow-2xl"
        >
          <img :src="client.src" :alt="client.alt" class="w-36" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Quotient from "../../../assets/img/logo/clients/quotient.svg";
import Segment from "../../../assets/img/logo/clients/segment.svg";
import Galileo from "../../../assets/img/logo/clients/galileo.svg";
import Lightbox from "../../../assets/img/logo/clients/lightbox.svg";
import SectionHeading from "../../../components/headings/SectionHeading.vue";

const clients = [
  { src: Quotient, alt: "Quotient" },
  { src: Segment, alt: "Segment" },
  { src: Galileo, alt: "Galileo" },
  { src: Lightbox, alt: "Lightbox" },
];
</script>
