/* eslint-disable no-unused-vars, react/jsx-filename-extension */

import React from 'react';
import { Table } from 'semantic-ui-react';
import './PrTable.css';
import PrTableRow from '../PrTableRow/PrTableRow.jsx';

const PrTable = () => {
  return (
    <Table celled fixed singleline>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='5' textAlign='center'>Pull Requests</Table.HeaderCell>
        </Table.Row>

        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Created</Table.HeaderCell>
          <Table.HeaderCell>Submitted By</Table.HeaderCell>
          <Table.HeaderCell>Comments</Table.HeaderCell>
          <Table.HeaderCell>Meargeability</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <PrTableRow />

        {/* <Table.Row>
          <Table.Cell>Merge Now</Table.Cell>
          <Table.Cell>Date</Table.Cell>
          <Table.Cell>SSabu</Table.Cell>
          <Table.Cell>Ready to Merge</Table.Cell>
          <Table.Cell>No Conflicts</Table.Cell>
        </Table.Row> */}
      </Table.Body>
    </Table>
  )
}

export default PrTable;
