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
