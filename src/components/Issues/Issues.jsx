/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Card, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Issue from '../Issue/Issue';
import { retrieveIssues } from '../../actions/issueActions';
import './Issues.css';

function issueComponents(issuesIds) {
  return issuesIds.sort((a, b) => a - b).map(id => (
    <Issue key={id} issueId={id} />
  ));
}

export class Issues extends Component {
  componentDidMount() {
    this.props.retrieveIssues();
  }

  render() {
    if (this.props.loadingIssues) {
      return (
        <div>Loading Issues</div>
      );
    }
    return (
      <Card>
        <Card.Content>
          <Card.Header className="ui center aligned">
            Git Issues
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <List divided relaxed>
            {issueComponents(this.props.issuesIds)}
          </List>
        </Card.Content>
      </Card>
    );
  }
}

Issues.propTypes = {
  retrieveIssues: PropTypes.func.isRequired,
  loadingIssues: PropTypes.bool.isRequired,
  issuesIds: PropTypes.arrayOf.isRequired,
};

export const mapStateToProps = state => ({
  issuesIds: state.issues.ids,
  loadingIssues: state.loadingIssues,
});

export const mapDispatchToProps = dispatch => bindActionCreators({
  retrieveIssues,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Issues);
