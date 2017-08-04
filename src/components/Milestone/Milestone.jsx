import React from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Milestone.css';

const Milestone = ({ title, due, created }) => (
  <List.Item>
    <List.Content className="ui center aligned">
      <List.Header>{title}</List.Header>{created}
      <List.Description>{due}</List.Description>
    </List.Content>
  </List.Item>
);

const mapStateToProps = (state, { milestoneId }) => {
  console.log('state1', state);
  const milestone = state.milestones.milestonesByID[milestoneId];
  const { title, due, created } = milestone;
  return {
    title,
    due,
    created,
  };
};

Milestone.propTypes = {
  title: PropTypes.string.isRequired,
  due: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
)(Milestone);
