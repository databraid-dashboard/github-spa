/* eslint-disable no-unused-vars, react/jsx-filename-extension */

import React from 'react';
// import renderer from 'react-test-renderer';
// import { withRouter, Route } from 'react-router-dom';

import toJson, { shallowToJson } from 'enzyme-to-json';
import { shallow, render, mount } from 'enzyme';
import {Issues, mapStateToProps, mapDispatchToProps }from '../components/Issues/Issues';
import retrieveIssues from '../actions/issueActions';

const state = {
  issues : {
    ids: [246869449],
    issuesById : {
      246869449 : {
        assignedTo: [],
        labels : [],
        repoIssueNumber: 36,
        title : "disregard this PR",

      }
    },
  },
  loadingIssues: false
}

describe('Issues component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <Issues issuesIds={state.issues.ids} issuesLoading={false}/>,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('map\'s given State To Props ', () => {

    const expected = {
      issuesIds: [246869449],

      loadingIssues: false
    }
    expect(mapStateToProps(state)).toEqual(expected);
  })

  it('maps component dispatches to props', () =>{
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('retrieveIssues');
  });
});
