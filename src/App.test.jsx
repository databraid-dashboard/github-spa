/* eslint-disable import/extensions */
import promiseMiddleware from 'redux-promise-middleware';
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import App from './App.jsx';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Api from './utils/Api';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

const middleware = [
  promiseMiddleware(),
  thunkMiddleware.withExtraArgument({ Api}),
  thunk,
];
const mockStore = configureStore(middleware);
describe('App component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <Provider>

        <App   />
      </Provider>
    );
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <App store={mockStore}/>,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
