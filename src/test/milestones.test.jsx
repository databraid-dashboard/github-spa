import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Milestones, mapStateToProps, mapDispatchToProps } from '../components/Milestones/Milestones';

const state = {
  widgets: {
    byId: {
      github: {
        milestones: {
          ids: [2601714],
        },
        milestonesById: {
          2601714: {
            created: '2017-06-23T22:45:34Z',
            labels: [],
            repoIssueNumber: 36,
            title: 'disregard this PR',
          },
        },
        loadingMilestones: false,
        currentPage: { userName: 'michaelmurray6298' },
      },
    },
  },
};

describe('Milestones component', () => {
  it('should render a component with props as specified ', () => {
    const retrieveMilestones = jest.fn();
    const component = shallow(
      <Milestones
        loadingMilestones={false}
        retrieveMilestones={retrieveMilestones}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('map\'s given State To Props ', () => {
    const expected = {
      loadingMilestones: false,
      userName: 'michaelmurray6298',
      orgName: undefined,
      milestonesById: undefined,
      milestonesByRepo: undefined,
    };
    expect(mapStateToProps(state, { widgetId: 'github' })).toEqual(expected);
  });

  it('maps component dispatches to props', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('retrieveMilestones');
  });

  it('Should have a Cart Header in the center', () => {
    const retrieveMilestones = jest.fn();
    const component = shallow(
      <Milestones
        loadingMilestones={false}
        retrieveMilestones={retrieveMilestones}
        userName={state.widgets.byId.github.currentPage.userName}
      />,
    );
    expect(component.find('.aligned').exists()).toBe(true);
  });
});
