<template>
  <section class="container mx-auto border-b border-b-[#CDD5DF]">
    <div class="grid grid-cols-4 justify-between items-center">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="flex flex-col gap-4 items-center justify-center"
      >
        <div
          class="font-outfit font-semibold text-[64px] leading-[100%] tracking-[-0.02em] align-middle"
        >
          {{ stat.value }}
        </div>
        <div class="paragraph-16 paragraph-dark">
          {{ stat.label }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: "123+", label: "BUSINESSES WEB SUPPORT" },
  { value: "02", label: "COUNTRIES WE WORKING" },
  { value: "35+", label: "SUCCESSFUL PROJECTS" },
  { value: "2M+", label: "REACHED OVER $8 MILION" },
];
</script>
