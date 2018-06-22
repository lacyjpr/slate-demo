import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Editor from './Editor';

describe('<Editor />', () => {
  it('renders without crashing', () => {
    shallow(<Editor />);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Editor />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
