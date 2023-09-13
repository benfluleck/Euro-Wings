<template>
  <button class="button" @click.prevent="submit">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  emits: { submit: null }
};
</script>

<style scoped>
.button {
  background: var(--buttonColor);
  border: 1px solid var(--buttonColor);
  border-radius: 8px;
  padding: 0 32px;
  color: var(--backgroundWhite);
  font-weight: 700;
  letter-spacing: 0.2px;
  line-height: 56px;
  cursor: pointer;
  transition: 0.3s;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 2;

  @media (max-width: 630px) {
    flex: 1;
  }
}

.button:hover {
  background: var(--buttonColor);
  color: var(--backgroundWhite);
}
</style>
