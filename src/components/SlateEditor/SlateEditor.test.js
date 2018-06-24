import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SlateEditor from './SlateEditor';

describe('<SlateEditor />', () => {
  it('renders without crashing', () => {
    shallow(<SlateEditor />);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<SlateEditor />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
