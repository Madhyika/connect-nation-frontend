<template>
  <div
    class="bg-[#FAFAFA] gap-6 py-8 flex flex-col items-start sm:grid sm:grid-cols-[48px_4fr_3fr_3fr] sm:gap-12 sm:items-start"
  >
    <p
      class="font-outfit font-semibold text-[20px] leading-none text-[#D0D5DD] mb-2 sm:text-[24px] sm:leading-none sm:text-[#D0D5DD] sm:group-hover:text-black sm:transition-colors sm:duration-300"
    >
      {{ String(index + 1).padStart(2, "0") }}
    </p>

    <!-- Title + Desc -->
    <div class="flex flex-col gap-3 w-full">
      <h2
        class="font-outfit font-semibold text-left text-[18px] leading-[26px] uppercase text-[#0C111D] cursor-pointer sm:text-[22px] sm:leading-[30px] sm:uppercase sm:text-[#0C111D] sm:group-hover:underline sm:transition-all sm:duration-300"
      >
        {{ service.title }}
      </h2>

      <p class="paragraph-16 paragraph-dark text-justify text-sm">
        {{ service.description }}
      </p>
    </div>

    <!-- Features -->
    <ul class="grid grid-cols-1 gap-4 w-full md:p-2">
      <li
        v-for="feature in service.features"
        :key="feature"
        class="flex items-center gap-3 font-inter font-semibold text-[14px] leading-none tracking-[0.04em] uppercase text-[#0C111D]"
      >
        <span
          class="w-2.5 h-2.5 rounded-full bg-[#0C111D] opacity-50 shrink-0"
        ></span>
        <span>{{ feature }}</span>
      </li>
    </ul>

    <!-- Image -->
    <div class="w-full mt-4 flex items-center justify-center">
      <img
        class="w-full h-auto max-h-[250px] object-cover rounded-[7px]"
        :src="service.image"
        :alt="service.title"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  service: Object,
  index: Number,
});
</script>
