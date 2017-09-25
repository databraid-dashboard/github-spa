/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Issue from '../Issue/Issue';
import { retrieveIssues } from '../../actions/issueActions';
import injectWidgetId from '../../utils/utils';
import './Issues.css';

function issueComponents(issues, repo) {
  if (issues && issues[repo]) {
    return issues[repo].reverse().map(id => <Issue key={id} issueId={id} />);
  }
  return '';
}

export class Issues extends Component {

  componentDidMount() {
    this.props.retrieveIssues(this.props.userName, this.props.orgName, this.props.repoName);
  }

  render() {
    const styles = {
      border: '0.25px solid black',
    };

    const titles = {
      fontSize: '14px',
    };

    const height = {
      height: '40px',
    };

    if (this.props.loadingIssues) {
      return <div>Loading Issues</div>;
    }

    if (!Object.keys(this.props.issuesByRepo).length) {
      return (<Card style={styles}><Card.Content style={height}>
        <Card.Header style={titles} className="ui center aligned">No Issues!</Card.Header>
      </Card.Content></Card>);
    }

    return (
      <Card style={styles}>
        <Card.Content style={height}>
          <Card.Header style={titles} className="ui center aligned">
              Issues
          </Card.Header>
        </Card.Content>
        {issueComponents(this.props.issuesByRepo, this.props.repoName)}
      </Card>
    );
  }
}

Issues.propTypes = {
  retrieveIssues: PropTypes.func.isRequired,
  loadingIssues: PropTypes.bool,
  userName: PropTypes.string.isRequired,
  orgName: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
  issuesByRepo: PropTypes.objectOf(PropTypes.array),
};

Issues.defaultProps = {
  loadingIssues: false,
  issuesByRepo: {},
  userName: '',
  repoName: '',
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const issuesByRepo = state.widgets.byId[id].issues.issuesByRepo;
  const loadingIssues = state.widgets.byId[id].loadingIssues;
  const orgName = state.widgets.byId[id].currentPage.selectedOrgName;
  const userName = state.widgets.byId[id].currentPage.userName;

  return {
    issuesByRepo,
    loadingIssues,
    orgName,
    userName,
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveIssues,
  }, dispatch);

export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(Issues));
