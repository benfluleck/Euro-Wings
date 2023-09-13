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
@import '../FlightCardContent/_cardcontent.scss';
</style>
