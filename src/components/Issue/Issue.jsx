import React from 'react';
import './Issue.css'
import { Item, List, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';

export const Issue = ({ title, repoIssueNumber, assignedTo, labels, issueId }) => {
  const renderedLabels = labels.map((label, i) => (
    <div>
      <Label.Group tag key={i}>
        <div className='us tiny label'>
          <Label>{label} </Label>
      </div></Label.Group>
    </div>
  )
)
  // const assignee = assignedTo.map((assignee) => (
  //   if(assignee.length===0) {
  //     return (
  //       <div></div>
  //     )
  //   } else {
  //     return (
  //       <div>
  //         <List.Description>Assigned To:{assignee}</List.Description>
  //       </div>
  //     )
  //   }
  // ))

    return (
      <List.Item textAlign='center'>
          <List.Content key ={issueId + 1 }className="ui center aligned">
            <List.Header>#{repoIssueNumber} {title}</List.Header>{renderedLabels}
            <List.Description>Assigned To: {assignedTo}</List.Description>
          </List.Content>
        </List.Item>
      )

}

export const mapStateToProps = (state, { issueId }) => {
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
