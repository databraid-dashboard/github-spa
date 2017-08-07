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

<<<<<<< HEAD
<<<<<<< HEAD
  prComponents(prIds) {
<<<<<<< HEAD
    return prIds.sort((a, b) => a - b).map(id => <PrTableRow key={id} prId={id} />);
=======
    return prIds.map(id => <PrTableRow key={id} prId={id} />);
>>>>>>> edbe0e0... fml
  }
=======
>>>>>>> 02a66ea... Adding with some linting errors addressed

=======
>>>>>>> b56b9a4... Adding conditional views
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

<<<<<<< HEAD
export const mapStateToProps = state => ({
  prIds: state.pullRequests.ids,
  // prsById: state.pullRequests.prsById
  loadingPrTable: state.loadingPrTable,
});
=======
export const mapStateToProps = state => {
  console.log(state.pullRequests, "state.pullRequests")

   return {
  prIds: state.pullRequests.ids,
  prsById: state.pullRequests.prsByID,
  loadingPrTable: state.loadingPrTable,
}
};
>>>>>>> edbe0e0... fml

export const mapDispatchToProps = dispatch => bindActionCreators({
  retrievePrs,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrTable);
