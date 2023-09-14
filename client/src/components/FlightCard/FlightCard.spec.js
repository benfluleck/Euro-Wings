import { mount } from '@vue/test-utils';
import FlightCard from './FlightCard.vue';

const defaultProps = {
  origin: 'NGR',
  departure: 'BEN',
  departureTime: '2023-09-18T09:30:51.01',
  returnTime: '2023-09-18T10:30:51.01',
  duration: '1',
  price: '140'
};

describe('FlightCard', () => {
  it('should render the origin and departure content', async () => {
    const wrapper = mount(FlightCard, {
      props: { ...defaultProps }
    });

    expect(wrapper.text()).toContain('NGR');
    expect(wrapper.text()).toContain('BEN');
  });

  it('should render the time duration content', async () => {
    const wrapper = mount(FlightCard, {
      props: { ...defaultProps }
    });

    expect(wrapper.text()).toContain('9:30');
    expect(wrapper.text()).toContain('10:30');
  });

  it('should render the time duration content column', async () => {
    const wrapper = mount(FlightCard, {
      props: { ...defaultProps }
    });

    expect(wrapper.text()).toContain('Duration');
    expect(wrapper.text()).toContain('1h');
  });

  it('should render the flight cost column', async () => {
    const wrapper = mount(FlightCard, {
      props: { ...defaultProps }
    });

    expect(wrapper.text()).toContain('Flight from');
    expect(wrapper.text()).toContain('140 €');
  });
});
