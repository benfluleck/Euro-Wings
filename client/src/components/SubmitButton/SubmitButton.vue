<template>
  <button class="button">
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: [String, Boolean],
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.button {
  padding: 16px;
  background: var(--backgroundWhite);
  border: 2px solid var(--buttonColor);
  border-radius: 3px;
  color: var(--buttonColor);
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
}

.button:hover {
  background: var(--buttonColor);
  color: var(--backgroundWhite);
}
</style>
