import React from 'react';
import './Issue.css'
import { List, Label } from 'semantic-ui-react';

function getDescription(assignedTo) {
  if (assignedTo[0] !== 'Not assigned') {
    return (
      <div className="ui center aligned">
        <div><Header sub className="space-issues">Assigned To: </Header>{assignedTo[0]}</div>
        <Item.Image size="mini" src={assignedTo[1]} />
      </div>
    );
  }
  return (
    <div />
  );
}

export const Issue = ({ title, number, assignedTo, labels }) => {
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
            <List.Header>#{number} {title}</List.Header>{renderedLabels}
            <List.Description> {getDescription(assignedTo)}</List.Description>
          </List.Content>
        </List.Item>
      )
};


Issue.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  assignedTo: PropTypes.arrayOf(PropTypes.array).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const mapStateToProps = (state, { issueId }) => {
  const issue = state.issues.issuesById[issueId];
  const { title, number, assignedTo, labels } = issue;
  return {
    title,
    number,
    assignedTo,
    labels
  }
}

export default connect(
  mapStateToProps
)(Issue);
