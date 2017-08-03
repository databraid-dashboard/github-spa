<<<<<<< HEAD
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
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
      <Card>
        <Card.Content>
          <Card.Header className="ui center aligned">
            Pull Requests
          </Card.Header>
        </Card.Content>
        {prComponents(this.props.prIds)}
      </Card>

      // <Table celled fixed>
      //   <Table.Header>
      //     <Table.Row>
      //       <Table.HeaderCell colSpan="4" textAlign="center">Pull Requests</Table.HeaderCell>
      //     </Table.Row>
      //
      //     <Table.Row>
      //       <Table.HeaderCell>Title</Table.HeaderCell>
      //       <Table.HeaderCell>Created</Table.HeaderCell>
      //       <Table.HeaderCell>Submitted By</Table.HeaderCell>
      //       <Table.HeaderCell>Meargeability</Table.HeaderCell>
      //     </Table.Row>
      //   </Table.Header>
      //   <Table.Body>
      //     {prComponents(this.props.prIds)}
      //
      //   </Table.Body>
      // </Table>
    );
  }
}

PrTable.propTypes = {
  retrievePrs: PropTypes.func.isRequired,
  prIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  loadingPrTable: PropTypes.bool,
};

PrTable.defaultProps = {
  loadingPrTable: false,
};

export const mapStateToProps = state => ({
  prIds: state.pullRequests.ids,
  // prsById: state.pullRequests.prsById
  loadingPrTable: state.loadingPrTable,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  retrievePrs,
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
>>>>>>> Adding PR Table and Milestones Components
}, dispatch);

export default connect(
  mapStateToProps,
<<<<<<< HEAD
  mapDispatchToProps,
=======
  mapDispatchToProps
>>>>>>> Adding PR Table and Milestones Components
)(PrTable);
