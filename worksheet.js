/* eslint-disable import/no-extraneous-dependencies, no-unused-vars, import/no-unresolved, import/first, max-len,  react/jsx-filename-extension, no-undef, no-unused-expressions ,  import/extensions */

import React from 'react';
import toJson, { shallowToJson } from 'enzyme-to-json';
import { shallow, render, mount } from 'enzyme';
import { Organizations, mapStateToProps, mapDispatchToProps } from '../components/Orgs/Orgs';
import configureMockStore from 'redux-mock-store';

// const middleware = [thunk];
// const mockStore = configureMockStore(middleware);
const state = {
  orgs: {
    ids: [246869449],
    orgsByID: {
      246869449: {
        avatarUrl: 'https://avatars1.githubusercontent.com/u/29614654?v=4',
        orgName: 'ShareCastG52',
        reposUrl: 'https://api.github.com/orgs/ShareCastG52/repos',
      },
    },
  },
  loadingOrganizations: false,
};

describe('Organizations component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <Organizations orgIds={state.orgs.ids} loadingOrganizations={false} retrieveOrgs={() => { retrieveOrgs; }} />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Should call the retrieveOrganizations Function', () => {
    // const retrieveOrgs = jest.fn();
    // const store = mockStore({ })
    const component = mount(
      <Organizations orgIds={state.orgs.ids} loadingOrganizations={false} retrieveOrgs={retrieveOrganizations} />,
    );
    expect(retrieveOrgs).toBeCalled();
  });

  it('map\'s given State To Props ', () => {
    const expected = {
      orgIds: [246869449],
      orgsByID: {
        246869449: {
          avatarUrl: 'https://avatars1.githubusercontent.com/u/29614654?v=4',
          orgName: 'ShareCastG52',
          reposUrl: 'https://api.github.com/orgs/ShareCastG52/repos',
        },
      },
      loadingOrganizations: false,
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('maps component dispatches to props', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('retrieveOrgs');
  });
  it('Should have a Cart Header in the center', () => {
    const component = shallow(
      <Organizations orgIds={state.orgs.ids} orgsLoading={false} retrieveOrganizations={() => { retrieveOrganizations; }} />,
    );
    expect(component.find('.aligned').exists()).toBe(true);
  });
});
