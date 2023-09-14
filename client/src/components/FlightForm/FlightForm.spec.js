import { mount } from '@vue/test-utils';
import FlightForm from './FlightForm.vue';
import { flightCities } from '@fixtures/flights';

const defaultProps = {
  destinationAirportOptions: flightCities,
  departureAirportOptions: flightCities
};

describe('FlightForm', () => {
  it('should render 2 select boxes', async () => {
    const wrapper = mount(FlightForm, {
      props: { ...defaultProps },
      global: { mocks: { $route: { query: { origin: '' } } } }
    });

    expect(wrapper.findAllComponents('.input-container')).toHaveLength(2);
    expect(wrapper.text()).toContain('Departure airport');
    expect(wrapper.text()).toContain('Destination airport');
  });

  it('should render option values', async () => {
    const wrapper = mount(FlightForm, {
      props: { ...defaultProps },
      global: { mocks: { $route: { query: { origin: '' } } } }
    });

    expect(wrapper.text()).toContain('FRA');
    expect(wrapper.text()).toContain('VCE');
    expect(wrapper.text()).toContain('ZAB');
    expect(wrapper.text()).toContain('ABJ');
  });
});
