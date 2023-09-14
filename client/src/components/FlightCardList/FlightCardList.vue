<template>
  <section>
    <FlightCard
      v-for="flight in flights"
      :key="flight.uuid"
      :origin="flight.origin"
      :departure="flight.destination"
      :departure-time="flight.departureDate"
      :return-time="flight.returnDate"
      :duration="flight.duration"
      :price="flight.price.amount"
    />
  </section>
</template>

<script>
import FlightCard from '../FlightCard/FlightCard.vue';

export default {
  components: { FlightCard },
  props: {
    flights: {
      type: Array,
      required: true
    }
  }
};
</script>
