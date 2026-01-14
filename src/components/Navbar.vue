<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all ease-in-out duration-400"
    :class="[isScrolled ? 'bg-white shadow-sm' : 'bg-transparent']"
  >
    <div class="container mx-auto flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="relative w-24">
        <img
          src="../assets/img/logo/logo.png"
          alt="logo"
          class="w-full h-full object-contain scale-150 transition-all duration-300"
          :class="logoClass"
        />
      </router-link>

      <!-- Center Text -->
      <div
        class="hidden md:block w-full text-center font-outfit font-medium text-base leading-[1.75rem] tracking-[0.03em] transition-colors duration-300"
        :class="textClass"
      >
        Adelaide, Australia
        <br />
        [ {{ time }} ]
      </div>

      <!-- Menu Button -->
      <button
        @click="toggleMenu"
        class="z-50 flex cursor-pointer items-center justify-center gap-2 rounded-sm px-4 py-2 transition-colors duration-300"
        :class="buttonClass"
      >
        <span class="font-inter font-medium text-md">MENU</span>
        <img
          :src="menuIcon"
          alt="menu"
          class="h-5 w-5 object-contain transition-transform duration-300"
        />
      </button>
    </div>
  </header>

  <!-- Fullscreen Menu -->
  <NavbarMenu
    :open="menuOpen"
    @close-menu="menuOpen = false"
    class="fixed inset-0 z-40"
  />
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import NavbarMenu from "../components/NavbarMenu.vue";

import MenuHamburger from "../assets/img/icons/MenuHamburger.svg";
import CrossIcon from "../assets/img/icons/Cross.svg";

/* --------------------
   ROUTE
-------------------- */
const route = useRoute();

/* --------------------
   STATE
-------------------- */
const menuOpen = ref(false);
const time = ref("");
const scrolled = ref(false);

/* --------------------
   TIME FORMAT
-------------------- */
const formatter = new Intl.DateTimeFormat("en-AU", {
  timeZone: "Australia/Adelaide",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

let timer;

/* --------------------
   FUNCTIONS
-------------------- */
const updateTime = () => {
  time.value = formatter.format(new Date());
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

/* --------------------
   LIFECYCLE
-------------------- */
onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  clearInterval(timer);
  window.removeEventListener("scroll", handleScroll);
});

/* --------------------
   WRAPPED SCROLL LOGIC
   (NO TRANSITION CHANGE)
-------------------- */
const isScrolled = computed(() => {
  return (
    scrolled.value ||
    route.path === "/blogs-insights" ||
    route.path === "/blog-insights/how-collaboration-makes-us-better-designers"
  );
});

/* --------------------
   COMPUTED STYLES
-------------------- */
const logoClass = computed(() => ({
  "filter brightness-0 invert": !menuOpen.value && !isScrolled.value,
}));

const textClass = computed(() =>
  menuOpen.value || isScrolled.value ? "text-black" : "text-white"
);

const buttonClass = computed(() =>
  menuOpen.value || isScrolled.value ? "bg-[#F2F4F7]" : "bg-white"
);

const menuIcon = computed(() => (menuOpen.value ? CrossIcon : MenuHamburger));
</script>
