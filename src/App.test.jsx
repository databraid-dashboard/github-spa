import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import App from './App.jsx';
<<<<<<< HEAD
=======
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Api from './utils/Api';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
>>>>>>> fdc01a4... Removed express middleware to store user from req to res

describe('App component', () => {
  it('should render a component with props as specified ', () => {
    const component = shallow(
      <App />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
