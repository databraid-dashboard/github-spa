import React from 'react';
import './Issue.css'
<<<<<<< HEAD
import { List, Label } from 'semantic-ui-react';
=======
import { Item, List, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
>>>>>>> d3454fd... Adding PR Table and Milestones Components

<<<<<<< HEAD
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
=======
export const Issue = ({ title, repoIssueNumber, assignedTo, labels, issueId }) => {
>>>>>>> 0365ab2... fixed related milestone: errors, loading feature, tests, must re-update snapshot, not rendering
  const renderedLabels = labels.map((label, i) => (
    <div>
        <Label.Group><div className='ui tiny label'>{label}
      </div></Label.Group>
    </div>
  )
)

  function getDescription(assignedTo){
    if(assignedTo.length > 0){
      return (
        <div>Assigned To: {assignedTo[0][0]}<div>
        <Item.Image size='mini' src={assignedTo[0][1]}/></div></div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }

    return (
<<<<<<< HEAD
      <List.Item>
=======
      <List.Item textAlign='center'>
>>>>>>> 0365ab2... fixed related milestone: errors, loading feature, tests, must re-update snapshot, not rendering
          <List.Content className="ui center aligned">
            <List.Header>#{repoIssueNumber} {title}</List.Header>{renderedLabels}
            <List.Description> {getDescription(assignedTo)}</List.Description>
          </List.Content>
        </List.Item>
      )

}

<<<<<<< HEAD
const mapStateToProps = (state, { issueId }) => {
<<<<<<< HEAD

=======
>>>>>>> 0365ab2... fixed related milestone: errors, loading feature, tests, must re-update snapshot, not rendering
=======
export const mapStateToProps = (state, { issueId }) => {
>>>>>>> df38d77... Adding working orgs page
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
