import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, render, mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import { Logout } from '../components/Logout/Logout';


function findLogoutURL() {
  if (NODE_ENV === 'development') {
    return process.env.development.REACT_APP_GITHUB_OAUTH_LOGOUT;
  } else {
    return process.env.production.REACT_APP_GITHUB_OAUTH_LOGOUT
  }
}
describe('Logout Component', () => {



  const logoutComponent = shallow( <Logout ></Logout>)
  it('renders a button component as specified', () => {
    expect(toJson(logoutComponent)).toMatchSnapshot();
  })
  it('should have a length of 1', ()=> {
    expect(logoutComponent.toHave)
  })
  it('should contain an icon', () => {
    expect(logoutComponent.find('.icon').exists()).toBe(true);
  })
  it('should contain an icon, the icon should be a hand', ()=> {
    expect(logoutComponent.find('.hand').exists()).toBe(true);
  })
  // it('should have a reference to the corect logout url', ()=> {
  //   expect(logoutComponent.find('.content').prop('href').to.equal(findLogoutURL()))
  // })
// )
})
//
// <div class="content"><a href="http://localhost:8002/logout/" class="ui medium button hand peace icon"><i aria-hidden="true" class="hand peace icon"></i><!-- react-text: 19 -->Logout<!-- /react-text --></a></div>
