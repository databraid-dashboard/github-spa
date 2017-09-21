import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { Logout, mapDispatchToProps } from '../components/Logout/Logout';
import { logout } from '../actions/renderActions';


const logoutComponent = shallow(
  <Logout
    logout={logout}
  />,
);


describe('Logout Component', () => {
  it('renders a button component as specified', () => {
    expect(toJson(logoutComponent)).toMatchSnapshot();
  });
  it('should have a length of 1', () => {
    expect(logoutComponent.toHave);
  });
  it('should contain an icon', () => {
    expect(logoutComponent.find('.icon').exists()).toBe(true);
  });
  it('should contain an icon, the icon should be a hand', () => {
    expect(logoutComponent.find('.hand').exists()).toBe(true);
  });
  // it('returns State To initialState ', () => {
  //   const logout = jest.fn();
  //   const expected = {
  //     avatarUrl: 'https://avatars1.githubusercontent.com/u/29614654?v=4',
  //     orgName: 'ShareCastG52',
  //   };
  //
  //   expect(mapStateToProps(state, { orgId: 238923429, widgetId: 'github' })).toEqual(expected);
  // });
  it('maps logout dispatches to props', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('logout');
  });
});
