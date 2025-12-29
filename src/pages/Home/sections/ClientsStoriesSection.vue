<template>
  <section
    style="
      background: linear-gradient(
        45deg,
        rgba(57, 160, 255, 0.8) 0%,
        rgba(143, 255, 133, 0.8) 100%
      );
    "
  >
    <div class="container mx-auto grid grid-cols-3 gap-12">
      <div class="flex flex-col gap-4">
        <SectionHeading
          span1="clients<br />"
          span2='<span style="color: #EAECF0;">Success Stories</span>'
        />
        <p class="paragraph-dark paragraph-20">
          Real words from the people we’ve partnered with honest feedback, and
          lasting impact.
        </p>
      </div>

      <div class="flex flex-col gap-4">
        <div>
          <img
            class="w-[395px] h-[421px] rounded-[8px] object-cover"
            :src="selectedClient.image"
            alt=""
          />
        </div>

        <div class="grid grid-cols-4 gap-4 justify-items-center">
          <img
            v-for="(client, index) in clients"
            :key="index"
            :src="client.image"
            @click="selectedClient = client"
            class="w-[91px] h-[91px] object-cover cursor-pointer transition-all duration-300"
            :class="{
              'rounded-full scale-105': selectedClient.image === client.image,
              'rounded-none opacity-70': selectedClient.image !== client.image,
            }"
            alt=""
          />
        </div>
      </div>

      <div class="flex flex-col gap-24">
        <div class="flex flex-col gap-8">
          <div class="flex justify-between items-center">
            <img class="w-[44px]" :src="selectedClient.logo" alt="" />
            <ul class="flex gap-1">
              <li v-for="n in selectedClient.rating" :key="n">
                <img src="../../../assets/img/icons/Star.svg" alt="" />
              </li>
            </ul>
          </div>
          <p
            class="font-inter font-medium italic text-[18px] leading-[30px] tracking-[0.03em] text-black"
          >
            {{ selectedClient.feedback }}
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <h1
            class="font-outfit font-medium text-[28px] leading-[100%] tracking-[0.03em] text-black"
          >
            {{ selectedClient.name }}
          </h1>
          <p
            class="font-inter font-medium text-[20px] leading-[100%] tracking-[0.03em] text-white"
          >
            {{ selectedClient.position }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "../../../components/SectionHeading.vue";
import { ref } from "vue";

import client1 from "../../../assets/img/clientStories/client1.png";
import client2 from "../../../assets/img/clientStories/client2.png";
import client3 from "../../../assets/img/clientStories/client3.png";
import client4 from "../../../assets/img/clientStories/client4.png";

import logo1 from "../../../assets/img/logo/fictionalCompany.png";

const clients = [
  {
    image: client1,
    logo: logo1,
    rating: 5,
    feedback:
      "They took our half-formed ideas and built a visual identity that felt premium, clear, and unmistakably us.",
    name: "Riley James",
    position: "Design Director at Sisyphus",
  },
  {
    image: client2,
    logo: logo1,
    rating: 4,
    feedback: "Amazing work and exceptional collaboration.",
    name: "Alex Morgan",
    position: "Marketing Lead at Nova Corp",
  },
  {
    image: client3,
    logo: logo1,
    rating: 5,
    feedback: "They helped us scale with creative solutions.",
    name: "Samantha Lee",
    position: "CEO at BrightTech",
  },
  {
    image: client4,
    logo: logo1,
    rating: 5,
    feedback: "Professional, fast, and highly creative.",
    name: "Jordan Smith",
    position: "Product Manager at Zenith",
  },
];

const selectedClient = ref(clients[0]);
</script>
