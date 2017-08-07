import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import PrTableRow from '../PrTableRow/PrTableRow';
import { retrievePrs } from '../../actions/prActions';
import './PrTable.css';


function prComponents(prIds) {
  return prIds.sort((a, b) => a - b).map(id => <PrTableRow key={id} prId={id} />);
}

export class PrTable extends Component {
  componentDidMount() {
    this.props.retrievePrs();
  }


  render() {
    if (this.props.loadingPrTable) {
      return (
        <div>Loading Pull Requests</div>
      );
    }
    return (
      <Table celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="4" textAlign="center">Pull Requests</Table.HeaderCell>
          </Table.Row>

          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Created</Table.HeaderCell>
            <Table.HeaderCell>Submitted By</Table.HeaderCell>
            <Table.HeaderCell>Meargeability</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {prComponents(this.props.prIds)}

        </Table.Body>
      </Table>
    );
  }
}

PrTable.propTypes = {
  retrievePrs: PropTypes.func.isRequired,
  prIds: PropTypes.arrayOf.isRequired,
  loadingPrTable: PropTypes.bool.isRequired,
};

export const mapStateToProps = state => ({
  prIds: state.pullRequests.ids,
  // prsById: state.pullRequests.prsById
  loadingPrTable: state.loadingPrTable,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  retrievePrs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrTable);
