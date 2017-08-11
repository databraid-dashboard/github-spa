/* eslint-disable import/extensions */
import promiseMiddleware from 'redux-promise-middleware';
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunkMiddlewareit from 'redux-thunk';
import { Provider } from 'react-redux';
import Api from './utils/Api';
import App from './App.jsx';

const middleware = [
  promiseMiddleware(),
  thunkMiddleware.withExtraArgument({ Api }),
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
