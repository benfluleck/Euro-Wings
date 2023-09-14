import { mount } from '@vue/test-utils';
import FlightCardContent from './FlightCardContent.vue';

const defaultProps = {
  isLargeColumn: true,
  header: 'Test header',
  content: 'This is come content'
};

describe('FlightCardContent', () => {
  it('should render the card-content with large colums', async () => {
    const wrapper = mount(FlightCardContent, {
      props: { ...defaultProps }
    });

    console.log(wrapper.html());

    expect(wrapper.classes()).toContain('card-content');
    expect(wrapper.classes()).toContain('large-content');
  });

  it('should render the card-content to not contain a large column when isLargeColumn :false', async () => {
    const wrapper = mount(FlightCardContent, {
      props: { ...defaultProps, isLargeColumn: false }
    });

    expect(wrapper.classes()).toContain('card-content');
    expect(wrapper.classes()).not.toContain('large-content');
  });

  it('should render the flight card content', async () => {
    const wrapper = mount(FlightCardContent, {
      props: { ...defaultProps }
    });

    expect(wrapper.text()).toContain('Test header');
    expect(wrapper.text()).toContain('This is come content');
  });
});
