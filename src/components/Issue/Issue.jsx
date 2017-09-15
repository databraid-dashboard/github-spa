import React from 'react';
import { Card, Item, List, Label, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import injectWidgetId from '../../utils/utils';
import './Issue.css';

function getDescription(assignedTo) {
  if (assignedTo[0] !== 'Not assigned') {
    return (
      <div className="ui center aligned">
        <div>
          <Header sub id="space-issues">Assigned To: </Header>
          {assignedTo[0]}
        </div>
        <Item.Image id="custom-photo" size="small" src={assignedTo[1]} />
      </div>
    );
  }
  return <div />;
}

export const Issue = ({ title, number, assignedTo, labels }) => {
  const renderedLabels = labels.map(label => (
    <div id="space-labels" key={label}>
      <Label className="ui medium label" ribbon="right" color="grey">
        {label}
      </Label>
    </div>));

  return (
    <Card.Content id="thinline">
      <List divided relaxed>
        <List.Item>
          <List.Content className='readable'>
            <List.Header>
            #{number} {title}
            </List.Header>
            {renderedLabels}
            <List.Description>
              {' '}{getDescription(assignedTo)}
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </Card.Content>);
};

Issue.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  assignedTo: PropTypes.arrayOf(PropTypes.string).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const issueId = ownProps.issueId;
  const issue = state.widgets.byId[id].issues.issuesById[issueId];
  const { title, number, assignedTo, labels } = issue;

  return {
    title,
    number,
    assignedTo,
    labels,
  };
};

export default injectWidgetId(connect(mapStateToProps)(Issue));
