<template>
  <button @click="navigate" class="button-primary button-primary-dark">
    <span>{{ label }}</span>
    <img src="../../assets/img/icons/ArrowRight.svg" alt="" />
  </button>
</template>

<script setup>
import { useRouter } from "vue-router";
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    default: "/",
  },
});
const router = useRouter();

function navigate() {
  router.push(props.to);
}
</script>
