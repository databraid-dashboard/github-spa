/* eslint-disable no-unused-vars, react/jsx-filename-extension */

import React from 'react';
// import renderer from 'react-test-renderer';
// import { withRouter, Route } from 'react-router-dom';

import toJson, { shallowToJson } from 'enzyme-to-json';
import { shallow, render, mount } from 'enzyme';
import Issues from '../components/Issues/Issues';

describe('Issues component', () => {
  it('should render a snapshot component as specified ', () => {
    const component = shallow(
      <Issues />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
