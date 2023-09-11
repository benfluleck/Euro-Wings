<template>
  <div class="card-content" :class="{ 'large-content': isLargeColumn }">
    <div class="header">{{ header }}</div>
    <div class="content" :class="{ 'small-font': isSmallFont }">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isSmallFont: {
      type: Boolean,
      default: false
    },
    isLargeColumn: {
      type: Boolean,
      default: false
    },
    header: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.card-content {
  .header {
    font-size: 0.8rem;
  }

  .content {
    font-size: 1.4rem;
    font-weight: 700;
  }
}

.large-content {
  justify-self: flex-start;
}

@media (max-width: 680px) {
  .large-content {
    justify-self: auto;
  }
}

.small-font {
  font-size: 1rem !important;
}
</style>
