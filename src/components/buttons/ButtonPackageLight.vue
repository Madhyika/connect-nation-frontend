<template>
  <button @click="navigate" class="button-package button-package-light">
    <span>{{ label }}</span>
    <img src="../../assets/img/icons/ArrowRight.svg" :alt="`Go To ${label}`" />
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
