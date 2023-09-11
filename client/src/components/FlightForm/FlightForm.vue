<template>
  <form id="home">
    <div class="row">
      <TextInput v-model="event.depatureAirport" name="depatureAirport" label="Depature airport" />
      <TextInput v-model="event.destinationAirport" label="Destination airport" />
    </div>
    <div class="row">
      <DateInput v-model="event.outDate" :label="`Outgoing flight`" />
      <DateInput v-model="event.returnDate" :label="`Return flight`" />
      <SubmitButton :label="`Submit Flights`" />
    </div>
    <pre>{{ event }}</pre>
  </form>
</template>

<script>
import TextInput from '@components/TextInput/TextInput';
import DateInput from '@components/DateInput/DateInput';
import SubmitButton from '@components/SubmitButton/SubmitButton.vue';

export default {
  components: {
    TextInput,
    DateInput,
    SubmitButton
  },
  data() {
    return {
      event: {
        destinationAirport: '',
        depatureAirport: '',
        outDate: '',
        returnDate: ''
      }
    };
  }
};
</script>

<style lang="scss">
#home {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  .row {
    display: flex;
    gap: 12px;
    margin-top: 12px;
    flex-flow: row nowrap;
    width: 100%;

    @media (max-width: 560px) {
      flex-wrap: wrap;
    }
  }
}

.container {
  padding: 4rem;
}
</style>
