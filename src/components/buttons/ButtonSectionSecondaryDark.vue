<template>
  <button
    @click="navigate"
    class="section-button-secondary section-button-secondary-dark w-fit"
  >
    <span class="font-medium leading-[1] tracking-[0.02em] font-outfit">
      {{ label }}
    </span>
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
  // Open external links in a new tab
  if (props.to.startsWith("http")) {
    window.open(props.to, "_blank");
  } else {
    // Internal route
    router.push(props.to);
  }
}
</script>
