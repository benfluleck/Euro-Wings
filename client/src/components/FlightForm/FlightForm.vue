<template>
  <form id="form" @submit.prevent="handleSubmit">
    <div class="row">
      <SelectTextInput
        :selected-options="departureAirportOptions"
        label="Departure airport"
        name="origin"
        :value="form.origin"
        @change="selectChanged"
      />
      <SelectTextInput
        :selected-options="destinationAirportOptions"
        label="Destination airport"
        name="destination"
        :value="form.destination"
        @change="selectChanged"
      />
      <button class="button" type="submit">Search for flight</button>
    </div>
  </form>
</template>

<script>
import SelectTextInput from '@components/SelectTextInput/SelectTextInput.vue';

export default {
  components: {
    SelectTextInput
  },
  props: {
    departureAirportOptions: {
      type: Array,
      default: () => []
    },
    departureValue: {
      type: String,
      default: ''
    },

    originValue: {
      type: String,
      default: ''
    },

    destinationAirportOptions: {
      type: Array,
      default: () => []
    }
  },
  emits: { 'handle-form-submit': null },
  data() {
    return {
      form: {
        origin: '',
        destination: ''
      }
    };
  },

  created() {
    this.form.origin = this.$route.query.origin;
    this.form.destination = this.$route.query.destination;
  },

  methods: {
    selectChanged({ value, name }) {
      if (name) {
        this.form[name] = value;
      }
    },
    handleSubmit() {
      this.$emit('handle-form-submit', this.form);
    }
  }
};
</script>

<style lang="scss">
@import '../FlightForm/_form.scss';
</style>
