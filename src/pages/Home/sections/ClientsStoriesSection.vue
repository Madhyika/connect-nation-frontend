<template>
  <section :style="backgroundStyle">
    <div class="container mx-auto grid grid-cols-3 gap-12">
      <!-- LEFT CONTENT -->
      <div class="flex flex-col gap-4">
        <SectionHeading
          span1="clients<br />"
          span2='<span style="color: #EAECF0;">Success Stories</span>'
        />
        <p class="paragraph-dark paragraph-20">
          Real feedback from Adelaide clients we've partnered with: honest
          results, genuine feedback, and lasting impact.
        </p>
      </div>

      <!-- IMAGES -->
      <div class="flex flex-col gap-4">
        <transition name="fade" mode="out-in">
          <img
            :key="selectedClient.image"
            class="w-[395px] h-[421px] rounded-[8px] object-cover"
            :src="selectedClient.image"
            alt="Client"
          />
        </transition>

        <div class="grid grid-cols-4 gap-4 justify-items-center">
          <img
            v-for="(client, index) in clients"
            :key="index"
            :src="client.image"
            @click="selectedClient = client"
            class="w-[91px] h-[91px] object-cover cursor-pointer transition-all duration-300"
            :class="{
              'rounded-full scale-105': selectedClient.image === client.image,
              'rounded-none opacity-70 grayscale':
                selectedClient.image !== client.image,
            }"
            alt="Client thumbnail"
          />
        </div>
      </div>

      <!-- FEEDBACK -->
      <div class="flex flex-col h-full gap-24">
        <transition name="fade" mode="out-in">
          <div
            class="flex flex-col h-[70%] justify-between"
            :key="selectedClient.feedback"
          >
            <div class="flex flex-col gap-8">
              <div class="flex justify-between items-center">
                <img class="w-[44px]" :src="selectedClient.logo" alt="Logo" />
                <ul class="flex gap-1">
                  <li v-for="n in selectedClient.rating" :key="n">
                    <img src="../../../assets/img/icons/Star.svg" alt="Star" />
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
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import SectionHeading from "../../../components/headings/SectionHeading.vue";

/* Images */
import client1 from "../../../assets/img/clientStories/client1.png";
import client2 from "../../../assets/img/clientStories/client2.png";
import client3 from "../../../assets/img/clientStories/client3.png";
import client4 from "../../../assets/img/clientStories/client4.png";

import logo1 from "../../../assets/img/logo/fictionalCompany.png";
import bgImage from "../../../assets/img/other/client-success-bg.png";

/* Props */
const props = defineProps({
  variant: {
    type: String,
    default: "light", // "light" | "blue"
  },
});

/* Background Style */
const backgroundStyle = computed(() => {
  if (props.variant === "blue") {
    return {
      background: `linear-gradient(
        45deg,
        rgba(57, 160, 255, 0.8) 0%,
        rgba(143, 255, 133, 0.8) 100%
      )`,
    };
  }

  return {
    background: `
      linear-gradient(
        45deg,
        rgba(57, 160, 255, 0.06) 0%,
        rgba(143, 255, 133, 0.06) 100%
      ),
      url(${bgImage})
    `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left bottom",
  };
});

/* Data */
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
