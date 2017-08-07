import React from 'react';
import toJson, { shallowToJson } from 'enzyme-to-json';
import { shallow, render, mount } from 'enzyme';
import App from './App.jsx';


describe('App component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <Provider>

        <App   />
      </Provider>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
})
