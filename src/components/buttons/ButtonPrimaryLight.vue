<template>
  <button
    :type="props.to ? 'button' : 'submit'"
    @click="props.to && navigate()"
    class="button-primary button-primary-light"
  >
    <span>{{ label }}</span>
    <span class="icon">
      <img src="../../assets/img/icons/ArrowRight.svg" alt="Arrow" />
    </span>
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
