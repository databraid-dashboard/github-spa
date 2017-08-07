/* eslint-disable import/extensions */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import App from './App.jsx';

describe('App component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <Provider>

        <App />
      </Provider>,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
