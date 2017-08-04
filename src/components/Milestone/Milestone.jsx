import React from 'react';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Milestone.css';

const Milestone = ({ title, due, created }) => {

  function convertDate(ISOdate) {

    let date = new Date(ISOdate);
    let formatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };

    let dateString = date.toLocaleDateString('en-US', formatOptions);
    dateString = dateString.replace(',','')
                           .replace('PM','p.m.')
                           .replace('AM','a.m.');
    return dateString;
  }



  return (
      <List.Item>
        <List.Content className="ui center aligned">
          <List.Header>{title}</List.Header>{convertDate(created)}
          <List.Description>{due}</List.Description>
        </List.Content>
      </List.Item>
      )
};

const mapStateToProps = (state, { milestoneId }) => {
  console.log('state', state);
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
