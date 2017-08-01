import React from 'react';
import './Milestones.css';
import { Table } from 'semantic-ui-react';

const Milestones = () => {
  return (
    <Table celled fixed singleline>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='5' textAlign='center'>Pull Requests</Table.HeaderCell>
        </Table.Row>

        <Table.Row>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Days Since</Table.HeaderCell>
          <Table.HeaderCell>Due</Table.HeaderCell>
          <Table.HeaderCell>Pull Request or Issue</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
        <Table.Body>

        </Table.Body>
  </Table>
  )
}

export default Milestones;
