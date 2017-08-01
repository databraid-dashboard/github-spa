import React from 'react';
import './MilestonesRow.css';
import { Table } from 'semantic-ui-react';

const MilestonesRow = () => (
  <Table.Row>
    <Table.Cell>Tracking milestone for version 1.0</Table.Cell>
    <Table.Cell>3</Table.Cell>
    <Table.Cell>Aug 3, 2017</Table.Cell>
    <Table.Cell>PR</Table.Cell>
  </Table.Row>
)

export default MilestonesRow;
