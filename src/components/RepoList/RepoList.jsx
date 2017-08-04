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

function repoComponents(repoIds) {
  return repoIds.map(id => <Repo key={id} repoId={id} />);
}

export class RepoList extends Component {
  componentDidMount() {
    this.props.retrieveRepos();
  }

  render() {
    return (
      <Grid centered padded>
        <Grid.Column width={8}>
          <Header as='h2' icon textAlign='center'>
            <Icon name='github'/>
            <Header.Content>
              Which repository are you interested in?
            </Header.Content>
          </Header>
              <List animated divided relaxed size='huge'>
            {this.repoComponents(this.props.repoIds)}
              </List>
        </Grid.Column>
      </Grid>
    );
  }
}

RepoList.propTypes = {
  repoComponents: PropTypes.func.isRequired,
  retrieveRepos: PropTypes.func.isRequired,
  repoIds: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  repoIds: state.repos.ids,
  reposById: state.repos.reposById,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    retrieveRepos,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoList);
