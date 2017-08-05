import React, { Component } from 'react';
import { Card, Feed, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Issue from '../Issue/Issue';
import { retrieveIssues } from '../../actions/issueActions';
import './Issues.css';

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
            Git Issues
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
  issuesIds: PropTypes.array,
  loadingIssues: PropTypes.bool.isRequired,
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
