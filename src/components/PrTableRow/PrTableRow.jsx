import React from 'react';
import { Card, List, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './PrTableRow.css';

const getMergeable = (able) => {
  if (able) {
    return 'merge-true';
  } else if (able === false) {
    return 'merge-false';
  }
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
            <Header sub>Submitted by:</Header>{submittedBy}
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  </Card.Content>
<<<<<<< HEAD
  // <Table.Row>
  //   <Table.Cell textAlign="center">{ title }</Table.Cell>
  //   <Table.Cell textAlign="center">{ convertDate(created) }</Table.Cell>
  //   <Table.Cell textAlign="center">{ submittedBy[0] }
  //     <div><Label size="mini" image={submittedBy[1]} /></div></Table.Cell>
  //   <Table.Cell textAlign="center">{getMergeableCheckbox(mergeable) }</Table.Cell>
  // </Table.Row>

=======
>>>>>>> Frontend/Backend sync
);

PrTableRow.propTypes = {
  created: PropTypes.string.isRequired,
  mergeable: PropTypes.bool,
  submittedBy: PropTypes.string.isRequired,
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
    title,
  };
};

export default connect(
  mapStateToProps,
)(PrTableRow);
