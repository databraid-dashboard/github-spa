/* eslint-disable import/extensions, import/no-duplicates */
import promiseMiddleware from 'redux-promise-middleware';
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App.jsx';
import Api from './utils/Api';

const middleware = [
  promiseMiddleware(),
  thunkMiddleware.withExtraArgument({ Api }),
  thunk,
];
const mockStore = configureStore(middleware);

describe('App component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <Provider store={mockStore({})}>

        <App />
      </Provider>,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
