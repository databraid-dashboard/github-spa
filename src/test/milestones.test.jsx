import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Milestones, mapStateToProps, mapDispatchToProps } from '../components/Milestones/Milestones';

const state = {
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
};

describe('Milestones component', () => {
  it('should render a component with props as specified ', () => {
    const retrieveMilestones = jest.fn();
    const component = shallow(
      <Milestones
        milestonesIds={state.milestones.ids}
        loadingMilestones={false}
        retrieveMilestones={retrieveMilestones}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('map\'s given State To Props ', () => {
    const expected = {
      milestonesIds: [2601714],
      loadingMilestones: false,
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('maps component dispatches to props', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('retrieveMilestones');
  });
  it('Should have a Cart Header in the center', () => {
    const retrieveMilestones = jest.fn();
    const component = shallow(
      <Milestones
        milestonesIds={state.milestones.ids}
        loadingMilestones={false}
        retrieveMilestones={retrieveMilestones}
      />,
    );
    expect(component.find('.aligned').exists()).toBe(true);
  });
});
