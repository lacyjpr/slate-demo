import React from 'react';
//import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import serializer from 'enzyme-to-json/serializer';

import SlateEditor from './SlateEditor';

jest.mock('slate', () => {
  return {
    Editor: () => <div>Heal the world!</div>,
    Raw: {
      deserialize: jest.fn(),
      serialize: jest.fn(),
    },
  };
});

expect.addSnapshotSerializer(serializer);

describe('<SlateEditor />', () => {
  it('renders without crashing', () => {
    shallow(<SlateEditor />);
  });
  // it('renders correctly', () => {
  //   const wrapper = mount(<SlateEditor />);
  //   expect(wrapper).toMatchSnapshot();
  // });
});

// import React from 'react'
// import { mount } from 'enzyme'
// import serializer from 'enzyme-to-json/serializer'
// import App from './App'

// jest.mock('slate', () => {
//     return {
//         Editor: () => (<div>Heal the world!</div>),
//         Raw: {
//             deserialize: jest.fn(),
//             serialize: jest.fn()
//         }
//     }
// })

// // We use the enyme-to-json serializer here
// // Note: If you put usage of serializer into jest.config.json,
// //       it refused to work here.
// expect.addSnapshotSerializer(serializer)

// test('should render correctly', () => {
//     const wrapper = mount(
//         <App />
//     )
//     expect(wrapper).toMatchSnapshot()
// })
