<template>
  <div class="input-container">
    <label :for="name"> {{ label }} </label>
    <input
      v-bind="$attrs"
      type="text"
      :name="name"
      :value="modelValue"
      :placeholder="label"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
@import '../../styles/_input.scss';
</style>
