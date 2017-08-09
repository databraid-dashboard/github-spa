import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import App from './App.jsx';

describe('App component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <App />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
