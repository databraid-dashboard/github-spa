
import React from 'react';

import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { PrTable, mapStateToProps, mapDispatchToProps } from '../components/PrTable/PrTable';

const state = {
  pullRequests: {
    prsById: {
      246869449: {
        submittedBy: [],
        created: '2017-07-31T20:17:36Z',
        title: 'disregard #2',

      },
    },
  },
  loadingPrTable: false,
  currentPage: { userName: undefined },
  prsByRepo: undefined,
};

xdescribe('PrTable component', () => {
  it('should render a component with props as specified ', () => {
    const retrievePrs = jest.fn();
    const component = shallow(
      <PrTable
        loadingPrTable={false}
        retrievePrs={retrievePrs}
        userName={state.currentPage.userName}
      />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('map\'s given State To Props ', () => {
    const expected = {
      loadingPrTable: false,
      userName: undefined,
      orgName: undefined,
      prsById: {
        246869449: {
          submittedBy: [],
          created: '2017-07-31T20:17:36Z',
          title: 'disregard #2',

        },
      },
      prsByRepo: undefined,

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
