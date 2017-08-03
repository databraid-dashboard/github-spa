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
      <Table celled fixed singleline>
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
