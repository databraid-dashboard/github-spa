import React from 'react';
import toJson, { shallowToJson } from 'enzyme-to-json';
import { shallow, render, mount } from 'enzyme';
import { Issue, mapStateToProps, mapDispatchToProps } from '../components/Issue/Issue';

const state = {

  issues: {
    issuesById: {
      238923429: {
        assignedTo: ['grant'],
        labels: ['duplicate', 'help wanted', 'question'],
        repoIssueNumber: 16,
        title: 'login tst JWT token',

      },
    } },

};

describe('Issue entry component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <Issue
        labels={state.issues.issuesById[238923429].labels}
        issueId={238923429}
        assignedTo={['grant']}
        repoIssueNumber={16}
        title={'login tst JWT token'}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it('map\'s given State To Props ', () => {
    const expected = {
      assignedTo: ['grant'],
      labels: ['duplicate', 'help wanted', 'question'],
      repoIssueNumber: 16,
      title: 'login tst JWT token',
    };
    expect(mapStateToProps(state, { issueId: 238923429 })).toEqual(expected);
  });


  it('Should have a Cart Header in the center', () => {
    const component = shallow(
      <Issue
        issueId={238923429}
        labels={state.issues.issuesById[238923429].labels}
      />,
    );
    expect(component.find('.aligned').exists()).toBe(true);
  });
});
