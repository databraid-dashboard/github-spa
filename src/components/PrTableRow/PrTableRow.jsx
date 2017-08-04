import React from 'react';
import { Table, Label, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './PrTableRow.css';

const getMergeableCheckbox = (able) => {
  if (able) {
    return (
      <div><Icon name="checkmark" size="big" color="green" /></div>
    );
  } else if (able === false) {
    return <div><Icon name="remove" size="big" color="red" /></div>;
  }
  return <div><Icon name="minus" size="big" color="violet" /></div>;
};

const PrTableRow = ({ created, mergeable, submittedBy, title }) => (
  <Table.Row>
    <Table.Cell textAlign="center">{ title }</Table.Cell>
    <Table.Cell textAlign="center">{ created }</Table.Cell>
    <Table.Cell textAlign="center">{ submittedBy[0] }
      <div><Label size="mini" image={submittedBy[1]} /></div></Table.Cell>
    <Table.Cell textAlign="center">{ getMergeableCheckbox(mergeable) }</Table.Cell>
  </Table.Row>
);

PrTableRow.propTypes = {
  created: PropTypes.string.isRequired,
  mergeable: PropTypes.bool.isRequired,
  submittedBy: PropTypes.string.isRequired,
  title: PropTypes.number.isRequired,
};

const mapStateToProps = (state, { prId }) => {
  const pr = state.pullRequests.prsByID[prId];
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
