import React from 'react';
import './PrTableRow.css'
import { Table } from 'semantic-ui-react';

const PrTableRow = () => (
    <Table.Row>
      <Table.Cell>Merge Now</Table.Cell>
      <Table.Cell>Date</Table.Cell>
      <Table.Cell>SSabu</Table.Cell>
      <Table.Cell>Ready to Merge</Table.Cell>
      <Table.Cell>No Conflicts</Table.Cell>
    </Table.Row>
)

export default PrTableRow;
