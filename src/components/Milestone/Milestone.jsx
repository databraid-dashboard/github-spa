import React from 'react';
<<<<<<< HEAD
import './Milestone.css';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';

<<<<<<< HEAD
const Milestone = ({ title, due, created, milestoneId }) => {

  return (
    <List.Item>
        <List.Content className="ui center aligned">
          <List.Header>{title}</List.Header>{created}
          <List.Description>{due}</List.Description>
        </List.Content>
      </List.Item>
  )
}
=======
const Milestone = ({ title, due, created }) => {
=======
import { Card, List, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProgressArc from '../ProgressArc/ProgressArc'
import './Milestone.css';

const Milestone = ({ title, due, created, percentComplete }) => {
>>>>>>> 4def070... Adding percent complete feature

  function convertDate(ISOdate) {

    let date = new Date(ISOdate);
    let formatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      // hour: '2-digit',
      // minute: '2-digit',
      // hour12: true
    };

    let dateString = date.toLocaleDateString('en-US', formatOptions);
    dateString = dateString.replace(',','')
                           .replace('PM','p.m.')
                           .replace('AM','a.m.');
    return dateString;
  }

  function getDueDate(date){
    if (date === null) {
      return <div></div>
    } else {
      return <div><Header sub>Date Due:</Header> {convertDate(date)}</div>
    }
  }

  return (
    <Card.Content>
      <List divided relaxed>
        <List.Item>
          <List.Content className="ui center aligned">
            <List.Header>{title}</List.Header><Header sub>Date Created:</Header> {convertDate(created)}
            {getDueDate(due)}
            <Header sub className="space">Percent Complete:</Header> <ProgressArc percentComplete={percentComplete} duration={2000}/>
          </List.Content>
        </List.Item>
      </List>
    </Card.Content>
      )
};
>>>>>>> df38d77... Adding working orgs page

const mapStateToProps = (state, { milestoneId }) => {
  const milestone = state.milestones.milestonesById[milestoneId];
  const { title, due, created, percentComplete } = milestone;
  console.log('state', due===null);
  return {
    title,
    due,
<<<<<<< HEAD
    created
  }
}
=======
    created,
    percentComplete
  };
};

Milestone.propTypes = {
  title: PropTypes.string.isRequired,
  due: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
};
>>>>>>> 4def070... Adding percent complete feature

export default connect(
  mapStateToProps
)(Milestone);
