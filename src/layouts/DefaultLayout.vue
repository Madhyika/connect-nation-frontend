<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />

    <main>
      <router-view />
    </main>

    <FooterSection />
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import FooterSection from "../components/Footer.vue";
</script>
