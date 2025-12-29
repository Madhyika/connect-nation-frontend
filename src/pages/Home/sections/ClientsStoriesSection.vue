<template>
  <section
    style="
      background: linear-gradient(
        45deg,
        rgba(57, 160, 255, 0.8) 0%,
        rgba(143, 255, 133, 0.8) 100%
      );
    "
    class=""
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
            :src="selectedImage"
            alt=""
          />
        </div>

        <div class="grid grid-cols-4 gap-6 justify-items-center">
          <img
            v-for="(img, index) in images"
            :key="index"
            :src="img"
            @click="selectedImage = img"
            class="w-[91px] h-[91px] object-cover cursor-pointer transition-all duration-300"
            :class="{
              'rounded-full scale-105': selectedImage === img,
              'rounded-none opacity-70': selectedImage !== img,
            }"
            alt=""
          />
        </div>
      </div>
      <div class="flex flex-col gap-24">
        <div class="flex flex-col gap-8">
          <div class="flex justify-between items-center">
            <img
              class="w-[44px]"
              src="../../../assets/img/logo/fictionalCompany.png"
              alt=""
            />
            <ul class="flex gap-1">
              <li><img src="../../../assets/img/icons/Star.svg" alt="" /></li>
              <li><img src="../../../assets/img/icons/Star.svg" alt="" /></li>
              <li><img src="../../../assets/img/icons/Star.svg" alt="" /></li>
              <li><img src="../../../assets/img/icons/Star.svg" alt="" /></li>
              <li><img src="../../../assets/img/icons/Star.svg" alt="" /></li>
            </ul>
          </div>
          <p
            class="font-inter font-medium italic text-[18px] leading-[30px] tracking-[0.03em] text-black"
          >
            They took our half-formed ideas and built a visual identity that
            felt premium, clear, and unmistakably us.
          </p>
        </div>
        <div class="flex flex-col gap-4">
          <h1
            class="font-outfit font-medium text-[28px] leading-[100%] tracking-[0.03em] text-black"
          >
            Riley James
          </h1>
          <p
            class="font-inter font-medium text-[20px] leading-[100%] tracking-[0.03em] text-white"
          >
            Design Director at Sisyphus
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

const images = [client1, client2, client3, client4];

const selectedImage = ref(images[0]);
</script>
