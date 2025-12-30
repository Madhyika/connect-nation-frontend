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
          :class="[
            'transform font-inter text-[32px] font-bold leading-[1] tracking-[-0.02em] transition duration-300 ease-out',
            isActive(item.to)
              ? 'text-black scale-110'
              : 'text-[#CDD5DF] hover:scale-110 hover:text-black',
          ]"
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
            <!-- Social icons omitted for brevity -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import ButtonTertiaryDark from "../components/buttons/ButtonTertiaryDark.vue";

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

const route = useRoute();

const menuItems = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Host Network", to: "/tv-host" },
  { label: "About", to: "/about-us" },
  { label: "Contact", to: "/contact-us" },
  { label: "Blogs", to: "/blogs-insights" },
  { label: "Package Plans", to: "/packages" },
];

const isActive = (path) => route.path === path;

</script>
