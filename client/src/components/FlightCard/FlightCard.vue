<template>
  <div class="card-container">
    <FlightCardContent header="3LC" content="08:00" />
    <FlightCardContent header="3LC" content="09:00" />
    <FlightCardContent header="Duration" content="09:45h" is-small-font />
    <FlightCardContent header="Connection" content="Nonstop" is-small-font is-large-column />
    <FlightCardContent header="Flight from" content="147,99 €" />
  </div>
</template>

<script>
import FlightCardContent from '@components/FlightCardContent/FlightCardContent';

export default {
  components: {
    FlightCardContent
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  margin: 58px 0;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0px 2px 18px -4px rgba(0, 0, 0, 0.75);
  background-color: var(--backgroundWhite);
  display: grid;
  grid-template-columns: repeat(3, 75px) auto 150px;
  grid-gap: 25px;
}

@media (max-width: 680px) {
  .card-container {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
