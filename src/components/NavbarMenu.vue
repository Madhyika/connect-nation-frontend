<template>
  <div
    class="fixed inset-0 z-40 bg-white transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
    :class="wrapperClass"
  >
    <div
      class="container mx-auto flex h-full flex-col items-center justify-end gap-36 py-16"
    >
      <nav class="ml-16 flex flex-col items-start gap-10">
        <router-link
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          @click="$emit('close-menu')"
          class="transform font-inter text-[32px] font-bold leading-[1] tracking-[-0.02em] text-[#CDD5DF] transition duration-300 ease-out hover:scale-110 hover:text-black"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <div class="flex w-full justify-between">
        <ButtonTertiaryDark label="Book a Consultation" to="/contact-us" />

        <div
          class="flex flex-col gap-2 font-inter text-[16px] font-medium leading-[1] text-[#98A2B3]"
        >
          <h6>General Inquiries</h6>
          <h6 class="text-black">admin@connectnation.com.au</h6>
        </div>

        <div class="flex flex-col gap-2">
          <h6
            class="font-inter text-[16px] font-medium leading-[1] text-[#98A2B3]"
          >
            General Inquiries
          </h6>
          <ul class="flex items-center gap-4">
            <li>
              <a
                href="#"
                aria-label="Close"
                class="text-black transition-colors duration-300 hover:text-[#98A2B3]"
              >
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                class="text-black transition-colors duration-300 hover:text-[#98A2B3]"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0zM7.5 7h4.8v2.5h.07c.67-1.25 2.3-2.57 4.73-2.57 5.05 0 6 3.32 6 7.63V24h-5v-7.8c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.02-3 4.1V24h-5z"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                class="text-black transition-colors duration-300 hover:text-[#98A2B3]"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M22 12a10 10 0 10-11.5 9.95v-7.04h-2.5V12h2.5V9.8c0-2.47 1.47-3.84 3.73-3.84 1.08 0 2.21.2 2.21.2v2.43h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.76l-.44 2.91h-2.32v7.04A10 10 0 0022 12z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import ButtonTertiaryDark from "../components/ButtonTertiaryDark.vue";

const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
});

const wrapperClass = computed(() =>
  props.open
    ? "opacity-100 translate-y-0"
    : "opacity-0 -translate-y-full pointer-events-none"
);

const menuItems = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/service" },
  { label: "Host Network", to: "/host-network" },
  { label: "About", to: "/about-us" },
  { label: "Contact", to: "/contact-us" },
  { label: "Blogs", to: "/blogs-insights" },
  { label: "Package Plans", to: "/packages" },
];
</script>
