import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Issues, mapStateToProps, mapDispatchToProps } from '../components/Issues/Issues';

const state = {
  widgets: {
    byId: {
      github: {
        issues: {
          issuesById: {
            246869449: {
              assignedTo: [],
              labels: [],
              repoIssueNumber: 36,
              title: 'disregard this PR',

            },
          },
        },
        loadingIssues: false,
        currentPage: { selectedOrgName: 'ski-ski', userName: 'michaelmurray6298' },
      },
    },
  },
  // loadingIssues: false,
  // currentPage: { selectedOrgName: 'ski-ski', userName: 'michaelmurray6298' },
};

describe('Issues component', () => {
  it('should render a component with props as specified ', () => {
    const retrieveIssues = jest.fn();
    const component = shallow(
      <Issues
        issuesIds={state.widgets.byId.github.issues.ids}
        loadingIssues={false}
        retrieveIssues={retrieveIssues}
        orgName={state.widgets.byId.github.currentPage.selectedOrgName}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('map\'s given State To Props ', () => {
    const expected = {
      issuesByRepo: undefined,
      loadingIssues: false,
      orgName: 'ski-ski',
      userName: 'michaelmurray6298',
    };
    expect(mapStateToProps(state, { widgetId: 'github' })).toEqual(expected);
  });

  it('maps component dispatches to props', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('retrieveIssues');
  });

  it('Should have a Cart Header in the center', () => {
    const retrieveIssues = jest.fn();
    const component = shallow(
      <Issues
        issuesIds={state.widgets.byId.github.issues.ids}
        loadingIssues={false}
        retrieveIssues={retrieveIssues}
        orgName={state.widgets.byId.github.currentPage.selectedOrgName}
        userName={state.widgets.byId.github.currentPage.userName}
      />,
    );
    expect(component.find('.aligned').exists()).toBe(true);
  });
});
