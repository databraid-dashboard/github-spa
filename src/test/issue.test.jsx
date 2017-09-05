import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Issue, mapStateToProps } from '../components/Issue/Issue';

const ownProps = { widgetId: 'github' };
const state = {
  widgets: {
    byId: {
      github: {
        issues: {
          issuesById: {
            238923429: {
              assignedTo: [['Gwillison415', 'https://avatars2.githubusercontent.com/u/22106099?v=4']],
              labels: ['duplicate', 'help wanted', 'question'],
              number: 16,
              title: 'login tst JWT token',
            },
          },
        },
      },
    },
  },
};

describe('Issue entry component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <Issue
        id={ownProps.widgetId}
        labels={state.widgets.byId.github.issues.issuesById[238923429].labels}
        issueId={238923429}
        assignedTo={state.widgets.byId.github.issues.issuesById[238923429].assignedTo[0]}
        number={16}
        title={'login tst JWT token'}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('map\'s given State To Props ', () => {
    const expected = {
      assignedTo: [['Gwillison415', 'https://avatars2.githubusercontent.com/u/22106099?v=4']],
      labels: ['duplicate', 'help wanted', 'question'],
      number: 16,
      title: 'login tst JWT token',
    };
    expect(mapStateToProps(state, { issueId: 238923429, widgetId: 'github' })).toEqual(expected);
  });

  it('Should have a Cart Header in the center', () => {
    const component = shallow(
      <Issue
        number={16}
        title={'login tst JWT token'}
        issueId={238923429}
        labels={state.widgets.byId.github.issues.issuesById[238923429].labels}
        assignedTo={[['Gwillison415', 'https://avatars2.githubusercontent.com/u/22106099?v=4']]}
      />,
    );
    expect(component.find('.aligned').exists()).toBe(true);
  });
});
