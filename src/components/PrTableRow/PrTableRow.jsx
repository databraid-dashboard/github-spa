import React from 'react';
import { Card, List, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import injectWidgetId from '../../utils/utils';
import './PrTableRow.css';

const getMergeable = (able) => {
  if (able) {
    return <div />;
  } else if (able === false) {
    return (
      <Icon id="merge-float" name="remove" size="big" />
    );
  }
  return <div />;
};

// function getDescription(assignedTo) {
//   if (assignedTo[0] !== 'Not assigned') {
//     return (
//       <div className="ui center aligned">
//         <div>
//           <Header sub className="space-issues">Assigned To: </Header>
//           {assignedTo[0]}
//         </div>
//         <Item.Image size="mini" src={assignedTo[1]} />
//       </div>
//     );
//   }
//   return <div />;
// }

// const convertDate = (ISOdate) => {
//   console.log('::::DATE::::', ISOdate);
//   const date = new Date(ISOdate);
//   const formatOptions = {
//     day: '2-digit',
//     month: '2-digit',
//     year: 'numeric',
//   };
//   const dateString = date.toLocaleDateString('en-US', formatOptions);
//   return dateString;
// };

export const PrTableRow = ({ created, mergeable, submittedBy, title }) =>
  (<Card.Content id="thinline">
    <List divided relaxed>
      <List.Item>
        <List.Content className="ui center aligned">
          <List.Header id="space-item">
            {title}
          </List.Header>
          <List.Description id="space-item">
            date created:
            <Header sub>{moment(created).fromNow()}</Header>
          </List.Description>
          <List.Description id="space-item">
            submitted by:
            <Header sub>{submittedBy}</Header>
            {getMergeable(mergeable)}
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  </Card.Content>);

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
