<template>
  <div v-if="blog" class="flex flex-col justify-center gap-7">
    <!-- Text Content -->
    <div class="flex flex-col justify-center gap-5 lg:w-2/3">
      <!-- Category -->
      <p
        class="flex items-center gap-2 text-[#56BEB7] font-medium text-base tracking-widest"
      >
        <span class="bg-[#56BEB7] w-2 h-2 inline-block rounded-full"></span>
        <span>{{ blog.category }}</span>
      </p>

      <!-- Title -->
      <h1
        class="font-outfit font-medium text-4xl leading-[53px] text-[#101828]"
      >
        {{ blog.title }}
      </h1>

      <!-- Description -->
      <p
        class="font-inter font-normal text-lg leading-7 text-[#475467] tracking-[0.02em]"
      >
        {{ blog.description }}
      </p>
    </div>

    <!-- Blog Image -->
    <img
      :src="'/blogs/' + blog.image"
      alt="blog image"
      class="w-full h-[60vh] object-cover rounded-2xl"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  blog: String,
});


</script>
