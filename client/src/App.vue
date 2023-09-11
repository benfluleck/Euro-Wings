<template>
  <div id="app">
    <div class="container">
      <FlightForm />
      <FlightCard />
    </div>

    {{ flights }}
  </div>
</template>

<script setup>
import FlightCard from '@components/FlightCard/FlightCard.vue';
import FlightForm from '@components/FlightForm/FlightForm.vue';
import { useFetch } from '@utils/useFetch';

const { data: flights, isLoading } = useFetch('/api/v1/priceoffers');
</script>

<style lang="scss">
.container {
  padding: 4rem;

  @media (max-width: 680px) {
    padding: 1rem;
  }
}
</style>
