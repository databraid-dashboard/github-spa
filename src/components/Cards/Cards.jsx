import React from 'react';
import './Cards.css'
import { List, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Cards = ({ title, repoIssueNumber, assignedTo, labels }) => {
//   const renderedLabels = labels.map((label, i) => (
//     <div>
//       <Label.Group tag key={i}>
//         <div className='us tiny label'>
//           <Label>{label} </Label>
//       </div></Label.Group>
//     </div>
//   )
// )
    return (

      <List.Item textAlign='center'>
          <List.Content className="ui center aligned">
            <List.Header>#{repoIssueNumber} {title}</List.Header>
            <List.Description>Assigned To: {assignedTo}</List.Description>
          </List.Content>
        </List.Item>
      )

}
 // export default Cards;
const mapStateToProps = (state, { issuesId, issuesById }) => {
  const issue = issuesById[issuesId];
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
)(Cards);
