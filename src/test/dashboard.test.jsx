import React from 'react';
import toJson, { shallowToJson } from 'enzyme-to-json';
import { shallow, render, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Dashboard, { mapStateToProps } from '../components/Dashboard/Dashboard';
import rootReducer from '../reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Should render a Dashboard that holds Connected Components', () => {
  it.only('Should render the Dashboard', () => {
    const store = mockStore({ rootReducer });
    const dashComponent = shallow(
      <Dashboard store={store} />,
    );

    // console.log('dashComponent', dashComponent);

    expect(shallowToJson(dashComponent)).toMatchSnapshot();
  });
  // it('Should have an <Issues/> component', ()=> {
  //   const store = mockStore({rootReducer});
  //   const dashComponent = shallow(
  //     <Dashboard store={store} />
  //   );
  //   console.log(mountedDashComponent);
  //   expect(shallowToJson(mountedDashComponent)).find('Grid.Column').childAt(0).to.equal('Issues')
  // })
  // it('Should have an <milestonesReducer/> component', ()=> {
  //
  //   expect(shallowToJson())
  // })
  // it('Should have an <PrTable/> component', ()=> {
  //
  //   expect(shallowToJson())
  // })
  // it('It should show a loading bar when unmounted', ()=> {
  //
  // })
});


//
// import AdminRewards from '../src/components/Admin/rewards/admin-rewards/rewards-container';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { shallow } from 'enzyme';
// import { shallowToJson } from 'enzyme-to-json';
// import thunk from 'redux-thunk';
// import configureMockStore from 'redux-mock-store';
// import lvlupApp from '../src/reducers/index';
// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
// test('AdminRewards should render', () => {
//   const store = mockStore({ lvlupApp });
//   const adminrewards = shallow(
//     <AdminRewards store={store} />,
//   );
//   expect(shallowToJson(adminrewards)).toMatchSnapshot();
// });
