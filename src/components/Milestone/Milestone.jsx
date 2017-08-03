import React from 'react';
import './Milestone.css';
import { Item, List } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Milestone = ({ title, due, created }) => {

  return (
    <List.Item textAlign='center'>
        <List.Content className="ui center aligned">
          <List.Header>{title}</List.Header>{created}
          <List.Description>{due}</List.Description>
        </List.Content>
      </List.Item>
  )
}

const mapStateToProps = (state, { milestoneId }) => {
  const milestone = state.milestones.milestonesById[milestoneId];
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
