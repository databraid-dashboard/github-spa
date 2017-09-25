/* eslint-disable import/no-named-as-default, consistent-return */
import React, { Component } from 'react';
import { Header, Icon, Grid, List, Button, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { retrieveRepos } from '../../actions/repoActions';
import { displayOrgs } from '../../actions/renderActions';
import Repo from '../Repo/Repo';
import Logout from '../Logout/Logout';
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
        <Menu compact>
          <Menu.Item>
            <Button icon onClick={() => this.props.displayOrgs(this.props.userName)}>
              <Icon name="arrow left" />
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Logout />
          </Menu.Item>
        </Menu>
        <Grid centered padded>
          <Grid.Row width={16}>
            <Header as="h2" icon textAlign="center">
              <Icon name="github" />
              <Header.Content>Which repository are you interested in?</Header.Content>
            </Header>
          </Grid.Row>
          <Grid.Row width={16}>
            <List id="repo-list" animated divided horizontal selection size="huge">
              {repoComponents(this.props.reposByOrg, this.props.orgName)}
            </List>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

RepoList.propTypes = {
  retrieveRepos: PropTypes.func.isRequired,
  displayOrgs: PropTypes.func.isRequired,
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
    displayOrgs,
  }, dispatch);

export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(RepoList));
