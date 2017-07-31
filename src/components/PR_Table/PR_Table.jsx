Import React from 'react';
Import './PR_Table.css';
Import { Table } from 'semantic-ui-react';

const PR_Table = () => {
  return (
    <Table celled fixed singleline>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>

        </Table.Row>
      </Table.Header>
    </Table>
  )
}
