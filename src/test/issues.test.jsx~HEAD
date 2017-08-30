import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Issues, mapStateToProps, mapDispatchToProps } from '../components/Issues/Issues';


const state = {
  issues: {
    ids: [246869449],
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
};

describe('Issues component', () => {
  it('should render a component with props as specified ', () => {
    const retrieveIssues = jest.fn();
    const component = shallow(
      <Issues
        issuesIds={state.issues.ids}
        loadingIssues={false}
        retrieveIssues={retrieveIssues}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  //
  // it('Should call the retrieveIssues Function', ()=> {
  //   const retrieveIssues = jest.fn();
  //   const store = mockStore({ })
  //   const component = mount (
  //     <Issues issuesIds={state.issues.ids}
  //       loadingIssues={false}
  //       retrieveIssues={retrieveIssues}/>,
  //   );
  //   expect(retrieveIssues).toBeCalled();
  // });

  it('map\'s given State To Props ', () => {
    const expected = {
      issuesIds: [246869449],

      loadingIssues: false,
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('maps component dispatches to props', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('retrieveIssues');
  });
  it('Should have a Cart Header in the center', () => {
    const retrieveIssues = jest.fn();
    const component = shallow(
      <Issues
        issuesIds={state.issues.ids}
        loadingIssues={false}
        retrieveIssues={retrieveIssues}
      />,
    );
    expect(component.find('.aligned').exists()).toBe(true);
  });
});
