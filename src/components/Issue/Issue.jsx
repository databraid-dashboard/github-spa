import React from 'react';
import { Item, List, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Issue.css';

function getDescription(assignedTo) {
  if (assignedTo.length > 0) {
    return (
      <div>Assigned To: {assignedTo[0][0]}<div>
        <Item.Image size="mini" src={assignedTo[0][1]} /></div></div>
    );
  }
  return (
    <div />
  );
}

export const Issue = ({ title, repoIssueNumber, assignedTo, labels }) => {
  const renderedLabels = labels.map(label => (
    <div>
      <Label.Group><div className="ui tiny label">{label}
      </div></Label.Group>
    </div>
  ),
  );

  return (
    <List.Item>
      <List.Content className="ui center aligned">
        <List.Header>#{repoIssueNumber} {title}</List.Header>{renderedLabels}
        <List.Description> {getDescription(assignedTo)}</List.Description>
      </List.Content>
    </List.Item>
  );
};

Issue.propTypes = {
  title: PropTypes.string.isRequired,
  repoIssueNumber: PropTypes.number.isRequired,
  assignedTo: PropTypes.arrayOf.isRequired,
  labels: PropTypes.string.isRequired,
};
// NOTE replace Line 43 with below
// assignedTo: PropTypes.arrayOf(PropTypes.number),
export const mapStateToProps = (state, { issueId }) => {
  const issue = state.issues.issuesById[issueId];
  const { title, repoIssueNumber, assignedTo, labels } = issue;
  return {
    title,
    repoIssueNumber,
    assignedTo,
    labels,
  };
};

export default connect(
  mapStateToProps,
)(Issue);
