import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Milestone, mapStateToProps } from '../components/Milestone/Milestone';

const state = {
  widgets: {
    byId: {
      github: {
        milestones: {
          ids: [2601714],
          milestonesById: {
            2601714: {
              created: '2017-06-23T22:45:34Z',
              labels: ['sprint 1'],
              repoIssueNumber: 36,
              title: 'building paths and auth',
              due: '2018-06-23T22:45:34Z',
              percentComplete: 0.4,
            },
          },
        },
        loadingMilestones: false,
      },
    },
  },
};

describe('Milestone entry component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <Milestone
        title={'sprint 1'}
        due={'2018-06-23T22:45:34Z'}
        milestoneId={2601714}
        percentComplete={0.4}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('map\'s given State To Props ', () => {
    const expected = {
      title: 'building paths and auth',
      due: '2018-06-23T22:45:34Z',
      percentComplete: 0.4,
      milestoneId: 2601714,
    };
    expect(mapStateToProps(state, { milestoneId: 2601714, widgetId: 'github' })).toEqual(expected);
  });

  it('Should have a List Content aligned in the center', () => {
    const component = shallow(
      <Milestone
        title={'sprint 1'}
        due={'2018-06-23T22:45:34Z'}
        percentComplete={0.4}
        milestoneId={2601714}
      />,
    );
    expect(component.find('.aligned').exists()).toBe(true);
  });
});
