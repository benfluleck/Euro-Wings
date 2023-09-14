<template>
  <div class="input-container">
    <label :for="modelValue"> {{ label }} </label>
    <input
      v-model="theDate"
      disabled
      type="date"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
@import '../../styles/_input.scss';
</style>
