import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import './Milestone.css';
=======
>>>>>>> edbe0e0... fml
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Milestone.css';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const Milestone = ({ title, due, created, milestoneId }) => {
=======
export const Milestone = ({ title, due, created }) => {
>>>>>>> db00290... renamed files, finished tests for issue

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
import ProgressArc from '../ProgressArc/ProgressArc';
import './Milestone.css';

<<<<<<< HEAD
<<<<<<< HEAD
const Milestone = ({ title, due, created, percentComplete }) => {
>>>>>>> 4def070... Adding percent complete feature
=======
export const Milestone = ({ title, due, created }) => {
<<<<<<< HEAD
>>>>>>> 88f4b03... Added passing tests on <Org and <Orgs

=======
>>>>>>> 8dc7899... removed MSTP's where uneeded, wrote test for components ready for pr, limited scoped of PR  via .gitignore dashboard feature
=======
export const Milestone = ({ title, due, created, percentComplete }) => {
>>>>>>> 02a66ea... Adding with some linting errors addressed
=======
export const Milestone = ({ title, due, created, percentComplete, milestoneId }) => {
>>>>>>> b6ccb44... Parsed strings properly in ProgressArc, passed milestoneId down into ProgressArc
  function convertDate(ISOdate) {
    const date = new Date(ISOdate);
    const formatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
<<<<<<< HEAD
<<<<<<< HEAD
      // hour: '2-digit',
      // minute: '2-digit',
      // hour12: true
=======
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
>>>>>>> 8dc7899... removed MSTP's where uneeded, wrote test for components ready for pr, limited scoped of PR  via .gitignore dashboard feature
=======
>>>>>>> 564c283... Fixing warning messages from tests
    };

    const dateString = date.toLocaleDateString('en-US', formatOptions);

    return dateString;
  }

<<<<<<< HEAD
<<<<<<< HEAD
  function getDueDate(date){
=======
  function getDueDate(date) {
>>>>>>> 02a66ea... Adding with some linting errors addressed
    if (date === null) {
      return <div />;
    }
    return (
      <div>
        <Header sub className="space-milestones">
        Date Due:
        </Header> {convertDate(date)}
      </div>
    );
  }

  return (
    <Card.Content>
      <List divided relaxed>
        <List.Item>
          <List.Content className="ui center aligned">
            <List.Header>{title}</List.Header>
            <Header sub className="space-milestones">Date Created:</Header>
            {convertDate(created)}
            {getDueDate(due)}
            <Header sub className="space-milestones">Percent Complete:</Header>
            <ProgressArc
              milestoneId={milestoneId}
              percentComplete={percentComplete}
              duration={2000}
            />
          </List.Content>
        </List.Item>
      </List>
    </Card.Content>
<<<<<<< HEAD
      )
=======

  return (
    <List.Item>
      <List.Content className="ui center aligned">
        <List.Header>{title}</List.Header>{convertDate(created)}
        <List.Description>{due}</List.Description>
      </List.Content>
    </List.Item>
  );
>>>>>>> 8dc7899... removed MSTP's where uneeded, wrote test for components ready for pr, limited scoped of PR  via .gitignore dashboard feature
=======
  );
>>>>>>> 02a66ea... Adding with some linting errors addressed
};
>>>>>>> df38d77... Adding working orgs page

<<<<<<< HEAD
<<<<<<< HEAD
const mapStateToProps = (state, { milestoneId }) => {
  const milestone = state.milestones.milestonesById[milestoneId];
  const { title, due, created, percentComplete } = milestone;
  console.log('state', due===null);
=======
export const mapStateToProps = (state, { milestoneId }) => {
  console.log('state for josh', state);
=======
const Milestone = ({ title, due, created }) => (
  <List.Item>
    <List.Content className="ui center aligned">
      <List.Header>{title}</List.Header>{created}
      <List.Description>{due}</List.Description>
    </List.Content>
  </List.Item>
);

<<<<<<< HEAD
const mapStateToProps = (state, { milestoneId }) => {
  console.log('state1', state);
>>>>>>> edbe0e0... fml
  const milestone = state.milestones.milestonesByID[milestoneId];
=======
export const mapStateToProps = (state, { milestoneId }) => {
  const milestone = state.milestones.milestonesById[milestoneId];
>>>>>>> 88f4b03... Added passing tests on <Org and <Orgs
  const { title, due, created } = milestone;
>>>>>>> db00290... renamed files, finished tests for issue
=======
export const mapStateToProps = (state, { milestoneId }) => {
  const milestone = state.milestones.milestonesById[milestoneId];
  const { title, due, created, percentComplete } = milestone;
<<<<<<< HEAD
  console.log('state', due === null);
>>>>>>> 02a66ea... Adding with some linting errors addressed
=======
>>>>>>> 2f2a056... Adding with fewer linting errors
  return {
    title,
    due,
<<<<<<< HEAD
<<<<<<< HEAD
    created
  }
}
=======
    created,
<<<<<<< HEAD
    percentComplete
=======
    created,
>>>>>>> edbe0e0... fml
=======
    percentComplete,
<<<<<<< HEAD
>>>>>>> 02a66ea... Adding with some linting errors addressed
=======
    milestoneId,
>>>>>>> b6ccb44... Parsed strings properly in ProgressArc, passed milestoneId down into ProgressArc
  };
};

Milestone.propTypes = {
  milestoneId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  due: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  percentComplete: PropTypes.number.isRequired,
};
<<<<<<< HEAD
>>>>>>> 4def070... Adding percent complete feature
=======
>>>>>>> edbe0e0... fml

export default connect(
  mapStateToProps,
)(Milestone);
