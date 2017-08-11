
import React from 'react';

import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { PrTable, mapStateToProps, mapDispatchToProps } from '../components/PrTable/PrTable';

const state = {
  pullRequests: {
    ids: [246869449],
    prsById: {
      246869449: {
        submittedBy: [],
        created: '2017-07-31T20:17:36Z',
        title: 'disregard #2',

      },
    },
  },
  loadingPrTable: false,
};

xdescribe('PrTable component', () => {
  it('should render a component with props as specified ', () => {
    const retrievePrs = jest.fn();
    const component = shallow(
      <PrTable prIds={state.pullRequests.ids} loadingPrTable={false} retrievePrs={retrievePrs} />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('map\'s given State To Props ', () => {
    const expected = {
      prIds: [246869449],
      loadingPrTable: false,
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('maps component dispatches to props', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('retrievePrs');
  });
  // it('Should have a Title: Pull Request', () => {
  //
  //   const component = shallow(
  //     <PrTable prIds={state.pullRequests.ids} loadingPrTable={false}/>,
  //   );
  //   console.log(component.find('Table.HeaderCell'));
  //   expect(component.find('.Table.HeaderCell').exists()).toBe(true);
  // })
});

// .ShallowWrapper.root.ShallowWrapper.unrendered
