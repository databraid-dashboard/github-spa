import React from 'react';
import './PrTableRow.css'
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';

const PrTableRow = ({ created, mergeable, submittedBy, title }) => (
    <Table.Row>
      <Table.Cell>{ title }</Table.Cell>
      <Table.Cell>{ created }</Table.Cell>
      <Table.Cell>{ submittedBy }</Table.Cell>
      <Table.Cell>{ mergeable }</Table.Cell>
    </Table.Row>
)

const mapStateToProps = (state, { prId }) => {
  const pr = state.pullRequests.prsByID[prId];
  const { created, mergeable, submittedBy, title } = pr;
  return {
    created,
    mergeable,
    submittedBy,
    title
  }
}

export default connect(
  mapStateToProps
)(PrTableRow);
