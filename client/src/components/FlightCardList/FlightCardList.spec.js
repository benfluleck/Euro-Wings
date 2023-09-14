import { mount } from '@vue/test-utils';
import FlightCardList from './FlightCardList.vue';
import { flights } from '@fixtures/flights';

const defaultProps = {
  flights
};

describe('FlightCardContent', () => {
  it('should render the card-content with large colums', async () => {
    const wrapper = mount(FlightCardList, {
      props: { ...defaultProps }
    });

    expect(wrapper.text()).toContain('NGR');
    expect(wrapper.text()).toContain('09:30');
  });

  it('testing the card-content with large colums', async () => {
    const wrapper = mount(FlightCardList, {
      props: { ...defaultProps }
    });

    expect(wrapper.text()).toContain('BEN');
    expect(wrapper.text()).toContain('10:30');
  });

  it('should render the card-content with large colums', async () => {
    const wrapper = mount(FlightCardList, {
      props: { ...defaultProps }
    });

    expect(wrapper.text()).toContain('120 €');
  });
});
