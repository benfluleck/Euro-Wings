<template>
  <div class="input-container">
    <label :for="name"> {{ label }} </label>
    <select
      v-if="selectedOptions.length"
      :id="name"
      :name="name"
      :value="value"
      @change="
        $emit('change', {
          value: $event.target.value,
          name: $event.target.name
        })
      "
    >
      <option value="">====Please select a {{ label }}=====</option>
      <option v-for="option in selectedOptions" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    selectedOptions: {
      type: Array,
      default: () => []
    }
  },
  emits: { change: null }
};
</script>

<style scoped>
@import '../../styles/_input.scss';
</style>
