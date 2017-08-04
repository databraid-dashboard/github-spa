import React from 'react';
import './Milestone.css';
import { Item, List } from 'semantic-ui-react';
import { connect } from 'react-redux';

export const Milestone = ({ title, due, created }) => {

  return (
    <List.Item textAlign='center'>
        <List.Content className="ui center aligned">
          <List.Header>{title}</List.Header>{created}
          <List.Description>{due}</List.Description>
        </List.Content>
      </List.Item>
  )
}

export const mapStateToProps = (state, { milestoneId }) => {
  console.log('state for josh', state);
  const milestone = state.milestones.milestonesByID[milestoneId];
  const { title, due, created } = milestone;
  return {
    title,
    due,
    created
  }
}

export default connect(
  mapStateToProps
)(Milestone);
