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
  active: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();

function navigate() {
  router.push(props.to);
}
</script>

<template>
  <button
    @click="navigate"
    class="button-secondary-hover-line button-secondary-black flex items-center"
    :class="{ 'is-active': active }"
  >
    <span
      class="button-title flex-1 w-full font-medium leading-[1] tracking-[0.02em] font-outfit text-left"
    >
      {{ label }}
    </span>

    <img
      src="../../assets/img/icons/ArrowRight.svg"
      alt="Explore Blog"
      class="ml-4"
    />
  </button>
</template>
