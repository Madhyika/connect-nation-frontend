<template>
  <section class="bg-[#FAFAFA]">
    <div class="container mx-auto text-black flex flex-col items-center gap-12">
      <div class="grid grid-cols-2 gap-6 w-full items-center">
        <SectionHeading span1="Our" span2="Clients" />
        <p class="paragraph-20 paragraph-dark">
          Collaborate with the world’s top platforms and partners to deliver
          results that set new standards
        </p>
      </div>

      <div class="grid grid-cols-4 gap-5 w-full h-52">
        <div
          v-for="(client, index) in clients"
          :key="index"
          class="bg-white rounded-[5px] hover:shadow-2xl transition-shadow cursor-pointer flex justify-center items-center"
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
import SectionHeading from "../../../components/SectionHeading.vue";

const clients = [
  { src: Quotient, alt: "Quotient" },
  { src: Segment, alt: "Segment" },
  { src: Galileo, alt: "Galileo" },
  { src: Lightbox, alt: "Lightbox" },
];
</script>
