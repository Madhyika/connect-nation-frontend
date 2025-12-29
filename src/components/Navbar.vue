<template>
  <header class="h-24 fixed top-0 left-0 right-0 z-100 bg-transparent">
    <div class="container flex justify-between items-center mx-auto py-4 z-100">
      <!-- Logo -->
      <router-link to="/" class="w-24 relative">
        <img
          src="../assets/img/logo/logo.png"
          alt="logo"
          class="w-full h-full object-contain scale-150 transition-all duration-300"
          :class="{
            'filter brightness-0 invert': !menuOpen,
          }"
        />
      </router-link>

      <!-- Location Text -->
      <div
        class="font-medium font-outfit text-base leading-[1.75rem] tracking-[0.03em] text-center w-full transition-colors duration-300"
        :class="menuOpen ? 'text-black' : 'text-white'"
      >
        Adelaide, Australia
        <br />
        [ 07:30:12 PM ]
      </div>

      <!-- Menu Button -->
      <button
        @click="toggleMenu"
        class="flex items-center justify-center gap-2 px-4 py-2 rounded-sm cursor-pointer z-50 transition-colors duration-300"
        :class="menuOpen ? 'bg-[#F2F4F7]' : 'bg-white'"
      >
        <span class="font-medium text-md font-inter">MENU</span>
        <img
          :src="menuOpen ? CrossIcon : MenuHamburger"
          alt="menu"
          class="object-contain w-5 h-5 transition-transform duration-300"
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
import { ref } from "vue";
import NavbarMenu from "../components/NavbarMenu.vue";

import MenuHamburger from "../assets/img/icons/MenuHamburger.svg";
import CrossIcon from "../assets/img/icons/Cross.svg";

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>
