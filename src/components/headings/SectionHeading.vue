<template>
  <h1 class="section-heading">
    <span v-html="span1"></span> <span v-html="span2"></span>
  </h1>
</template>

<script setup>
const props = defineProps({
  span1: {
    type: String,
    required: true,
  },
  span2: {
    type: String,
    required: true,
  },
});
</script>
