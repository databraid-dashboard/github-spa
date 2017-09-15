import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import {
  Organizations,
  mapStateToProps,
  mapDispatchToProps,
} from '../components/Organizations/Organizations';

const state = {
  widgets: {
    byId: {
      github: {
        orgs: {
          ids: ['246869449'],
          orgsById: {
            246869449: {
              avatarUrl: 'https://avatars1.githubusercontent.com/u/29614654?v=4',
              orgName: 'ShareCastG52',
              reposUrl: 'https://api.github.com/orgs/ShareCastG52/repos',
            },
          },
        },
        currentPage: { render: 'orgs', repoName: null, userName: 'michaelmurray6298' },
      },
    },
    currentPage: { render: 'orgs', repoName: null },
  },
  currentPage: { render: 'orgs', repoName: null, userName: 'michaelmurray6298' },
};

describe('Organizations component', () => {
  it('should render a component with props as specified ', () => {
    const retrieveOrgs = jest.fn();
    const renderLogin = jest.fn();
    const component = shallow(
      <Organizations
        orgIds={state.widgets.byId.github.orgs.ids}
        loadingOrganizations={false}
        currentPage={state.widgets.byId.github.currentPage.render}
        retrieveOrgs={retrieveOrgs}
        renderLogin={renderLogin}
        userName={state.widgets.byId.github.currentPage.userName}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  // NOTE this test will be included in future versions
  // to check that passed in functions have been called
  // it('Should call the retrieveOrganizations Function', ()=> {
  //   const retrieveOrgs = jest.fn();
  //   const store = mockStore({ })
  //   const component = mount (
  //     <Organizations orgIds={state.orgs.ids}  retrieveOrgs={retrieveOrgs}/>,
  //   );
  //   expect(retrieveOrgs).toBeCalled();
  // });

  it("map's given State To Props ", () => {
    const expected = {
      orgIds: ['246869449'],
      orgsById: {
        246869449: {
          avatarUrl: 'https://avatars1.githubusercontent.com/u/29614654?v=4',
          orgName: 'ShareCastG52',
          reposUrl: 'https://api.github.com/orgs/ShareCastG52/repos',
        },
      },
      userName: 'michaelmurray6298',
    };
    expect(mapStateToProps(state, { widgetId: 'github' })).toEqual(expected);
  });

  it('maps component dispatches to props', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('retrieveOrgs');
  });
});
