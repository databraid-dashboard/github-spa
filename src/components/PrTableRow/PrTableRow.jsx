import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import './PrTableRow.css'
=======
>>>>>>> edbe0e0... fml
import { Table, Label, Icon } from 'semantic-ui-react';
=======
import { Card, Item, Label, List, Header, Icon } from 'semantic-ui-react';
>>>>>>> 564c283... Fixing warning messages from tests
=======
import { Card, Item, List, Header } from 'semantic-ui-react';
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
=======
import { Card, List, Header } from 'semantic-ui-react';
>>>>>>> 8213532... Frontend/Backend sync
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './PrTableRow.css';

const getMergeable = (able) => {
  if (able) {
    return 'merge-true';
  } else if (able === false) {
    return 'merge-false';
  }
<<<<<<< HEAD
  return <div><Icon name="minus" size="big" color="violet" /></div>;
};

const getMergeableCheckbox = able => {
  if(able){
    return (
      <div><Icon name='checkmark' size='big' color='green'/></div>
    )
  } else if (able===false) {
    return <div><Icon name='remove' size='big' color='red'/></div>
  } else {
    return <div><Icon name='minus' size='big' color='violet' /></div>
  }
<<<<<<< HEAD
}
=======
  return <div><Icon name="minus" size="big" color="yellow" /></div>;
=======
  return 'merge-null';
>>>>>>> 564c283... Fixing warning messages from tests
};
>>>>>>> df38d77... Adding working orgs page

const convertDate = (ISOdate) => {
  const date = new Date(ISOdate);
  const formatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  const dateString = date.toLocaleDateString('en-US', formatOptions);

  return dateString;
};

<<<<<<< HEAD
const PrTableRow = ({ created, mergeable, submittedBy, title }) => (
<<<<<<< HEAD
<<<<<<< HEAD
    <Table.Row>
      <Table.Cell textAlign='center'>{ title }</Table.Cell>
      <Table.Cell textAlign='center'>{ created }</Table.Cell>
      <Table.Cell textAlign='center'>{ submittedBy[0] }<div><Label size='mini' image={submittedBy[1]}/></div></Table.Cell>
      <Table.Cell textAlign='center'>{ getMergeableCheckbox(mergeable) }</Table.Cell>
    </Table.Row>
)
=======
=======
export const PrTableRow = ({ created, mergeable, submittedBy, title }) => (
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 02a66ea... Adding with some linting errors addressed
  <Table.Row>
    <Table.Cell textAlign="center">{ title }</Table.Cell>
    <Table.Cell textAlign="center">{ convertDate(created) }</Table.Cell>
    <Table.Cell textAlign="center">{ submittedBy[0] }
      <div><Label size="mini" image={submittedBy[1]} /></div></Table.Cell>
    <Table.Cell textAlign="center">{getMergeableCheckbox(mergeable) }</Table.Cell>
=======
  <Table.Row>
    <Table.Cell textAlign="center">{ title }</Table.Cell>
    <Table.Cell textAlign="center">{ created }</Table.Cell>
    <Table.Cell textAlign="center">{ submittedBy[0] }
      <div><Label size="mini" image={submittedBy[1]} /></div></Table.Cell>
    <Table.Cell textAlign="center">{ getMergeableCheckbox(mergeable) }</Table.Cell>
>>>>>>> edbe0e0... fml
  </Table.Row>
=======
<Card.Content className={getMergeable(mergeable)}>
  <List divided relaxed>
    <List.Item>
      <List.Content className='ui center aligned'>
        <List.Header className='space-item'>{title}</List.Header>
        <List.Description className='space-item'><Header sub>date created:</Header>{ convertDate(created)}</List.Description>
        <List.Description className='space-item'><Header sub>Submitted by:</Header>{submittedBy[0]}<div><Item.Image size='mini' src={submittedBy[1]} /></div></List.Description>
      </List.Content>
    </List.Item>
  </List>
</Card.Content>
=======
  <Card.Content className={getMergeable(mergeable)}>
    <List divided relaxed>
      <List.Item>
        <List.Content className="ui center aligned">
          <List.Header className="space-item">{title}</List.Header>
          <List.Description className="space-item">
            <Header sub>date created:</Header>
            { convertDate(created)}
          </List.Description>
          <List.Description className="space-item">
            <Header sub>Submitted by:</Header>{submittedBy}
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  </Card.Content>
<<<<<<< HEAD
>>>>>>> 79473f9... Fixed linting errors, installed redux-mock-store
  // <Table.Row>
  //   <Table.Cell textAlign="center">{ title }</Table.Cell>
  //   <Table.Cell textAlign="center">{ convertDate(created) }</Table.Cell>
  //   <Table.Cell textAlign="center">{ submittedBy[0] }
  //     <div><Label size="mini" image={submittedBy[1]} /></div></Table.Cell>
  //   <Table.Cell textAlign="center">{getMergeableCheckbox(mergeable) }</Table.Cell>
  // </Table.Row>
>>>>>>> 564c283... Fixing warning messages from tests
=======
>>>>>>> 8213532... Frontend/Backend sync
);

PrTableRow.propTypes = {
  created: PropTypes.string.isRequired,
<<<<<<< HEAD
  mergeable: PropTypes.bool.isRequired,
  submittedBy: PropTypes.string.isRequired,
  title: PropTypes.number.isRequired,
=======
  mergeable: PropTypes.bool,
  submittedBy: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

PrTableRow.defaultProps = {
  mergeable: undefined,
>>>>>>> 8213532... Frontend/Backend sync
};
<<<<<<< HEAD
>>>>>>> df38d77... Adding working orgs page
=======
>>>>>>> edbe0e0... fml

export const mapStateToProps = (state, { prId }) => {
  const pr = state.pullRequests.prsById[prId];
  const { created, mergeable, submittedBy, title } = pr;
  return {
    created,
    mergeable,
    submittedBy,
    title,
  };
};

export default connect(
  mapStateToProps,
)(PrTableRow);
