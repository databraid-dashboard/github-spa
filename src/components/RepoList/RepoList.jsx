import React, {Component} from 'react';
import { List } from 'semantic-ui-react';
import Repo from '../Repo/Repo.jsx';
import './RepoList.css'
import {retrieveRepos} from '../../actions/orgActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class RepoList extends Components{

  componentDidMount(){
    this.props.retreiveRepos();
  }

  repoComponents = (repoIds) => {
    return repoIds.map(id => {
      <Repo key={id} repoId={id} />
    })
  }

  render(){
    return (
      <List>
        {this.props.repoComponents(this.props.repoIds)}
      </List>
    )
  }
};

const mapStateToProps = state => {
  return {
    repoIds: state.repos.ids,
    reposById: state.repos.reposById
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators ({
    retrieveRepos
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);
