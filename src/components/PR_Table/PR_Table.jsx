<<<<<<< HEAD:src/components/PR_Table/PR_Table.jsx
import React from 'react';
import './PR_Table.css';
import { Table } from 'semantic-ui-react';

const PR_Table = () => {
  return (
    <Table celled fixed singleline>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='5' textAlign='center'>Pull Requests</Table.HeaderCell>
        </Table.Row>

        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Since</Table.HeaderCell>
          <Table.HeaderCell>Submitted By</Table.HeaderCell>
          <Table.HeaderCell>Comments</Table.HeaderCell>
          <Table.HeaderCell>Meargeability</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Merge Now</Table.Cell>
          <Table.Cell>Date</Table.Cell>
          <Table.Cell>SSabu</Table.Cell>
          <Table.Cell>Ready to Merge</Table.Cell>
          <Table.Cell>No Conflicts</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default PR_Table;
=======
import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import './PrTable.css';
import PrTableRow from '../PrTableRow/PrTableRow.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { retrievePrs } from '../../actions/prActions';

export class PrTable extends Component {

  componentDidMount(){
    this.props.retrievePrs();
  }

  prComponents = (prIds) => {
    console.log(prIds, "prIds");
    return prIds.map(id => (
      <PrTableRow key={id} prId={id} />
    ))
  }

  render() {
    if (this.props.loadingPrTable) {

      return (
        <div>Loading Pull Requests</div>
      )
    }
    return (
      <Table celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan='4' textAlign='center'>Pull Requests</Table.HeaderCell>
          </Table.Row>

          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Created</Table.HeaderCell>
            <Table.HeaderCell>Submitted By</Table.HeaderCell>
            <Table.HeaderCell>Meargeability</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.prComponents(this.props.prIds)}

        </Table.Body>
      </Table>
    )
  }
};

export const mapStateToProps = state => {
  return {
    prIds: state.pullRequests.ids,
    // prsById: state.pullRequests.prsByID
    loadingPrTable: state.loadingPrTable
  }
}

export const mapDispatchToProps = dispatch => bindActionCreators ({
  retrievePrs
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrTable);
>>>>>>> d3454fd... Adding PR Table and Milestones Components:src/components/PrTable/PrTable.jsx
