/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
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
            Issues
          </Card.Header>
        </Card.Content>
        {issueComponents(this.props.issuesIds)}
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
