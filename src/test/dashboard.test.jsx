import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Dashboard } from '../components/Dashboard/Dashboard';
import rootReducer from '../reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Should render a Dashboard that holds Connected Components', () => {
  it.only('Should render the Dashboard', () => {
    const store = mockStore({ rootReducer });
    const displayRepos = jest.fn();
    const dashComponent = shallow(
      <Dashboard store={store} repoName={'Some Repo'} currentPage={'dashboard'} displayRepos={displayRepos} />,
    );
    expect(shallowToJson(dashComponent)).toMatchSnapshot();
  });
});
