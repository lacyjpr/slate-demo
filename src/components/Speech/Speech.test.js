import React from 'react';
import { shallow } from 'enzyme';

import Speech from './Speech';

describe('<Speech />', () => {
  it('renders without crashing', () => {
    shallow(<Speech />);
  });
  it('renders correctly', () => {
    const wrapper = shallow(<Speech />);
    expect(wrapper).toMatchSnapshot();
  });
});
