import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Org, mapStateToProps } from '../components/Org/Org';

const state = {
  orgs: {
    ids: [238923429],
    orgsById: {
      238923429: {
        avatarUrl: 'https://avatars1.githubusercontent.com/u/29614654?v=4',
        orgName: 'ShareCastG52',
        reposUrl: 'https://api.github.com/orgs/ShareCastG52/repos',
      },
    },
  },
  loadingOrganizations: false,
};

describe('Org entry component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <Org

        avatarUrl={'https://avatars1.githubusercontent.com/u/29614654?v=4'}
        orgName={'ShareCastG52'}
        reposUrl={'https://api.github.com/orgs/ShareCastG52/repos'}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it('map\'s given State To Props ', () => {
    const expected = {
      avatarUrl: 'https://avatars1.githubusercontent.com/u/29614654?v=4',
      orgName: 'ShareCastG52',
    };
    expect(mapStateToProps(state, { orgId: 238923429 })).toEqual(expected);
  });
});
