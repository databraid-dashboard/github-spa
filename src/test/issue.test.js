
import React from 'react';

import toJson, { shallowToJson } from 'enzyme-to-json';
import { shallow, render, mount } from 'enzyme';
import {Issue, mapStateToProps, mapDispatchToProps }from '../components/Issue/Issue';
import retrieveIssues from '../actions/issueActions';

const state = {

    issuesById : {
      238923429 : {
        assignedTo: [],
        labels : ['duplicate', 'help wanted', 'question'],
        repoIssueNumber: 16,
        title : 'login tst JWT token',

      }
    },

}

describe('Issues component', () => {
  it('should render a component with props as specified ', () => {
    console.log(state.issuesById[238923429]);
    const component = shallow(
      <Issue issuesIds={state.issuesById[238923429]} issuesLoading={false}/>,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('map\'s given State To Props ', () => {

    const expected = {
      assignedTo: [],
      labels : ['duplicate', 'help wanted', 'question'],
      repoIssueNumber: 16,
      title : 'login tst JWT token',
    }
    expect(mapStateToProps(state)).toEqual(expected);
  })

  it('maps component dispatches to props', () =>{
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('retrieveIssues');
  });
  it('Should have a Cart Header in the center', () => {
    const component = shallow(
      <Issue issuesIds={state.issues.ids} issuesLoading={false}/>,
    );
    expect(component.find('.aligned').exists()).toBe(true);
  })
});
