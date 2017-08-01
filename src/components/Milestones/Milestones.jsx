import React from 'react';
import './Milestones.css';
import { Table } from 'semantic-ui-react';
import MilestonesRow from '../MilestonesRow/MilestonesRow.jsx';

const Milestones = () => {
  return (
    <Table celled fixed singleline>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='4' textAlign='center'>Milestones</Table.HeaderCell>
        </Table.Row>

        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Days Since</Table.HeaderCell>
          <Table.HeaderCell>Due</Table.HeaderCell>
          <Table.HeaderCell>Pull Request or Issue</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
        <Table.Body>
          <MilestonesRow />
        </Table.Body>
  </Table>
  )
}

export default Milestones;
