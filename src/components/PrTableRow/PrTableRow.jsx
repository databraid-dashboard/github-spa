import React from 'react';
import { Card, List, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import injectWidgetId from '../../utils/utils';
import './PrTableRow.css';

const merge = {
  color: 'red',
  position: 'absolute',
  top: '0',
  right: '0',
};

const getMergeable = (able) => {
  if (able) {
    return <div />;
  } else if (able === false) {
    return (
      <Icon style={merge} name="remove" size="big" />
    );
  }
  return <div />;
};

export const PrTableRow = ({ created, mergeable, submittedBy, title }) => {
  const styles = {
    borderTop: '0.25px solid black',
  };

  const space = {
    position: 'relative',
    paddingTop: '4px',
    paddingBottom: '4px',
    fontSize: '16px',
  };

  return (<Card.Content style={styles}>
    <List divided relaxed>
      <List.Item>
        <List.Content className="ui center aligned">
          <List.Header style={space}>
            {title}
          </List.Header>
          <List.Description style={space}>
            date created:
            <Header sub>{moment(created).fromNow()}</Header>
          </List.Description>
          <List.Description style={space}>
            submitted by:
            <Header sub>{submittedBy}</Header>
            {getMergeable(mergeable)}
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  </Card.Content>);
};

PrTableRow.propTypes = {
  created: PropTypes.string.isRequired,
  mergeable: PropTypes.bool,
  submittedBy: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

PrTableRow.defaultProps = {
  mergeable: undefined,
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const prId = ownProps.prId;
  const pr = state.widgets.byId[id].pullRequests.prsById[prId];
  const { created, mergeable, submittedBy, title } = pr;
  return {
    created,
    mergeable,
    submittedBy,
    title,
  };
};

export default injectWidgetId(connect(mapStateToProps)(PrTableRow));
