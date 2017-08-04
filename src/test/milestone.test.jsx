import React from 'react';
import toJson, { shallowToJson } from 'enzyme-to-json';
import { shallow, render, mount } from 'enzyme';
import { Milestone, mapStateToProps, mapDispatchToProps } from '../components/Milestone/Milestone';


const state = {
  milestones: {
    ids: [2601714],
    milestonesByID: {
      2601714: {
        created: '2017-06-23T22:45:34Z',
        labels: ['sprint 1'],
        repoIssueNumber: 36,
        title: 'sprint 1',
        created: '2017-06-23T22:45:34Z',
        due: '2018-06-23T22:45:34Z',
      },
    },
  },
  loadingMilestones: false,
};

describe('Milestone entry component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <Milestone
        title={'sprint 1'}
        due={'2018-06-23T22:45:34Z'}
        milestoneId={2601714}
        created={'2017-06-23T22:45:34Z'}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('map\'s given State To Props ', () => {
    const expected = {
      title: 'sprint 1',
      created: '2017-06-23T22:45:34Z',
      due: '2018-06-23T22:45:34Z',
    };
    expect(mapStateToProps(state, { milestoneId: 2601714 })).toEqual(expected);
  });

  it('Should have a Cart Header in the center', () => {
    const component = shallow(
      <Milestone />,
    );
    expect(component.find('.aligned').exists()).toBe(true);
  });
});
