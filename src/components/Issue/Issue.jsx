import React from 'react';
import './Issue.css'
import { List, Label } from 'semantic-ui-react';

<<<<<<< HEAD:src/components/Cards/Cards.jsx
const Cards = () => (
  <List.Item textAlign='center'>
      <List.Content className="ui center aligned">
        <List.Header>#1 Git Issue One</List.Header><Label.Group tag><div className="us tiny label"><Label>question</Label></div></Label.Group>
        <List.Description>Assignees: Jenny</List.Description>
      </List.Content>
    </List.Item>
)

export default Cards;
=======
const Issue = ({ title, repoIssueNumber, assignedTo, labels, issueId }) => {
  const renderedLabels = labels.map((label, i) => (
    <div>
      <Label.Group tag key={i}>
        <div className='us tiny label'>
          <Label>{label} </Label>
      </div></Label.Group>
    </div>
  )
)
    return (
      <List.Item textAlign='center'>
        {console.log('mounted')}
          <List.Content className="ui center aligned">
            <List.Header>#{repoIssueNumber} {title}</List.Header>
            <List.Description>Assigned To: {assignedTo}</List.Description>
          </List.Content>
        </List.Item>
      )

}

const mapStateToProps = (state, { issueId }) => {
  console.log(state, 'mapStateToProps');
  const issue = state.issues.issuesById[issueId];
  const { title, repoIssueNumber, assignedTo, labels  } = issue;
  return {
    title,
    repoIssueNumber,
    assignedTo,
    labels
  }
}

export default connect(
  mapStateToProps
)(Issue);
>>>>>>> c317919... Adding Issues component:src/components/Issue/Issue.jsx
