/* eslint-disable import/no-named-as-default, consistent-return */
import React, { Component } from 'react';
import { Header, Icon, Grid, List, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { retrieveRepos } from '../../actions/repoActions';
import { fetchOrgs } from '../../actions/renderActions';
import Repo from '../Repo/Repo';
import injectWidgetId from '../../utils/utils';
import './RepoList.css';

function repoComponents(repos, org) {
  if (repos && repos[org]) {
    return repos[org].map(id => <Repo key={id} repoId={id} />);
  }
  return '';
}

export class RepoList extends Component {
  componentDidMount() {
    this.props.retrieveRepos(this.props.userName, this.props.orgName);
  }

  render() {
    return (
      <div>
        <Button icon onClick={() => this.props.fetchOrgs(this.props.userName)}>
          <Icon name="arrow left" />
        </Button>
        <Grid centered padded>
          <Grid.Column width={8}>
            <Header as="h2" icon textAlign="center">
              <Icon name="github" />
              <Header.Content>Which repository are you interested in?</Header.Content>
            </Header>
            <List animated divided relaxed size="huge">
              {repoComponents(this.props.reposByOrg, this.props.orgName)}
            </List>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

RepoList.propTypes = {
  retrieveRepos: PropTypes.func.isRequired,
  fetchOrgs: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  orgName: PropTypes.string.isRequired,
  reposByOrg: PropTypes.objectOf(PropTypes.array),
};

RepoList.defaultProps = {
  reposByOrg: {},
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const reposByOrg = state.widgets.byId[id].repos.reposByOrg;
  const repoIds = state.widgets.byId[id].repos.ids;
  const reposById = state.widgets.byId[id].repos.reposById;
  const userName = state.widgets.byId[id].currentPage.userName;
  const orgName = state.widgets.byId[id].currentPage.selectedOrgName;

  return {
    reposByOrg,
    repoIds,
    reposById,
    userName,
    orgName,
  };
};

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveRepos,
    fetchOrgs,
  }, dispatch);

export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(RepoList));
