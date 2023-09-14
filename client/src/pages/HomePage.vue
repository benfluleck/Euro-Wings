<template>
  <div id="app">
    <div class="container">
      <p v-if="isLoading">App Loading. Please be patient</p>
      <p v-else-if="error && flights.length === 0" class="error">
        Error while fetching flight data. Please Check your server connection
      </p>
      <FlightForm
        v-else
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

  data() {
    return {
      origin: '',
      destination: '',
      flights: [],
      error: 'something',
      isLoading: false
    };
  },

  computed: {
    filteredFlights() {
      return filterFlights(this.flights, this.$route.query);
    }
  },

  mounted() {
    const { data: flights, isLoading, error } = useFetch('/api/v1/priceoffers');
    this.isLoading = isLoading;
    this.flights = flights;
    this.error = error;
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
      }
    }
  }
};
</script>

<style lang="scss">
.container {
  padding: 4rem;

  .error {
    color: var(--dangerColor);
  }
  p {
    font-size: 1rem;
  }

  @media (max-width: 680px) {
    padding: 1rem;
  }
}
</style>
