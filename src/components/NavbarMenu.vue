<template>
  <div
    class="fixed inset-0 z-40 bg-white transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
    :class="wrapperClass"
  >
    <div
      class="container mx-auto flex h-full flex-col items-center justify-end gap-12  py-10 md:py-16"
    >
      <div class="relative flex w-full items-center justify-center">
        <div
          class="absolute left-0 bottom-0 hidden h-[300px] w-[400px] overflow-hidden rounded-[7px] xl:block"
        >
          <transition name="fade">
            <img
              v-if="activeImage"
              :key="activeImage"
              :src="activeImage"
              alt="Preview"
              class="h-full w-full object-cover transition-transform duration-500"
            />
          </transition>
        </div>

        <nav class="flex flex-col justify-center gap-2 md:gap-6">
          <router-link
            v-for="item in menuItems"
            :key="item.to"
            :to="item.to"
            @click="$emit('close-menu')"
            @mouseenter="hoveredItem = item"
            @mouseleave="hoveredItem = null"
            :class="[
              'transform font-inter text-[24px] md:text-[32px] font-bold leading-[1] tracking-[-0.02em] transition duration-300 ease-out',
              isActive(item.to)
                ? 'text-black scale-110'
                : 'text-[#CDD5DF] hover:scale-110 hover:text-black',
            ]"
          >
            {{ item.label }}
          </router-link>
        </nav>
      </div>

      <div
        class="flex w-full flex-col md:flex-row items-center md:items-start gap-10 md:gap-0 justify-between"
      >
        <ButtonTertiaryDark label="Book a Consultation" to="/contact-us" />
        <div
          class="flex flex-col gap-4 text-center md:text-left font-inter text-[14px] md:text-[16px] font-medium leading-[1] text-[#98A2B3]"
        >
          <h6>General Inquiries</h6>
          <h6 class="text-black">admin@connectnation.com.au</h6>
        </div>
        <div class="flex flex-col gap-4 text-center md:text-left">
          <h6
            class="font-inter text-[14px] md:text-[16px] font-medium leading-[1] text-[#98A2B3]"
          >
            Social
          </h6>
          <ul class="flex items-center gap-3">
            <li v-for="social in socialLinks" :key="social.name">
              <a
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="social.name"
                class="inline-flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-[1px] hover:scale-105"
              >
                <img
                  :src="social.icon"
                  :alt="social.name"
                  class="transition-opacity duration-300 hover:opacity-80"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import ButtonTertiaryDark from "../components/buttons/ButtonTertiaryDark.vue";
import Img from "../assets/img/home/banner.png";
import XIcon from "../assets/img/icons/X.svg";
import LinkedinIcon from "../assets/img/icons/Linkedin.svg";
import FacebookIcon from "../assets/img/icons/fb.svg";
import { watch, onMounted, onUnmounted } from "vue";

onMounted(() => {
  watch(
    () => props.open,
    (isOpen) => {
      if (typeof document === "undefined") return;

      document.body.style.overflow = isOpen ? "hidden" : "";
    },
    { immediate: true }
  );
});

onUnmounted(() => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
  }
});

const socialLinks = [
  {
    name: "X",
    url: "#",
    icon: XIcon,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: LinkedinIcon,
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: FacebookIcon,
  },
];

const props = defineProps({
  open: { type: Boolean, required: true },
});

const route = useRoute();
const hoveredItem = ref(null);

const wrapperClass = computed(() =>
  props.open
    ? "opacity-100 translate-y-0"
    : "opacity-0 -translate-y-full pointer-events-none"
);

const menuItems = [
  { label: "Work", to: "/work", image: Img },
  { label: "Services", to: "/services", image: Img },
  { label: "Host Network", to: "/tv-host", image: Img },
  { label: "About", to: "/about-us", image: Img },
  { label: "Contact", to: "/contact-us", image: Img },
  { label: "Blogs", to: "/blogs-insights", image: Img },
  { label: "Package Plans", to: "/packages", image: Img },
];

const activeItem = computed(() =>
  menuItems.find((item) => item.to === route.path)
);

const activeImage = computed(() => {
  if (hoveredItem.value) {
    return hoveredItem.value.image;
  }
  return activeItem.value ? activeItem.value.image : null;
});

const isActive = (path) => route.path === path;
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
