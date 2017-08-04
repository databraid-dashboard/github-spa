import React from 'react';
import { Item, List, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Issue.css';

export const Issue = ({ title, repoIssueNumber, assignedTo, labels, issueId }) => {
  const renderedLabels = labels.map(label => (
    <div>
      <Label.Group><div className="ui tiny label">{label}
      </div></Label.Group>
    </div>
  ),
  );

  function getDescription(assignedTo) {
    if (assignedTo.length > 0) {
      return (
        <div>Assigned To: {assignedTo[0][0]}<div>
          <Item.Image size="mini" src={assignedTo[0][1]} /></div></div>
      );
    }
  }


  return (
    <List.Item>
      <List.Content key={issueId + 1} className="ui center aligned">
        <List.Header>#{repoIssueNumber} {title}</List.Header>{renderedLabels}
        <List.Description> {getDescription(assignedTo)}</List.Description>
      </List.Content>
    </List.Item>
  );
};

Issue.propTypes = {
  title: PropTypes.string.isRequired,
  repoIssueNumber: PropTypes.number.isRequired,
  assignedTo: PropTypes.string.isRequired,
  labels: PropTypes.string.isRequired,
  issueId: PropTypes.number.isRequired,
};

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
