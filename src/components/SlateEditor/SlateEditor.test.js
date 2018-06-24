import React from 'react';
//import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
//import serializer from 'enzyme-to-json/serializer';
//import { Value } from 'slate';

import SlateEditor from './SlateEditor';

// jest.mock('slate', () => {
//   return {
//     Editor: () => <div>Heal the world!</div>,
//     Raw: {
//       deserialize: jest.fn(),
//       serialize: jest.fn(),
//     },
//   };
// });

//expect.addSnapshotSerializer(serializer);

describe('<SlateEditor />', () => {
  it('renders without crashing', () => {
    shallow(<SlateEditor />);
  });
  it('renders correctly', () => {
    const wrapper = shallow(<SlateEditor />);
    expect(wrapper).toMatchSnapshot();
  });
});
