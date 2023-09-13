<template>
  <div id="app">
    <div class="container">
      <FlightForm
        v-if="flights"
        :origin-value="origin"
        :destination-value="destination"
        :departure-airport-options="getCities(flights, 'origin')"
        :destination-airport-options="getCities(flights, 'destination')"
        @handle-form-submit="handleSubmit"
      />
      <FlightCardList v-if="filteredFlights.length" :flights="filteredFlights" />
    </div>
  </div>
</template>

<script>
import { useFetch, filterFlights } from '@utils/utils';
import FlightForm from '@components/FlightForm/FlightForm.vue';
import FlightCardList from '@components/FlightCardList/FlightCardList.vue';

export default {
  components: {
    FlightForm,
    FlightCardList
  },

  setup() {
    const { data: flights, isLoading, error } = useFetch('/api/v1/priceoffers');

    return { flights, isLoading };
  },

  data() {
    return {
      filteredFlights: [],
      origin: '',
      destination: ''
    };
  },

  methods: {
    getCities(data, key) {
      return [...new Set(data.map((flight) => flight[key]))];
    },

    handleSubmit(form) {
      if (form) {
        this.$router.replace({
          query: {
            ...this.$route.query,
            ...form
          }
        });
        this.filteredFlights = filterFlights(this.flights, form);
      }
    }
  }
};
</script>

<style lang="scss">
.container {
  padding: 4rem;

  @media (max-width: 680px) {
    padding: 1rem;
  }
}
</style>
