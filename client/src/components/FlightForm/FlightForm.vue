<template>
  <div id="home">
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
    </div>
    <div class="row">
      <DateInput :label="`Outgoing flight`" />
      <DateInput :label="`Return flight`" />
      <FormButton label="Search for flight" @click="handleSubmit" />
    </div>
  </div>
</template>

<script>
import SelectTextInput from '@components/SelectTextInput/SelectTextInput';
import DateInput from '@components/DateInput/DateInput';
import FormButton from '@components/FormButton/FormButton';

export default {
  components: {
    SelectTextInput,
    DateInput,
    FormButton
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
  emits: { handleFormSubmit: null },
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
      console.log(name, value);
      if (name) {
        this.form[name] = value;
      }
    },
    handleSubmit() {
      this.$emit('handleFormSubmit', this.form);
    }
  }
};
</script>

<style lang="scss">
@import '../FlightForm/_form.scss';
</style>
