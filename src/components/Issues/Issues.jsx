/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import './Issues.css';
import { Card, Feed, List, Dimmer, Loader, Image, Segment } from 'semantic-ui-react';
import Issue from '../Issue/Issue.jsx';
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
    console.log('hello');
    this.props.retrieveIssues();
  }

  issueComponents(issuesIds) {
    return issuesIds.sort((a, b) => a - b).map(id => (
      <Issue key={id} issueId={id} />
    ));
  }

  render() {
    console.log('this.props.loadingIssues', this.props);
    if (this.props.loadingIssues) {
      return (
        <div>Loading Issues</div>
      );
    }
    return (
      <Card>
        <Card.Content>
          <Card.Header className="ui center aligned">
            Issues
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <List divided relaxed>
              {this.issueComponents(this.props.issuesIds)}
            </List>
          </Feed>
        </Card.Content>
      </Card>
    );
  }
}

Issues.propTypes = {
  retrieveIssues: PropTypes.func.isRequired,
  loadingIssues: PropTypes.bool,
  issuesIds: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Issues.defaultProps = {
  loadingIssues: false,
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
