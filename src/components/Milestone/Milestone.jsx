import React from 'react';
import { Card, List, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProgressArc from '../ProgressArc/ProgressArc';
import injectWidgetId from '../../utils/utils';
import './Milestone.css';

export const Milestone = ({ title, due, percentComplete, milestoneId }) => {

  const styles = {
    borderTop: '0.25px solid black',
  }

  const read = {
    fontSize: '16px',
  }

  const space = {
    position: 'relative',
    paddingTop: '12px',
    paddingBottom: '6px',
  }

  function convertDate(ISOdate) {
    const date = new Date(ISOdate);
    const formatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };

    const dateString = date.toLocaleDateString('en-US', formatOptions);

    return dateString;
  }

  function getDueDate(date) {
    if (date === null) {
      return <div />;
    }
    return (
      <div>
        <Header sub style={space}>Date Due: </Header>
        {convertDate(date)}
      </div>
    );
  }

  return (
    <Card.Content style={styles}>
      <List divided relaxed>
        <List.Item>
          <List.Content className="ui center aligned">
            <List.Header style={read}>
              {title}
            </List.Header>
            {getDueDate(due)}
            <Header sub style={space}>Percent Complete: </Header>
            <ProgressArc
              milestoneId={milestoneId}
              percentComplete={percentComplete}
              duration={2000}
            />
          </List.Content>
        </List.Item>
      </List>
    </Card.Content>
  );
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const milestoneId = ownProps.milestoneId;
  const milestone = state.widgets.byId[id].milestones.milestonesById[milestoneId];
  const { title, due, percentComplete } = milestone;

  return {
    title,
    due,
    percentComplete,
    milestoneId,
  };
};

Milestone.propTypes = {
  milestoneId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  due: PropTypes.string,
  percentComplete: PropTypes.number.isRequired,
};

Milestone.defaultProps = {
  due: undefined,
  milestoneId: 0,
  title: '',
  percentComplete: 0,
};

export default injectWidgetId(connect(mapStateToProps)(Milestone));
