<template>
  <div class="card-container">
    <FlightCardContent :header="origin" :content="getCurrentTime(departureTime)" />
    <FlightCardContent :header="departure" :content="getCurrentTime(returnTime)" />
    <FlightCardContent header="Duration" :content="duration + 'h'" is-small-font />
    <FlightCardContent header="Connection" content="Nonstop" is-small-font is-large-column />
    <FlightCardContent header="Flight from" :content="formatPrice(price)" />
  </div>
</template>

<script>
import FlightCardContent from '@components/FlightCardContent/FlightCardContent.vue';
import { getTime } from '@utils/utils';

export default {
  components: {
    FlightCardContent
  },
  props: {
    origin: {
      type: String,
      default: ''
    },
    departure: {
      type: String,
      default: ''
    },
    departureTime: {
      type: String,
      default: ''
    },
    returnTime: {
      type: String,
      default: ''
    },
    duration: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    }
  },

  methods: {
    getCurrentTime(date) {
      return getTime(date);
    },
    formatPrice(price) {
      return price + ' €';
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../FlightCard/_card.scss';
</style>
