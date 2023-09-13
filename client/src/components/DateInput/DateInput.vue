<template>
  <div class="input-container">
    <label> {{ label }} </label>
    <input type="date" @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
@import '../../styles/_input.scss';
</style>
