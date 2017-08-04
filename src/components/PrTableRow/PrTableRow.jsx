import React from 'react';
import './PrTableRow.css'
import { Table, Label, Icon } from 'semantic-ui-react';
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
  return 'merge-null';
};

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

export const PrTableRow = ({ created, mergeable, submittedBy, title }) => (
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
            <Header sub>Submitted by:</Header>{submittedBy[0]}<div>
              <Item.Image size="mini" src={submittedBy[1]} /></div>
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  </Card.Content>
  // <Table.Row>
  //   <Table.Cell textAlign="center">{ title }</Table.Cell>
  //   <Table.Cell textAlign="center">{ convertDate(created) }</Table.Cell>
  //   <Table.Cell textAlign="center">{ submittedBy[0] }
  //     <div><Label size="mini" image={submittedBy[1]} /></div></Table.Cell>
  //   <Table.Cell textAlign="center">{getMergeableCheckbox(mergeable) }</Table.Cell>
  // </Table.Row>
=======
  return <div><Icon name="minus" size="big" color="yellow" /></div>;
};

const convertDate = (ISOdate) => {

  let date = new Date(ISOdate);
  let formatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };

  let dateString = date.toLocaleDateString('en-US', formatOptions);
  dateString = dateString.replace(',','')
                         .replace('PM','p.m.')
                         .replace('AM','a.m.');
  return dateString;
}

const PrTableRow = ({ created, mergeable, submittedBy, title }) => (
  <Table.Row>
    <Table.Cell textAlign="center">{ title }</Table.Cell>
    <Table.Cell textAlign="center">{ convertDate(created) }</Table.Cell>
    <Table.Cell textAlign="center">{ submittedBy[0] }
      <div><Label size="mini" image={submittedBy[1]} /></div></Table.Cell>
    <Table.Cell textAlign="center">{getMergeableCheckbox(mergeable) }</Table.Cell>
  </Table.Row>
>>>>>>> Adding working orgs page
);

PrTableRow.propTypes = {
  created: PropTypes.string.isRequired,
  mergeable: PropTypes.bool,
  submittedBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

PrTableRow.defaultProps = {
  mergeable: undefined,
};

export const mapStateToProps = (state, { prId }) => {
  const pr = state.pullRequests.prsById[prId];
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
