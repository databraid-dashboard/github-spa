/* eslint-disable import/no-named-as-default, consistent-return */
import React, { Component } from 'react';
import { Header, Icon, Grid, List, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { retrieveRepos } from '../../actions/repoActions';
import { renderOrgs } from '../../actions/renderActions';
import Repo from '../Repo/Repo';
import './RepoList.css';

function repoComponents(repos, org) {
  if(repos && repos[org]){ return repos[org].map(id =>
    <Repo key={id} repoId={id} />
  )} else {
    return ''
  }
}

export class RepoList extends Component {
  componentDidMount() {
      this.props.retrieveRepos(this.props.userName, this.props.orgName);
  }

  render() {
      return (
        <div>
          <Button icon onClick={() => this.props.renderOrgs()}>
            <Icon name="arrow left" />
          </Button>
          <Grid centered padded>
            <Grid.Column width={8}>
              <Header as="h2" icon textAlign="center">
                <Icon name="github" />
                <Header.Content>
                  Which repository are you interested in?
                </Header.Content>
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
  // repoComponents: PropTypes.func.isRequired,
  retrieveRepos: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
  renderOrgs: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  reposByOrg:  state.repos.reposByOrg ,
  repoIds: state.repos.ids,
  reposById: state.repos.reposById,
  currentPage: state.currentPage.render,
  userName: state.currentPage.userName,
  orgName: state.currentPage.selectedOrgName
});

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveRepos, renderOrgs,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoList);
