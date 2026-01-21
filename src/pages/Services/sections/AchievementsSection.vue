<template>
  <section
    class="container mx-auto border-b border-b-[#CDD5DF] px-4 sm:px-6 lg:px-0 py-12"
  >
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-between items-center text-center sm:text-left"
    >
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="flex flex-col gap-4 items-center sm:items-start justify-center"
      >
        <div
          class="font-outfit font-semibold text-[48px] sm:text-[64px] leading-[100%] tracking-[-0.02em]"
        >
          {{ stat.value }}
        </div>
        <div class="paragraph-16 paragraph-dark text-sm sm:text-base">
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
