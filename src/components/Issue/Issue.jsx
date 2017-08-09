import React from 'react';
import { Card, Item, List, Label, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Issue.css';

function getDescription(assignedTo) {
  if (assignedTo.length > 0) {
    return (
      <div className="ui center aligned">
        <div><Header sub className="space-issues">Assigned To: </Header>{assignedTo[0][0]}</div>
        <Item.Image size="mini" src={assignedTo[0][1]} />
      </div>
    );
  }
  return (
    <div />
  );
}

export const Issue = ({ title, repoIssueNumber, assignedTo, labels }) => {
  const renderedLabels = labels.map(label => (
    <div className="space-labels" key={label}>
      <Label className="ui mini label" ribbon="right" color="grey">{label}
      </Label>
    </div>
  ),
  );

  return (
    <Card.Content>
      <List divided relaxed>
        <List.Item>
          <List.Content>
            <List.Header>#{repoIssueNumber} {title}</List.Header>{renderedLabels}
            <List.Description> {getDescription(assignedTo)}</List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Card.Content>
  );
};

Issue.propTypes = {
  title: PropTypes.string.isRequired,
  repoIssueNumber: PropTypes.number.isRequired,
  assignedTo: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
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
